import { createBrowserRouter } from "react-router";
import axios from "axios";
import { lazy } from "react"

//LAYOUT
const AdminLayout = lazy(() => import("../layout/AdminLayout"));
const AdminHomeLayout = lazy(() => import("../layout/AdminHomeLAyout"));
//import Mainlayout from "../layout/MainLayout";

//ALL PAGE REACT COMPONENTS
const Login = lazy(() => import("../pages/admin/Login"));
const Register = lazy(() => import("../pages/admin/Register"));
const ForgotPassword = lazy(() => import("../pages/admin/ForgotPassword"));
const ChangePassword = lazy(() => import("../pages/admin/ChangePassword"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));
const DepartmentsList = lazy(() => import("../pages/admin/departments/DepartmentsList"));
const DepartmentForm = lazy(() => import("../pages/admin/departments/DepartmentForm"));
const DoctorForm = lazy(() => import("../pages/admin/doctors/DoctorForm"));
const Doctors = lazy(() => import("../pages/admin/doctors/Doctors"));
const Patients = lazy(() => import("../pages/admin/patients/Patients"));
const PatientForm = lazy(() => import("../pages/admin/patients/PatientForm"));
const Appointments = lazy(() => import("../pages/admin/appointments/Appointments"));
const AppointmentForm = lazy(() => import("../pages/admin/appointments/AppointmentForm"));
const DoctorSchedule = lazy(() => import("../pages/admin/schedule/DoctorSchedule"));
const DoctorScheduleForm = lazy(() => import("../pages/admin/schedule/DoctorScheduleForm"));
const Employees = lazy(() => import("../pages/admin/employee/Employees"));
const EmployeesForm = lazy(() => import("../pages/admin/employee/EmployeesForm"));
const Holidays = lazy(() => import("../pages/admin/employee/Holidays"));
const HolidaysForm = lazy(() => import("../pages/admin/employee/HolidaysForm"));
const LeaveRequest = lazy(() => import("../pages/admin/employee/LeaveRequest"));
const LeaveRequestForm = lazy(() => import("../pages/admin/employee/LeaveRequestForm"));
const AttendanceSheet = lazy(() => import("../pages/admin/employee/AttendanceSheet"));
const InvoicesForm = lazy(() => import("../pages/admin/invoices/InvoicesForm"));
const Invoices = lazy(() => import("../pages/admin/invoices/Invoices"));
const Payments = lazy(() => import("../pages/admin/invoices/Payments"));
const Expenses = lazy(() => import("../pages/admin/invoices/Expenses"));
const ExpensesForm = lazy(() => import("../pages/admin/invoices/ExpensesForm"));
const Taxes = lazy(() => import("../pages/admin/invoices/Taxes"));
const TaxesForm = lazy(() => import("../pages/admin/invoices/TaxesForm"));
const ProvidentFund = lazy(() => import("../pages/admin/invoices/ProvidentFund"));
const ProvidentFundForm = lazy(() => import("../pages/admin/invoices/ProvidentFundForm"));
const EmployeeSalary = lazy(() => import("../pages/admin/payroll/EmployeeSalary"));
const EmployeeSalaryForm = lazy(() => import("../pages/admin/payroll/EmployeeSalaryForm"));
const Payslip = lazy(() => import("../pages/admin/payroll/Payslip"));
const AssetForm = lazy(() => import("../pages/admin/assets/AssetForm"));
const Assets = lazy(() => import("../pages/admin/assets/Assets"));
const Role = lazy(() => import("../pages/admin/role/Role"));
const RoleForm = lazy(() => import("../pages/admin/role/RoleForm"));

