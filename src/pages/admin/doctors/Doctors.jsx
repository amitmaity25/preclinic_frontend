import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors, deleteDoctor, toggleDoctorStatus } from "../../../store/slices/admin/doctorSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Doctors = () => {
    const dispatch = useDispatch();
    // dropdown state: store id of doctor whose dropdown is open
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const [togglingId, setTogglingId] = useState(null);

    const navigate = useNavigate();
    const { list, loading, error, page, totalPages, limit } = useSelector(
        (state) => state.adminDoctorSlice
    );

    useEffect(() => {
        dispatch(fetchDoctors({ page: 1, limit }));
    }, [dispatch, limit]);

    // Close dropdown on ESC or outside click
    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setOpenDropdownId(null);
        }
        function onDocClick(e) {
            // if clicking outside any dropdown, close
            if (!e.target.closest(".profile-action")) {
                setOpenDropdownId(null);
            }
        }
        document.addEventListener("keydown", onKey);
        document.addEventListener("click", onDocClick);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("click", onDocClick);
        };
    }, []);

    const toggleDropdown = (id, e) => {
        e.stopPropagation();
        setOpenDropdownId((prev) => (prev === id ? null : id));
    };

    const handleLoadMore = () => {
        if (page < totalPages && !loading) {
            dispatch(fetchDoctors({ page: page + 1, limit }));
        }
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Doctor will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteDoctor(id));
                dispatch(fetchDoctors({ page: 1, limit }));
            }
        });
        setOpenDropdownId(null);
    };

    // const handleToggleStatus = (id) => {
    //     dispatch(toggleDoctorStatus(id));
    //     setOpenDropdownId(null);
    // };
    const handleToggleStatus = (doc) => {
        console.log("Toggling status for doctor:", doc);
        const currentStatus = doc.status === true ? 1 : 0;
        const newStatus = currentStatus === 1 ? 0 : 1;
        const statusText = newStatus === 1 ? "activate" : "deactivate";

        Swal.fire({
            title: `Are you sure?`,
            text: `You are about to ${statusText} this doctor.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${statusText} it!`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await dispatch(toggleDoctorStatus({ id: doc._id, status: newStatus })).unwrap();

                    Swal.fire({
                        title: "Updated!",
                        text: `Doctor has been ${statusText}d successfully.`,
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false,
                    });

                    // Refresh the list
                    dispatch(fetchDoctors({ page, limit }));
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to update doctor status.",
                        icon: "error",
                    });
                }
            }
        });
    };




    return (
        <>
            <div className="row">
                <div className="col-sm-4 col-3">
                    <h4 className="page-title">Doctors</h4>
                </div>
                <div className="col-sm-8 col-9 text-right m-b-20">
                    <a href="/admin/home/doctors/add-doctor" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Doctor</a>
                </div>
            </div>
            <div className="row doctor-grid">
                {loading && page === 1 ? (
                    <div className="col-12">Loading...</div>
                ) : list.length === 0 ? (
                    <div className="col-12">No doctors found.</div>
                ) : (
                    list.map((doc) => (
                        <div className="col-md-4 col-sm-4  col-lg-3" key={doc._id || doc.id}>
                            <div className="profile-widget">
                                <div className="doctor-img">
                                    <a className="avatar" href="profile.html"><img alt="avatar" src={doc.avatar} /></a>
                                </div>
                                <div className="dropdown profile-action">

                                    {/* Dropdown block - React controlled */}
                                    <div className="profile-action" style={{ position: "relative", display: "inline-block" }}>
                                        <button
                                            type="button"
                                            aria-haspopup="true"
                                            aria-expanded={openDropdownId === (doc._id || doc.id)}
                                            className="action-icon btn btn-sm"
                                            onClick={(e) => toggleDropdown(doc._id || doc.id, e)}
                                            title="Actions"
                                            style={{ background: "transparent", border: "none", padding: 6 }}
                                        >
                                            <i className="fa fa-ellipsis-v"></i>
                                        </button>

                                        {/* dropdown menu */}
                                        {openDropdownId === (doc._id || doc.id) && (
                                            <div
                                                className="dropdown-menu dropdown-menu-right"
                                                role="menu"
                                                style={{
                                                    display: "block",
                                                    position: "absolute",
                                                    right: 0,
                                                    top: "100%",
                                                    zIndex: 2000,
                                                    minWidth: 180,
                                                    boxShadow: "0 6px 12px rgba(0,0,0,.175)",
                                                    marginTop: 6,
                                                }}
                                                onClick={(e) => e.stopPropagation()} // clicking inside shouldn't close until action
                                            >
                                                <Link
                                                    className="dropdown-item"
                                                    to={`/admin/home/doctors/edit/${doc._id || doc.id}`}
                                                    onClick={() => setOpenDropdownId(null)}
                                                >
                                                    <i className="fa fa-pencil m-r-5"></i> Edit
                                                </Link>

                                                <button
                                                    type="button"
                                                    className="dropdown-item"
                                                    onClick={() => handleDelete(doc._id || doc.id)}
                                                >
                                                    <i className="fa fa-trash-o m-r-5"></i> Delete
                                                </button>

                                                <button
                                                    className="dropdown-item"
                                                    onClick={() => handleToggleStatus(doc)}
                                                    disabled={togglingId === (doc._id || doc.id)}
                                                >
                                                    <i className="fa fa-toggle-on m-r-5"></i>
                                                    {togglingId === (doc._id || doc.id) ? "Updating..." : (doc.status ? "Deactivate" : "Activate")}
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                </div>
                                <h4 className="doctor-name text-ellipsis"><a href="profile.html">{doc.firstName} {doc.lastName}</a></h4>
                                <div className="doc-prof">{doc.department?.name || "No Department"}</div>
                                <div className="doc-prof">{doc.designation || "No Designation"}</div>
                                <div className="user-country">
                                    <i className="fa fa-map-marker"></i> {doc.country}, {doc.city}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="see-all">
                        <button
                            type="button"
                            className="see-all-btn"
                            onClick={handleLoadMore}
                            disabled={loading || page >= totalPages}
                        >
                            {loading && page > 1 ? "Loading..." : page >= totalPages ? "No more" : "Load More"}
                        </button>
                        {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctors;