import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import {
  updateForm,
  fetchDepartmentById,
  saveDepartment,
  resetForm,
  clearSuccess
} from "../../../store/slices/admin/departmentSlice";

const DepartmentForm = () => {
  const { id: routeId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    id,
    department_name,
    department_description,
    status,
    loading,
    error,
    successMessage
  } = useSelector((state) => state.adminDepartmentSlice);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onChange" });

  // load when edit
  useEffect(() => {
    if (routeId) {
      dispatch(fetchDepartmentById(routeId));
    } else {
      dispatch(resetForm());
    }
  }, [routeId, dispatch]);

  // sync redux -> react-hook-form
  useEffect(() => {
    reset({
      department_name,
      department_description,
      status: String(status),
    });
  }, [department_name, department_description, status, reset]);

  // clear success after 3s
  useEffect(() => {
    if (successMessage) {
      const t = setTimeout(() => dispatch(clearSuccess()), 3000);
      return () => clearTimeout(t);
    }
  }, [successMessage, dispatch]);

  const onChangeField = (e) => {
    const { name, value } = e.target;
    const parsed = name === "status" ? parseInt(value, 10) : value;
    dispatch(updateForm({ name, value: parsed }));
  };

  const onSubmit = async (formData) => {
    const payload = {
      id: routeId ?? id,
      department_name: formData.department_name,
      department_description: formData.department_description,
      status: parseInt(formData.status, 10)
    };

    const result = await dispatch(saveDepartment(payload));
    if (saveDepartment.fulfilled.match(result)) {
      if (!routeId) {
        // created -> keep user on form but fields are cleared by slice
        reset(); // clear the react-hook-form fields immediately
      } else {
        // updated -> optionally redirect to list
        // navigate("/admin/home/departments");
      }
    }
  };

  return (
    <>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <h4 className="page-title">{routeId ? "Edit Department" : "Add Department"}</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Department Name</label>
          <input
            type="text"
            className="form-control"
            {...register("department_name", { required: "Department name is required", minLength: { value: 3, message: "At least 3 characters"} })}
            onChange={(e) => onChangeField({ target: { name: "department_name", value: e.target.value } })}
            value={department_name}
          />
          {errors.department_name && <p className="text-danger">{errors.department_name.message}</p>}
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            rows={4}
            {...register("department_description", { required: "Description is required", minLength: { value: 5, message: "At least 5 characters"} })}
            onChange={(e) => onChangeField({ target: { name: "department_description", value: e.target.value } })}
            value={department_description}
          />
          {errors.department_description && <p className="text-danger">{errors.department_description.message}</p>}
        </div>

        <div className="form-group">
          <label className="display-block">Department Status</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="status_active"
              value="1"
              {...register("status", { required: "Status is required" })}
              checked={status === 1}
              onChange={(e) => onChangeField({ target: { name: "status", value: e.target.value } })}
              name="status"
            />
            <label className="form-check-label" htmlFor="status_active">Active</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="status_inactive"
              value="0"
              {...register("status", { required: "Status is required" })}
              checked={status === 0}
              onChange={(e) => onChangeField({ target: { name: "status", value: e.target.value } })}
              name="status"
            />
            <label className="form-check-label" htmlFor="status_inactive">Inactive</label>
          </div>

          {errors.status && <p className="text-danger">{errors.status.message}</p>}
        </div>

        <div className="m-t-20 text-center">
          <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
            {loading ? "Saving..." : routeId ? "Update Department" : "Create Department"}
          </button>
        </div>
      </form>
    </>
  );
};

export default DepartmentForm;
