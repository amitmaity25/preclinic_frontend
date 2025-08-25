const Role = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-8">
                    <h4 className="page-title">Roles & Permissions</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-3">
                    <a href="/admin/home/roles-permissions/add" className="btn btn-primary btn-block"><i className="fa fa-plus"></i> Add Roles</a>
                    <div className="roles-menu">
                        <ul>
                            <li className="active">
                                <a href="javascript:void(0);">Administrator</a>
                                <span className="role-action">
                                    <a href="edit-role.html">
                                        <span className="action-circle large">
                                            <i className="material-icons">edit</i>
                                        </span>
                                    </a>
                                    <a href="#" data-toggle="modal" data-target="#delete_role">
                                        <span className="action-circle large delete-btn">
                                            <i className="material-icons">delete</i>
                                        </span>
                                    </a>
                                </span>
                            </li>
                            <li><a href="#">Doctor</a></li>
                            <li><a href="#">Nurse</a></li>
                            <li><a href="#">Laboratorist</a></li>
                            <li><a href="#">Pharmacist</a></li>
                            <li><a href="#">Accountant</a></li>
                            <li><a href="#">Receptionist</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8 col-xl-9">
                    <h6 className="card-title m-b-20">Module Access</h6>
                    <div className="m-b-30">
                        <ul className="list-group">
                            <li className="list-group-item">
                                Employee
                                <div className="material-switch float-right">
                                    <input id="staff_module" type="checkbox" />
                                        <label for="staff_module" className="badge-success"></label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                Holidays
                                <div className="material-switch float-right">
                                    <input id="holidays_module" type="checkbox" />
                                        <label for="holidays_module" className="badge-success"></label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                Leave Request
                                <div className="material-switch float-right">
                                    <input id="leave_module" type="checkbox" />
                                        <label for="leave_module" className="badge-success"></label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                Events
                                <div className="material-switch float-right">
                                    <input id="events_module" type="checkbox" />
                                        <label for="events_module" className="badge-success"></label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                Chat
                                <div className="material-switch float-right">
                                    <input id="chat_module" type="checkbox" />
                                        <label for="chat_module" className="badge-success"></label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped custom-table">
                            <thead>
                                <tr>
                                    <th>Module Permission</th>
                                    <th className="text-center">Read</th>
                                    <th className="text-center">Write</th>
                                    <th className="text-center">Create</th>
                                    <th className="text-center">Delete</th>
                                    <th className="text-center">Import</th>
                                    <th className="text-center">Export</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Employee</td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Holidays</td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Leave Request</td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Events</td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" checked="" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Role;