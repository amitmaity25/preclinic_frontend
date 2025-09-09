import { useSelector, useDispatch } from "react-redux";
import { fetchDepartments, deleteDepartment } from "../../../store/slices/admin/departmentSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DepartmentsList = () => {
  const dispatch = useDispatch();
  const { list, pagination, loading, error, successMessage } = useSelector(
    (state) => state.adminDepartmentSlice
  );

  const [localSuccess, setLocalSuccess] = useState("");
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    dispatch(fetchDepartments({ page: 1, limit: 5 }));
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
    if (!window.confirm("Are you sure you want to delete this department?")) return;
    const result = await dispatch(deleteDepartment(id));
    if (deleteDepartment.fulfilled.match(result)) {
      // refresh list to get updated pagination (optional)
      dispatch(fetchDepartments({ page: pagination.page, limit: pagination.limit }));
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-5 col-5">
          <h4 className="page-title">Departments</h4>
        </div>
        <div className="col-sm-7 col-7 text-right m-b-30">
          <Link to="/admin/home/departments/add-departments" className="btn btn-primary btn-rounded">
            <i className="fa fa-plus"></i> Add Department
          </Link>
        </div>
      </div>

      {localSuccess && <div className="alert alert-success">{localSuccess}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <p>Loading...</p>}

      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped custom-table mb-0 datatable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Department Name</th>
                  <th>Status</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((dept, index) => (
                  <tr key={dept.id}>
                    <td>{(pagination.page - 1) * pagination.limit + index + 1}</td>
                    <td>{dept.name}</td>
                    <td>
                      <span className={`custom-badge ${dept.status === 1 ? "status-green" : "status-red"}`}>
                        {dept.status === 1 ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action position-relative">
                        <button
                          className="btn btn-link action-icon p-0"
                          onClick={() => setOpenDropdownId(openDropdownId === dept.id ? null : dept.id)}
                        >
                          <i className="fa fa-ellipsis-v"></i>
                        </button>

                        {openDropdownId === dept.id && (
                          <div className="dropdown-menu show dropdown-menu-right" style={{ position: "absolute", right: 0 }}>
                            <Link className="dropdown-item" to={`/admin/home/departments/edit/${dept.id}`} onClick={() => setOpenDropdownId(null)}>
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </Link>
                            <button className="dropdown-item" onClick={() => { setOpenDropdownId(null); handleDelete(dept.id); }}>
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination centered */}
            <div className="d-flex justify-content-center mt-3">
              <div className="pagination">
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`btn btn-sm mx-1 ${page === pagination.page ? "btn-primary" : "btn-light"}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentsList;
