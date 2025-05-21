import React, { useState, useEffect, useRef } from "react";
import { APP_ICONS } from "../../Context/Settings";

const Table = ({ headers = [], data = [], pageSize = 20 }) => {
  const [visibleCount, setVisibleCount] = useState(
    Math.min(pageSize, data.length)
  );
  const wrapperRef = useRef(null);

  const handleScroll = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // console.log("scrollTop:", wrapper.scrollTop, "clientHeight:", wrapper.clientHeight, "scrollHeight:", wrapper.scrollHeight);
    if (wrapper.scrollTop + wrapper.clientHeight >= wrapper.scrollHeight - 50) {
      setVisibleCount((prev) => {
        if (prev >= data.length) return prev;
        return Math.min(prev + pageSize, data.length);
      });
    }
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.addEventListener("scroll", handleScroll);
    return () => wrapper.removeEventListener("scroll", handleScroll);
  }, [data.length]);

  // Reset visibleCount when data changes
  useEffect(() => {
    setVisibleCount(Math.min(pageSize, data.length));
  }, [data, pageSize]);

  return (
    <div
      className="custom-table-wrapper"
      ref={wrapperRef}
      style={{
        maxHeight: "400px",
        overflowY: "auto",
      }}
    >
      <div className="input-with-icon">
        <small className="input-icon-text">{APP_ICONS.SEARCH}</small>
        <input
          type={"search"}
          placeholder="Search Clients, name or code no ..."
          className="search-input"
        />
      </div>
      <table
        className="custom-table"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                style={{
                  padding: "10px",
                  backgroundColor: "#f0f0f0",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length}
                style={{ textAlign: "center", padding: "20px", color: "#999" }}
              >
                No data available
              </td>
            </tr>
          ) : (
            data.slice(0, visibleCount).map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                {headers.map((header, j) => (
                  <td key={j} style={{ padding: "10px" }}>
                    {row[header.toLowerCase()]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      {visibleCount < data.length && (
        <div
          style={{
            padding: "10px",
            textAlign: "center",
            fontStyle: "italic",
            color: "#666",
          }}
        >
          Loading more...
        </div>
      )}
    </div>
  );
};

export default Table;
