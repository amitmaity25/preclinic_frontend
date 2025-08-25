const LeaveRequest = () => {
    return (
        <> <div className="row">
            <div className="col-sm-8 col-6">
                <h4 className="page-title">Leave Request</h4>
            </div>
            <div className="col-sm-4 col-6 text-right m-b-30">
                <a href="/admin/home/employees/leaves/add-leave" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Leave</a>
            </div>
        </div>
            <div className="row filter-row">
                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                    <div className="form-group form-focus">
                        <label className="focus-label">Employee Name</label>
                        <input type="text" className="form-control floating" />
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                    <div className="form-group form-focus select-focus">
                        <label className="focus-label">Leave Type</label>
                        <select className="select floating">
                            <option> -- Select -- </option>
                            <option>Casual Leave</option>
                            <option>Medical Leave</option>
                            <option>Loss of Pay</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                    <div className="form-group form-focus select-focus">
                        <label className="focus-label">Leave Status</label>
                        <select className="select floating">
                            <option> -- Select -- </option>
                            <option> Pending </option>
                            <option> Approved </option>
                            <option> Rejected </option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                    <div className="form-group form-focus">
                        <label className="focus-label">From</label>
                        <div className="cal-icon">
                            <input className="form-control floating datetimepicker" type="text" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                    <div className="form-group form-focus">
                        <label className="focus-label">To</label>
                        <div className="cal-icon">
                            <input className="form-control floating datetimepicker" type="text" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                    <a href="#" className="btn btn-success btn-block"> Search </a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-striped custom-table mb-0 datatable">
                            <thead>
                                <tr>
                                    <th>Employee</th>
                                    <th>Leave Type</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>No of Days</th>
                                    <th>Reason</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="profile.html" className="avatar">R</a>
                                        <h2><a href="#">Albina Simonis <span>Nurse</span></a></h2>
                                    </td>
                                    <td>Casual Leave</td>
                                    <td>8 Aug 2018</td>
                                    <td>8 Aug 2018</td>
                                    <td>2 days</td>
                                    <td>Family Function</td>
                                    <td className="text-center">
                                        <div className="dropdown action-label">
                                            <a className="custom-badge status-purple dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                New
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">New</a>
                                                <a className="dropdown-item" href="#">Pending</a>
                                                <a className="dropdown-item" href="#">Approved</a>
                                                <a className="dropdown-item" href="#">Declined</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-leave.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="#" title="Decline" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="profile.html" className="avatar">J</a>
                                        <h2><a>	Cristina Groves  <span>Doctor</span></a></h2>
                                    </td>
                                    <td>Medical Leave</td>
                                    <td>13 Jul 2018</td>
                                    <td>15 Jul 2018</td>
                                    <td>3 days</td>
                                    <td>Going to Vacation</td>
                                    <td className="text-center">
                                        <div className="dropdown action-label">
                                            <a className="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                Approved
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">New</a>
                                                <a className="dropdown-item" href="#">Pending</a>
                                                <a className="dropdown-item" href="#">Approved</a>
                                                <a className="dropdown-item" href="#">Declined</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-leave.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="#" title="Decline" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="profile.html" className="avatar">J</a>
                                        <h2><a>Mary Mericle <span>Accountant</span></a></h2>
                                    </td>
                                    <td>Casual Leave</td>
                                    <td>27 Jun 2018</td>
                                    <td>28 Jun 2018</td>
                                    <td>2 days</td>
                                    <td>Going to Native Place</td>
                                    <td className="text-center">
                                        <div className="dropdown action-label">
                                            <a className="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                Approved
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">New</a>
                                                <a className="dropdown-item" href="#">Pending</a>
                                                <a className="dropdown-item" href="#">Approved</a>
                                                <a className="dropdown-item" href="#">Declined</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-leave.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="#" title="Decline" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="profile.html" className="avatar">H</a>
                                        <h2><a>Haylie Feeney  <span>Laboratorist</span></a></h2>
                                    </td>
                                    <td>Casual Leave</td>
                                    <td>13 May 2018</td>
                                    <td>13 May 2018</td>
                                    <td>2 days</td>
                                    <td>Not feeling well</td>
                                    <td className="text-center">
                                        <div className="dropdown action-label">
                                            <a className="custom-badge status-red dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                Declined
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">New</a>
                                                <a className="dropdown-item" href="#">Pending</a>
                                                <a className="dropdown-item" href="#">Approved</a>
                                                <a className="dropdown-item" href="#">Declined</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-leave.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="#" title="Decline" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="profile.html" className="avatar">R</a>
                                        <h2><a>Zoe Butler <span>Pharmacist</span></a></h2>
                                    </td>
                                    <td>Casual Leave</td>
                                    <td>31 Mar 2018</td>
                                    <td>31 Mar 2018</td>
                                    <td>2 days</td>
                                    <td>Birthday Function</td>
                                    <td className="text-center">
                                        <div className="dropdown action-label">
                                            <a className="custom-badge status-purple dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                New
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">New</a>
                                                <a className="dropdown-item" href="#">Pending</a>
                                                <a className="dropdown-item" href="#">Approved</a>
                                                <a className="dropdown-item" href="#">Declined</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-leave.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="#" title="Decline" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div></>
    );
};

export default LeaveRequest;