import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../../services/apiClient";

// Fetch list (paginated)
export const fetchDepartments = createAsyncThunk(
  "department/fetchAll",
  async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get(`/api/v1/departments?page=${page}&limit=${limit}`);
      console.log("Fetched departments:", data);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

// Fetch single department by ID
export const fetchDepartmentById = createAsyncThunk(
  "department/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await apiClient.get(`/api/v1/departments/${id}`);
      // unwrap: backend returns { success: true, data: dept }
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Save (create or update)
export const saveDepartment = createAsyncThunk(
  "department/save",
  async (payload, { rejectWithValue }) => {
    try {

      const { id, department_name, department_description, status } = payload;

      // Backend accepts department_name, department_description, status (0/1 or true/false)
      const body = {
        department_name,
        department_description,
        status: status === 1 || status === "1" || status === true || status === "true"
      };

      if (id) {
        const { data } = await apiClient.put(`api/v1/departments/${id}`, body);
        return data;
      } else {
        const { data } = await apiClient.post(`api/v1/departments`, body);
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

// Delete
export const deleteDepartment = createAsyncThunk(
  "department/delete",
  async (id, { rejectWithValue }) => {
    try {
      await apiClient.delete(`api/v1/departments/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);


// Toggle Department Status
export const updateDepartmentStatus = createAsyncThunk(
  "departments/updateStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.patch(`/api/v1/departments/${id}/status`, { status });
      return data.data; // return the updated department
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Status update failed");
    }
  }
);

const initialState = {
  list: [],
  pagination: { total: 0, page: 1, limit: 10, totalPages: 1 },
  id: null,
  department_name: "",
  department_description: "",
  status: 1,
  loading: false,
  error: null,
  successMessage: ""
};

const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    updateForm(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setForm(state, action) {
      const payload = action.payload || {};
      console.log("Setting form with payload:", payload);
      state.id = payload.id ?? null;
      state.department_name = payload.department_name ?? payload.name ?? "";
      state.department_description = payload.department_description ?? payload.description ?? "";
      state.status = typeof payload.status === "number" ? payload.status : payload.status ? 1 : 0;
    },
    resetForm(state) {
      state.id = null;
      state.department_name = "";
      state.department_description = "";
      state.status = 1;
      state.error = null;
      state.successMessage = "";
    },
    clearSuccess(state) {
      state.successMessage = "";
    }
  },
  extraReducers: (builder) => {
    // fetch list
    builder.addCase(fetchDepartments.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDepartments.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
    });
    builder.addCase(fetchDepartments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // fetch by id
    builder.addCase(fetchDepartmentById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDepartmentById.fulfilled, (state, action) => {
      state.loading = false;
      const d = action.payload || {};
      state.id = d.id ?? null;
      state.department_name = d.department_name ?? d.name ?? "";
      state.department_description = d.department_description ?? d.description ?? "";
      state.status = typeof d.status === "number" ? d.status : (d.status ? 1 : 0);
    });
    builder.addCase(fetchDepartmentById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // save
    builder.addCase(saveDepartment.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = "";
    });
    builder.addCase(saveDepartment.fulfilled, (state, action) => {
      state.loading = false;
      const d = action.payload || {};
      // If it was update (meta.arg.id present) => keep form filled with updated data
      if (action.meta.arg.id) {
        state.id = d.id ?? state.id;
        state.department_name = d.department_name ?? d.name ?? state.department_name;
        state.department_description = d.department_description ?? d.description ?? state.department_description;
        state.status = typeof d.status === "number" ? d.status : (d.status ? 1 : 0);
        state.successMessage = "Department updated successfully!";
      } else {
        // Create case -> clear form
        state.id = null;
        state.department_name = "";
        state.department_description = "";
        state.status = 1;
        state.successMessage = "Department created successfully!";
      }
    });
    builder.addCase(saveDepartment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // delete
    builder.addCase(deleteDepartment.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteDepartment.fulfilled, (state, action) => {
      state.loading = false;
      // remove from list
      state.list = state.list.filter((dept) => dept.id !== action.payload);
      state.successMessage = "Department deleted successfully!";
    });
    builder.addCase(deleteDepartment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(updateDepartmentStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(updateDepartmentStatus.fulfilled, (state, action) => {
      state.loading = false;
      const updatedDept = action.payload;
      const index = state.list.findIndex((d) => d._id === updatedDept._id);
      if (index !== -1) state.list[index] = updatedDept;
      state.successMessage = `Status updated successfully!`;
    });

    builder.addCase(updateDepartmentStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to update status";
    });

  }
});

export const { updateForm, setForm, resetForm, clearSuccess } = departmentSlice.actions;
export default departmentSlice.reducer;
