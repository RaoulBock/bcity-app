import React from "react";

const Table = ({ headers = [], data = [] }) => {
  return (
    <div className="custom-table-wrapper">
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={headers.length} className="no-data">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr key={i}>
                {headers.map((header, j) => (
                  <td key={j}>{row[header.toLowerCase()]}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
