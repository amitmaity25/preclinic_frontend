const DoctorSchedule = () => {
    return (
        <><div className="row">
            <div className="col-sm-4 col-3">
                <h4 className="page-title">Schedule</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
                <a href="/admin/home/schedule/add-schedule" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Schedule</a>
            </div>
        </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-border table-striped custom-table mb-0">
                            <thead>
                                <tr>
                                    <th>Doctor Name</th>
                                    <th>Department</th>
                                    <th>Available Days</th>
                                    <th>Available Time</th>
                                    <th>Status</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img width="28" height="28" src="/assets/img/user.jpg" className="rounded-circle m-r-5" alt="" /> Henry Daniels</td>
                                    <td>Cardiology</td>
                                    <td>Sunday, Monday, Tuesday</td>
                                    <td>10:00 AM - 7:00 PM</td>
                                    <td><span className="custom-badge status-green">Active</span></td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-schedule.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_schedule"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
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

export default DoctorSchedule;