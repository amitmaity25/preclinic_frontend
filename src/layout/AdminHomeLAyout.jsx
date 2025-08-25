import { Outlet } from "react-router";
import MenuBar from "../components/layout/admin-home/MenuBar";
import TopBar from "../components/layout/admin-home/TopBar";
import Message from "../components/layout/admin-home/Message";
const AdminHomeLAyout = () => {
    return (
        <div className="main-wrapper">
            <TopBar />
            <MenuBar />
            <div className="page-wrapper">
                <div className="content">
                    <Outlet />
                </div>
                <div className="notification-box">
                    <Message />
                </div>
            </div>
        </div>
    );
};

export default AdminHomeLAyout;