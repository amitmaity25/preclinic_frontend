import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts
const AdminLayout = lazy(() => import("../layout/AdminLayout"));
const AdminHomeLayout = lazy(() => import("../layout/AdminHomeLAyout"));

// Route Guard
const AdminProtectedRoute = lazy(() => import("../components/AdminProtectedRoute"));

// Pages
const Login = lazy(() => import("../pages/admin/Login"));
const Register = lazy(() => import("../pages/admin/Register"));
const ForgotPassword = lazy(() => import("../pages/admin/ForgotPassword"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));
const DepartmentsList = lazy(() => import("../pages/admin/departments/DepartmentsList"));
const DepartmentForm = lazy(() => import("../pages/admin/departments/DepartmentForm"));
const Doctors = lazy(() => import("../pages/admin/doctors/Doctors"));
const DoctorForm = lazy(() => import("../pages/admin/doctors/DoctorForm"));
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
const Invoices = lazy(() => import("../pages/admin/invoices/Invoices"));
const InvoicesForm = lazy(() => import("../pages/admin/invoices/InvoicesForm"));
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
const Assets = lazy(() => import("../pages/admin/assets/Assets"));
const AssetForm = lazy(() => import("../pages/admin/assets/AssetForm"));
const Role = lazy(() => import("../pages/admin/role/Role"));
const RoleForm = lazy(() => import("../pages/admin/role/RoleForm"));
const CompanySettings = lazy(() => import("../pages/admin/CompanySettings"));
const LeaveType = lazy(() => import("../pages/admin/LeaveType"));
const LeaveTypeForm = lazy(() => import("../pages/admin/LeaveTypeForm"));

// Suspense wrapper helper
const SuspenseWrapper = (Component) => (
  <Suspense fallback={<p>Loading...</p>}><Component /></Suspense>
);

const router = createBrowserRouter([
  {
    path: "/admin",
    element: SuspenseWrapper(AdminLayout),
    children: [
      // Public routes
      { path: "login", element: SuspenseWrapper(Login) },
      { path: "register", element: SuspenseWrapper(Register) },
      { path: "forgot-password", element: SuspenseWrapper(ForgotPassword) },

      // Protected routes
      {
        element: SuspenseWrapper(AdminProtectedRoute), // Protect all nested routes
        children: [
          {
            path: "home",
            element: SuspenseWrapper(AdminHomeLayout), // Must render <Outlet />
            children: [
              { path: "", element: SuspenseWrapper(Dashboard) },

              // Departments
              { path: "departments", element: SuspenseWrapper(DepartmentsList) },
              { path: "departments/add-departments", element: SuspenseWrapper(DepartmentForm) },
              { path: "departments/edit/:id", element: SuspenseWrapper(DepartmentForm) },

              // Doctors
              { path: "doctors", element: SuspenseWrapper(Doctors) },
              { path: "doctors/add-doctor", element: SuspenseWrapper(DoctorForm) },

              // Patients
              { path: "patients", element: SuspenseWrapper(Patients) },
              { path: "patients/add-patient", element: SuspenseWrapper(PatientForm) },

              // Appointments
              { path: "appointments", element: SuspenseWrapper(Appointments) },
              { path: "appointments/add-appointment", element: SuspenseWrapper(AppointmentForm) },

              // Schedule
              { path: "schedule", element: SuspenseWrapper(DoctorSchedule) },
              { path: "schedule/add-schedule", element: SuspenseWrapper(DoctorScheduleForm) },

              // Employees
              { path: "employees", element: SuspenseWrapper(Employees) },
              { path: "employees/add-employee", element: SuspenseWrapper(EmployeesForm) },
              { path: "employees/leaves", element: SuspenseWrapper(LeaveRequest) },
              { path: "employees/leaves/add-leave", element: SuspenseWrapper(LeaveRequestForm) },
              { path: "employees/holiday", element: SuspenseWrapper(Holidays) },
              { path: "employees/holiday/add-holiday", element: SuspenseWrapper(HolidaysForm) },
              { path: "employees/attendance", element: SuspenseWrapper(AttendanceSheet) },

              // Finance
              { path: "finance/invoices", element: SuspenseWrapper(Invoices) },
              { path: "finance/invoices/create-invoice", element: SuspenseWrapper(InvoicesForm) },
              { path: "finance/payments", element: SuspenseWrapper(Payments) },
              { path: "finance/expenses", element: SuspenseWrapper(Expenses) },
              { path: "finance/expenses/add-expense", element: SuspenseWrapper(ExpensesForm) },
              { path: "finance/taxes", element: SuspenseWrapper(Taxes) },
              { path: "finance/taxes/add-tax", element: SuspenseWrapper(TaxesForm) },
              { path: "finance/provident-fund", element: SuspenseWrapper(ProvidentFund) },
              { path: "finance/provident-fund/add-provident-fund", element: SuspenseWrapper(ProvidentFundForm) },

              // Payroll
              { path: "payroll", element: SuspenseWrapper(EmployeeSalary) },
              { path: "payroll/add-salary", element: SuspenseWrapper(EmployeeSalaryForm) },
              { path: "payroll/salary-view", element: SuspenseWrapper(Payslip) },

              // Assets
              { path: "assets", element: SuspenseWrapper(Assets) },
              { path: "assets/add-asset", element: SuspenseWrapper(AssetForm) },

              // Roles & Permissions
              { path: "roles-permissions", element: SuspenseWrapper(Role) },
              { path: "roles-permissions/add", element: SuspenseWrapper(RoleForm) },

              // Settings
              { path: "settings", element: SuspenseWrapper(CompanySettings) },
              { path: "leave-type", element: SuspenseWrapper(LeaveType) },
              { path: "add-leave-type", element: SuspenseWrapper(LeaveTypeForm) },
            ],
          },
        ],
      },
    ],
  },

  // Fallback route
  { path: "*", element: SuspenseWrapper(NotFound) },
]);

export default router;
