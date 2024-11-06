// import Appbar from "../../scenes/global/Appbar";
// import Footer from "../../scenes/global/Footer";
// import AppDrawer from "../../scenes/global/AppDrawer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
        {/* <Appbar /> */}
        <main
          className="content"
          id="full-content"
        >
          <Outlet />
        </main>
    </>
  );
}
