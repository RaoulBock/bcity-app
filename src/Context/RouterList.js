import ClientWindow from "../WIndows/ClientWindow";
import NotFoundWindow from "../WIndows/NotFoundWindow";

export const ROUTERS = [
  {
    path: "/",
    element: <ClientWindow />,
  },
  {
    path: "*",
    element: <NotFoundWindow />,
  },
];
