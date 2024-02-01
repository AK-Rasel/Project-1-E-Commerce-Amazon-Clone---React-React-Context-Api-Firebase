import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
const MainRouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainRouts;
