import { createBrowserRouter } from "react-router-dom";
import MainRouts from "./MainRouts";
import App from "../App";
import ChackOut from "../components/ChackOut/ChackOut";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainRouts />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "chackout",
        element: <ChackOut />,
      },
    ],
  },
]);
export default routes;
