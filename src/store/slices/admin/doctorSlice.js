import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiClient from "../../../services/apiClient";

// fetch doctors with pagination
export const fetchDoctors = createAsyncThunk(
    "doctors/fetchDoctors",
    async ({ page = 1, limit = 12 } = {}, { rejectWithValue }) => {
        try {
            const { data } = await apiClient.get(`/api/v1/doctors?page=${page}&limit=${limit}`);
            return data;
        } catch (err) {
            return rejectWithValue(err.response?.data || { message: err.message });
        }
    }
);


// Fetch list
export const fetchDepartments = createAsyncThunk(
  "doctors/fetchDepartments",
  async () => {
    try {
      const { data } = await apiClient.get(`/api/v1/departments`);
      console.log("Fetched departments:", data);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

// ✅ Delete doctor
export const deleteDoctor = createAsyncThunk(
    "doctors/deleteDoctor",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await apiClient.delete(`/api/v1/doctors/${id}`);
            return data.id;
        } catch (err) {
            return rejectWithValue(err.response?.data || { message: err.message });
        }
    }
);

// ✅ Toggle doctor status
export const toggleDoctorStatus = createAsyncThunk(
    "doctors/toggleStatus",
    async ({ id, status }, { rejectWithValue }) => {
        try {            
            const { data } = await apiClient.patch(`/api/v1/doctors/${id}/status`, { status });
            return data;
        } catch (err) {
            return rejectWithValue(err.response?.data || { message: err.message });
        }
    }
);


// export const createDoctor = createAsyncThunk(
//   "doctors/createDoctor",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const { data } = await apiClient.post("/api/v1/doctors", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || { message: err.message });
//     }
//   }
// );


export const createDoctor = createAsyncThunk(
  "doctors/save",
  async (payload, { rejectWithValue }) => {
    try {
      //const { id } =1;
      //let response = await apiClient.post("/api/v1/doctors", Object.fromEntries(payload));

        let response = await apiClient.post("/api/v1/doctors", payload, {
            headers: { "Content-Type": "multipart/form-data" },
        });

    //   if (id) {
    //     // Update existing doctor
    //     response = await apiClient.put(`/api/v1/doctors/${id}`, payload);
    //   } else {
    //     // Create new doctor
    //     response = await apiClient.post("/api/v1/doctors", payload);
    //   }

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

const initialState = {
    list: [],
    id: null,
    departmentList: [],
    page: 1,
    totalPages: 1,
    loading: false,
    error: null,
    limit: 12,
};
export const doctorSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {
        // Define your reducers here
        resetDoctorState(state) {
            state.list = [];
            state.page = 1;
            state.totalPages = 1;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        //fetch doctors
        builder.addCase(fetchDoctors.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchDoctors.fulfilled, (state, action) => {
            state.loading = false;
            const { data, page, totalPages } = action.payload;

            if (page === 1) {
                state.list = data;
            } else {
                state.list = [...state.list, ...data];
            }

            state.page = page;
            state.totalPages = totalPages ?? state.totalPages;
        });
        builder.addCase(fetchDoctors.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Failed to fetch doctors";
        });

        // Delete doctor        
        builder.addCase(deleteDoctor.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteDoctor.fulfilled, (state, action) => {
            state.loading = false;
            state.list = state.list.filter((doc) => doc._id !== action.payload);
        });

        builder.addCase(deleteDoctor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Failed to delete doctor";
        });


        // Toggle status      
        builder.addCase(toggleDoctorStatus.pending, (state) => {            
            state.error = null;
        });

        builder.addCase(toggleDoctorStatus.fulfilled, (state, action) => {
            const updated = action.payload;
            // find by _id or id
            const idx = state.list.findIndex(
                (d) => d._id === updated._id || d.id === updated._id || d._id === updated.id || d.id === updated.id
            );
            if (idx !== -1) {
                // replace with updated doc
                state.list[idx] = updated;
            } else {
                // If not in list (rare), optionallprepend
                state.list.unshift(updated);
            }
        });
        builder.addCase(toggleDoctorStatus.rejected, (state, action) => {
            state.error = action.payload?.message || "Failed to toggle status";
        });

        //For department list
        builder.addCase(fetchDepartments.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchDepartments.fulfilled, (state, action) => {           
            state.loading = false;
            state.departmentList = action.payload.data;
        });
        builder.addCase(fetchDepartments.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { resetDoctorState } = doctorSlice.actions;
export default doctorSlice.reducer;

