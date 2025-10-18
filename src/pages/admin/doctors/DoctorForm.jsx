import React, { use, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss"; // optional
import { fetchDepartments, createDoctor } from "../../../store/slices/admin/doctorSlice";

const DoctorForm = () => {
    const dispatch = useDispatch();
    const { departmentList, loading } = useSelector((state) => state.adminDoctorSlice);

    useEffect(() => {
        dispatch(fetchDepartments());
    }, [dispatch]);


    // ✅ Validation Schema
    const schema = yup.object().shape({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().nullable(),
        username: yup.string().required("Username is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup
            .string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Confirm password is required"),
        dateOfBirth: yup.string().required("Date of Birth is required"),
        department: yup.string().required("Department is required"),
        designation: yup.string().required("Designation is required"),
        gender: yup.string().required("Gender is required"),
        address: yup.string().required("Address is required"),
        country: yup.string().required("Country is required"),
        city: yup.string().required("City is required"),
        state: yup.string().required("State/Province is required"),
        postalCode: yup.string().required("Postal Code is required"),
        phone: yup.string().required("Phone number is required"),
        biography: yup.string().nullable(),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            // Prepare FormData (for file upload)
            const formData = new FormData();
            
            // Object.entries(data).forEach(([key, value]) => {                
            //     formData.append(key, value);
            // });      

            Object.entries(data).forEach(([key, value]) => {
                if (key === "avatar" && value?.[0]) {
                    formData.append(key, value[0]); // ✅ append actual file
                } else {
                    formData.append(key, value);
                }
            });

            // Dispatch async thunk
            const result = await dispatch(createDoctor(formData));

            if (createDoctor.fulfilled.match(result)) {
                Swal.fire({
                    title: "Success!",
                    text: "Doctor created successfully!",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
                reset();
            } else {
                throw new Error(result.payload?.message || "Failed to create doctor");
            }
        } catch (err) {
            Swal.fire({
                title: "Error!",
                text: err.message,
                icon: "error",
            });
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h4 className="page-title">Add Doctor</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            {/* 🧍 Personal Info */}
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>First Name *</label>
                                    <input className="form-control" {...register("firstName")} />
                                    {errors.firstName && (
                                        <small className="text-danger">
                                            {errors.firstName.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input className="form-control" {...register("lastName")} />
                                </div>
                            </div>

                            {/* 👤 Username & Email */}
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Username *</label>
                                    <input className="form-control" {...register("username")} />
                                    {errors.username && (
                                        <small className="text-danger">
                                            {errors.username.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <small className="text-danger">
                                            {errors.email.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            {/* 🔒 Passwords */}
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Password *</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        {...register("password")}
                                    />
                                    {errors.password && (
                                        <small className="text-danger">
                                            {errors.password.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Confirm Password *</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        {...register("confirmPassword")}
                                    />
                                    {errors.confirmPassword && (
                                        <small className="text-danger">
                                            {errors.confirmPassword.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            {/* 🎂 DOB */}
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Date of Birth *</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        {...register("dateOfBirth")}
                                    />
                                    {errors.dateOfBirth && (
                                        <small className="text-danger">
                                            {errors.dateOfBirth.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            {/* 🏥 Department */}
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Department *</label>
                                    <select className="form-control" {...register("department")}>
                                        <option value="">Select Department</option>
                                        {loading ? (
                                            <option>Loading...</option>
                                        ) : (
                                            departmentList?.map((dept) => (
                                                <option key={dept._id} value={dept._id}>
                                                    {dept.name}
                                                </option>
                                            ))
                                        )}
                                    </select>
                                    {errors.department && (
                                        <small className="text-danger">
                                            {errors.department.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            {/* 🩺 Designation */}
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Designation *</label>
                                    <input className="form-control" {...register("designation")} />
                                    {errors.designation && (
                                        <small className="text-danger">
                                            {errors.designation.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            {/* ⚧ Gender */}
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Gender *</label>
                                    <select className="form-control" {...register("gender")}>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    {errors.gender && (
                                        <small className="text-danger">
                                            {errors.gender.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            {/* 🏠 Address Section */}
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Address *</label>
                                    <input className="form-control" {...register("address")} />
                                    {errors.address && (
                                        <small className="text-danger">
                                            {errors.address.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label>Country *</label>
                                    <input className="form-control" {...register("country")} />
                                    {errors.country && (
                                        <small className="text-danger">
                                            {errors.country.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label>City *</label>
                                    <input className="form-control" {...register("city")} />
                                    {errors.city && (
                                        <small className="text-danger">
                                            {errors.city.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label>State/Province *</label>
                                    <input className="form-control" {...register("state")} />
                                    {errors.state && (
                                        <small className="text-danger">
                                            {errors.state.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label>Postal Code *</label>
                                    <input className="form-control" {...register("postalCode")} />
                                    {errors.postalCode && (
                                        <small className="text-danger">
                                            {errors.postalCode.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            {/* ☎ Phone & Avatar */}
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Phone *</label>
                                    <input className="form-control" {...register("phone")} />
                                    {errors.phone && (
                                        <small className="text-danger">
                                            {errors.phone.message}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Avatar</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        {...register("avatar")}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 🧾 Biography */}
                        <div className="form-group">
                            <label>Short Biography</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                {...register("biography")}
                            ></textarea>
                        </div>

                        {/* 🟢 Status */}
                        <div className="form-group">
                            <label>Status</label>
                            <select className="form-control" {...register("status")}>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div>

                        <div className="m-t-20 text-center">
                            <button
                                className="btn btn-primary submit-btn"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Saving..." : "Create Doctor"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default DoctorForm;