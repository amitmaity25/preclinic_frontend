import { useState } from "react";

const MenuBar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">Main</li>

            <li className="active">
              <a href="/admin/home">
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
              </a>
            </li>

            <li>
              <a href="/admin/home/doctors">
                <i className="fa fa-user-md"></i> <span>Doctors</span>
              </a>
            </li>

            <li>
              <a href="/admin/home/patients">
                <i className="fa fa-wheelchair"></i> <span>Patients</span>
              </a>
            </li>

            <li>
              <a href="/admin/home/appointments">
                <i className="fa fa-calendar"></i> <span>Appointments</span>
              </a>
            </li>

            <li>
              <a href="/admin/home/schedule">
                <i className="fa fa-calendar-check-o"></i> <span>Doctor Schedule</span>
              </a>
            </li>

            <li>
              <a href="/admin/home/departments">
                <i className="fa fa-hospital-o"></i> <span>Departments</span>
              </a>
            </li>

            {/* Employees */}
            <li className={`submenu ${openMenu === "employees" ? "active" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu("employees");
                }}
              >
                <i className="fa fa-user"></i>
                <span> Employees </span>
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: openMenu === "employees" ? "block" : "none" }}>
                <li>
                  <a href="/admin/home/employees">Employees List</a>
                </li>
                <li>
                  <a href="/admin/home/employees/leaves">Leaves</a>
                </li>
                <li>
                  <a href="/admin/home/employees/holiday">Holidays</a>
                </li>
                <li>
                  <a href="/admin/home/employees/attendance">Attendance</a>
                </li>                
              </ul>
            </li>

            {/* Accounts */}
            <li className={`submenu ${openMenu === "accounts" ? "active" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu("accounts");
                }}
              >
                <i className="fa fa-money"></i>
                <span> Accounts </span>
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: openMenu === "accounts" ? "block" : "none" }}>
                <li>
                  <a href="/admin/home/finance/invoices">Invoices</a>
                </li>
                <li><a href="/admin/home/finance/payments">Payments</a></li>
                <li><a href="/admin/home/finance/expenses">Expenses</a></li>
                <li><a href="/admin/home/finance/taxes/taxes">Taxes</a></li>
                <li><a href="/admin/home/finance/provident-fund">Provident Fund</a></li>
              </ul>
            </li>

            {/* Payroll */}
            <li className={`submenu ${openMenu === "payroll" ? "active" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu("payroll");
                }}
              >
                <i className="fa fa-book"></i>
                <span> Payroll </span>
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: openMenu === "payroll" ? "block" : "none" }}>
                <li><a href="/admin/home/payroll/salary"> Employee Salary </a></li>
                {/* <li><a href="/admin/home/salary-view"> Payslip </a></li> */}
              </ul>
            </li>

            {/* Email */}
            <li className={`submenu ${openMenu === "email" ? "active" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu("email");
                }}
              >
                <i className="fa fa-envelope"></i>
                <span> Email</span>
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: openMenu === "email" ? "block" : "none" }}>
                <li><a href="compose.html">Compose Mail</a></li>
                <li><a href="inbox.html">Inbox</a></li>
                <li><a href="mail-view.html">Mail View</a></li>
              </ul>
            </li>

            {/* Blog */}
            <li className={`submenu ${openMenu === "blog" ? "active" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu("blog");
                }}
              >
                <i className="fa fa-commenting-o"></i>
                <span> Blog</span>
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: openMenu === "blog" ? "block" : "none" }}>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="blog-details.html">Blog View</a></li>
                <li><a href="add-blog.html">Add Blog</a></li>
                <li><a href="edit-blog.html">Edit Blog</a></li>
              </ul>
            </li>

            <li>
              <a href="/admin/home/assets"><i className="fa fa-cube"></i> <span>Assets</span></a>
            </li>

            <li>
              <a href="activities.html"><i className="fa fa-bell-o"></i> <span>Activities</span></a>
            </li>

            {/* Reports */}
            <li className={`submenu ${openMenu === "reports" ? "active" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu("reports");
                }}
              >
                <i className="fa fa-flag-o"></i>
                <span> Reports </span>
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: openMenu === "reports" ? "block" : "none" }}>
                <li><a href="expense-reports.html"> Expense Report </a></li>
                <li><a href="invoice-reports.html"> Invoice Report </a></li>
              </ul>
            </li>

            <li>
              <a href="settings.html"><i className="fa fa-cog"></i> <span>Settings</span></a>
            </li>
            <li class="active">
                <a href="/admin/home/roles-permissions"><i class="fa fa-key"></i> <span>Roles & Permissions</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
