const EmployeeSalary = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-4 col-5">
                    <h4 className="page-title">Employee Salary</h4>
                </div>
                <div className="col-sm-8 col-7 text-right m-b-30">
                    <a href="/admin/home/payroll/add-salary" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Salary</a>
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
                        <label className="focus-label">Role</label>
                        <select className="select floating">
                            <option> -- Select -- </option>
                            <option>Employee</option>
                            <option>Manager</option>
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
                        <table className="table table-striped custom-table datatable">
                            <thead>
                                <tr>
                                    <th style={{ width: "25%" }}>Employee</th>
                                    <th>Employee ID</th>
                                    <th>Email</th>
                                    <th>Joining Date</th>
                                    <th>Role</th>
                                    <th>Salary</th>
                                    <th>Payslip</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img className="rounded-circle" src="assets/img/user.jpg" height="28" width="28" alt="" /> John Doe
                                    </td>
                                    <td>FT-0001</td>
                                    <td>johndoe@example.com</td>
                                    <td>1 Jan 2013</td>
                                    <td>
                                        <div className="dropdown">
                                            <a href="#" className="custom-badge status-grey dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Nurse</a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Laboratorist</a>
                                                <a className="dropdown-item" href="#">Pharmacist</a>
                                                <a className="dropdown-item" href="#">Accountant</a>
                                                <a className="dropdown-item" href="#">Receptionist</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$59698</td>
                                    <td><a className="btn btn-sm btn-primary" href="/admin/home/payroll/salary-view">Generate Slip</a></td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-salary.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_salary"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                            </div>
                                        </div>
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


export default EmployeeSalary;