const router = createBrowserRouter([
    {
        path: "/admin",
        Component: AdminLayout,
        children: [
            {
                path: "home",
                Component: AdminHomeLayout,
                //loader:authCheck,
                children: [
                    {
                        path: "",
                        Component: Dashboard,
                    },
                    {
                        path: "departments",
                        children: [
                            {
                                path: "",
                                Component: DepartmentsList, // default when hitting /departments
                            },
                            {
                                path: "add-departments",
                                Component: DepartmentForm, // /departments/add-departments
                            },
                        ]
                    },
                    {
                        path: "doctors",
                        children: [
                            {
                                path: "",
                                Component: Doctors,
                            },
                            {
                                path: "add-doctor",
                                Component: DoctorForm,
                            },
                        ]
                    },
                    {
                        path: "patients",
                        children: [
                            {
                                path: "",
                                Component: Patients,
                            },
                            {
                                path: "add-patient",
                                Component: PatientForm,
                            },
                        ]
                    },
                    {
                        path: "appointments",
                        children: [
                            {
                                path: "",
                                Component: Appointments,
                            },
                            {
                                path: "add-appointment",
                                Component: AppointmentForm,
                            },
                        ]
                    },
                    {
                        path: "schedule",
                        children: [
                            {
                                path: "",
                                Component: DoctorSchedule,
                            },
                            {
                                path: "add-schedule",
                                Component: DoctorScheduleForm,
                            },
                        ]
                    },
                    {
                        path: "employees",
                        children: [
                            {
                                path: "",
                                Component: Employees,
                            },
                            {
                                path: "add-employee",
                                Component: EmployeesForm,
                            },
                            {
                                path: "leaves",
                                children: [
                                    {
                                        path: "",
                                        Component: LeaveRequest,
                                    },
                                    {
                                        path: "add-leave",
                                        Component: LeaveRequestForm,
                                    },
                                ],
                            },
                            {
                                path: "holiday",
                                children: [
                                    {
                                        path: "",
                                        Component: Holidays,
                                    },
                                    {
                                        path: "add-holiday",
                                        Component: HolidaysForm,
                                    },
                                ],
                            },
                            {
                                path: "attendance",
                                Component: AttendanceSheet,
                            },
                        ],
                    },
                    {
                        path: "finance",
                        children: [
                            {
                                path: "invoices",
                                children: [
                                    {
                                        path: "",
                                        Component: Invoices,
                                    },
                                    {
                                        path: "create-invoice",
                                        Component: InvoicesForm,
                                    },
                                ],
                            },
                            {
                                path: "payments",
                                Component: Payments,
                            },
                            {
                                path: "expenses",
                                children: [
                                    {
                                        path: "",
                                        Component: Expenses,
                                    },
                                    {
                                        path: "add-expense",
                                        Component: ExpensesForm,
                                    },
                                ],
                            },
                            {
                                path: "taxes",
                                children: [
                                    {
                                        path: "",
                                        Component: Taxes,   // /admin/home/finance/taxes
                                    },
                                    {
                                        path: "add-tax",
                                        Component: TaxesForm,
                                    },
                                ],
                            },
                            {
                                path: "provident-fund",
                                children: [
                                    {
                                        path: "",
                                        Component: ProvidentFund,
                                    },
                                    {
                                        path: "add-provident-fund",
                                        Component: ProvidentFundForm,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: "payroll",
                        children: [
                            {
                                path: "",
                                Component: EmployeeSalary,
                            },
                            {
                                path: "salary",
                                Component: EmployeeSalary,
                            },
                            {
                                path: "add-salary",
                                Component: EmployeeSalaryForm,
                            },
                            {
                                path: "salary-view",
                                Component: Payslip,
                            },
                        ],
                    },
                    {
                        path: "assets",
                        children: [
                            {
                                path: "",
                                Component: Assets,
                            },
                            {
                                path: "add-asset",
                                Component: AssetForm,  
                            }    
                        ],
                    },
                    {
                        path: "roles-permissions",
                        children: [
                            {
                                path: "",
                                Component: Role, 
                            },
                            {
                                path: "add",
                                Component: RoleForm,
                            },
                        ],
                    },
                ]
            },
            {
                path: "login",
                Component: Login,
            },
            {
                path: "register",
                Component: Register,
            },
            {
                path: "forgot-password",
                Component: ForgotPassword,
            },
            {
                path: "change-password",
                Component: ChangePassword,
            }
        ],
    },
    {
        path: "*",
        Component: NotFound
    }
]);

export default router;