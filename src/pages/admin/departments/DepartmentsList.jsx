import { useSelector, useDispatch } from "react-redux";
import {
  fetchDepartments,
  deleteDepartment,
  updateDepartmentStatus,
} from "../../../store/slices/admin/departmentSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DepartmentsList = () => {
  const dispatch = useDispatch();
  const { list, pagination, loading, error, successMessage } = useSelector(
    (state) => state.adminDepartmentSlice
  );

  const [localSuccess, setLocalSuccess] = useState("");
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    dispatch(fetchDepartments({ page: 1, limit: 10 }));
  }, [dispatch]);

  useEffect(() => {
    if (successMessage) {
      setLocalSuccess(successMessage);
      const t = setTimeout(() => setLocalSuccess(""), 3000);
      return () => clearTimeout(t);
    }
  }, [successMessage]);

  const handlePageChange = (page) => {
    dispatch(fetchDepartments({ page, limit: pagination.limit }));
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the department.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    const result = await dispatch(deleteDepartment(id));
    if (deleteDepartment.fulfilled.match(result)) {
      Swal.fire("Deleted!", "Department deleted successfully!", "success");
      dispatch(fetchDepartments({ page: pagination.page, limit: pagination.limit }));
    }
  };

  const handleStatusChange = (dept) => {
    // Convert current status to number safely
    const currentStatus = dept.status === true ? 1 : 0;
    const newStatus = currentStatus === 1 ? 0 : 1;
    const statusText = newStatus === 1 ? "activate" : "deactivate";

    Swal.fire({
      title: `Are you sure?`,
      text: `You are about to ${statusText} this department.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${statusText} it!`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Call the redux thunk
          await dispatch(updateDepartmentStatus({ id: dept._id, status: newStatus })).unwrap();

          Swal.fire({
            title: "Updated!",
            text: `Department has been ${statusText}d successfully.`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });

          // Refresh the list to reflect updated status
          dispatch(fetchDepartments({ page: pagination.page, limit: pagination.limit }));
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to update department status.",
            icon: "error",
          });
        }
      }
    });
  };


  // 🔍 Filtered list based on search and status
  const filteredList = list.filter((dept) => {
    const matchesSearch = dept.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "active"
          ? dept.status === true
          : dept.status === false;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container-fluid py-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h4 className="fw-bold mb-0 text-primary">
          <i className="fa fa-sitemap me-2"></i>Departments
        </h4>
        <Link
          to="/admin/home/departments/add-departments"
          className="btn btn-primary shadow-sm"
        >
          <i className="fa fa-plus me-1"></i> Add Department
        </Link>
      </div>

      {/* Filter & Search Bar */}
      <div className="card mb-4 border-0 shadow-sm">
        <div className="card-body py-3">
          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="fa fa-search text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 shadow-none"
                  placeholder="Search by department name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-3">
              <select
                className="form-select form-control"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div className="col-md-3 text-md-end text-center">
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                }}
              >
                <i className="fa fa-undo me-1"></i> Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      {localSuccess && (
        <div className="alert alert-success shadow-sm">{localSuccess}</div>
      )}
      {error && <div className="alert alert-danger shadow-sm">{error}</div>}
      {loading && <p>Loading...</p>}

      {/* Table Card */}
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Department Name</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredList.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-4 text-muted">
                      <i className="fa fa-info-circle me-2"></i>No departments found
                    </td>
                  </tr>
                ) : (
                  filteredList.map((dept, index) => (
                    <tr key={dept._id}>
                      <td>
                        {(pagination.page - 1) * pagination.limit + index + 1}
                      </td>
                      <td className="fw-semibold">{dept.name}</td>
                      <td>
                        <td>
                          <button
                            onClick={() => handleStatusChange(dept)}
                            className={`btn btn-sm rounded-pill px-3 ${dept.status === 1 || dept.status === true ? "btn-success" : "btn-danger"
                              }`}
                          >
                            {dept.status === 1 || dept.status === true ? "Active" : "Inactive"}
                          </button>
                        </td>

                      </td>
                      <td className="text-end position-relative">
                        <button
                          className="btn btn-link text-muted p-0"
                          onClick={() =>
                            setOpenDropdownId(
                              openDropdownId === dept._id ? null : dept._id
                            )
                          }
                        >
                          <i className="fa fa-ellipsis-v"></i>
                        </button>

                        {openDropdownId === dept._id && (
                          <ul
                            className="dropdown-menu show shadow border-0 rounded-3"
                            style={{
                              position: "absolute",
                              right: 0,
                              top: "100%",
                              zIndex: 5,
                            }}
                          >
                            <li>
                              <Link
                                className="dropdown-item d-flex align-items-center"
                                to={`/admin/home/departments/edit/${dept._id}`}
                                onClick={() => setOpenDropdownId(null)}
                              >
                                <i className="fa fa-pencil me-2 text-primary"></i>{" "}
                                Edit
                              </Link>
                            </li>
                            <li>
                              <button
                                className="dropdown-item text-danger d-flex align-items-center"
                                onClick={() => {
                                  setOpenDropdownId(null);
                                  handleDelete(dept._id);
                                }}
                              >
                                <i className="fa fa-trash me-2"></i> Delete
                              </button>
                            </li>
                          </ul>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {pagination.totalPages > 0 && ( // or just remove the check entirely
  <div className="card-footer bg-white border-0 pt-3 pb-4">
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination mb-0">
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
            (page) => (
              <li
                key={page}
                className={`page-item ${page === pagination.page ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default DepartmentsList;
