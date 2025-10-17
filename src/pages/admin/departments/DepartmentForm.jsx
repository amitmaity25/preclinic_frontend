import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

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
      status,
    });
  }, [department_name, department_description, status, reset]);

  // SweetAlert for success and error
  useEffect(() => {
    if (successMessage) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: successMessage,
        timer: 2000,
        showConfirmButton: false,
      });
      const t = setTimeout(() => dispatch(clearSuccess()), 3000);
      return () => clearTimeout(t);
    }
  }, [successMessage, dispatch]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error,
      });
    }
  }, [error]);

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
      status: parseInt(formData.status, 10),
    };

    const result = await dispatch(saveDepartment(payload));

    if (saveDepartment.fulfilled.match(result)) {
      if (!routeId) {
        Swal.fire({
          icon: "success",
          title: "Created!",
          text: "Department added successfully!",
          timer: 2000,
          showConfirmButton: false,
        });
        reset(); // clear fields
      } else {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Department updated successfully!",
          timer: 2000,
          showConfirmButton: false,
        });
        // optionally redirect after success
        // navigate("/admin/home/departments");
      }
    } else if (saveDepartment.rejected.match(result)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: result.payload || "Something went wrong while saving.",
      });
    }
  };

  return (
    <>
      <div className="card shadow-sm p-4 border-0">
        <h4 className="mb-4 text-primary">
          {routeId ? "Edit Department" : "Add Department"}
        </h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Department Name</label>
            <input
              type="text"
              className="form-control"
              {...register("department_name", {
                required: "Department name is required",
                minLength: {
                  value: 3,
                  message: "At least 3 characters required",
                },
              })}
              onChange={(e) =>
                onChangeField({
                  target: { name: "department_name", value: e.target.value },
                })
              }
              value={department_name}
            />
            {errors.department_name && (
              <p className="text-danger small mt-1">
                {errors.department_name.message}
              </p>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows={4}
              {...register("department_description", {
                required: "Description is required",
                minLength: {
                  value: 5,
                  message: "At least 5 characters required",
                },
              })}
              onChange={(e) =>
                onChangeField({
                  target: {
                    name: "department_description",
                    value: e.target.value,
                  },
                })
              }
              value={department_description}
            />
            {errors.department_description && (
              <p className="text-danger small mt-1">
                {errors.department_description.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="form-label d-block">Department Status</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="status_active"
                value="1"
                {...register("status", { required: "Status is required" })}
                checked={String(status) === "1"}
                onChange={(e) =>
                  onChangeField({
                    target: { name: "status", value: e.target.value },
                  })
                }
              />
              <label className="form-check-label" htmlFor="status_active">
                Active
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="status_inactive"
                value="0"
                {...register("status", { required: "Status is required" })}
                checked={String(status) === "0"}
                onChange={(e) =>
                  onChangeField({
                    target: { name: "status", value: e.target.value },
                  })
                }
              />
              <label className="form-check-label" htmlFor="status_inactive">
                Inactive
              </label>
            </div>
            {errors.status && (
              <p className="text-danger small mt-1">
                {errors.status.message}
              </p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-4"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : routeId
                  ? "Update Department"
                  : "Create Department"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DepartmentForm;
