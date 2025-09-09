import { Outlet } from "react-router";
import { Suspense } from "react";
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
                  <Suspense fallback={<p>Please wait</p>}><Outlet /></Suspense> 
                </div>
                <div className="notification-box">
                    <Message />
                </div>
            </div>
        </div>
    );
};

export default AdminHomeLAyout;