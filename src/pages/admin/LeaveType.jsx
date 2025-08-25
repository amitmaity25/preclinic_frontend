const LeaveType = () => {
    return (
        <><div className="row">
                    <div className="col-sm-8 col-5">
                        <h4 className="page-title">Leave Type</h4>
                    </div>
                    <div className="col-sm-4 col-7 text-right m-b-30">
                        <a href="/admin/home/add-leave-type" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Leave Type</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Leave Type</th>
                                        <th>Leave Days</th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>Casual Leave</td>
                                        <td>12 Days</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a className="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    Active
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">Active</a>
                                                    <a href="#" className="dropdown-item">Inactive</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="edit-leave-type.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_leavetype"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2
                                        </td>
                                        <td>Medical Leave</td>
                                        <td>12 Days</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a className="custom-badge status-red dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    Inactive
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Active</a>
                                                    <a className="dropdown-item" href="#">Inactive</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="edit-leave-type.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_leavetype"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            3
                                        </td>
                                        <td>Loss of Pay</td>
                                        <td>-</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a className="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    Active
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Active</a>
                                                    <a className="dropdown-item" href="#">Inactive</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="edit-leave-type.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_leavetype"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div></>
    )
};

export default LeaveType;