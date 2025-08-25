const Expenses = () => {
    return (
       <><div className="row">
                    <div className="col-sm-8 col-5">
                        <h4 className="page-title">Expenses</h4>
                    </div>
                    <div className="col-sm-4 col-7 text-right m-b-30">
                        <a href="/admin/home/finance/expenses/add-expense" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Expense</a>
                    </div>
                </div>
                <div className="row filter-row">
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus">
                            <label className="focus-label">Item Name</label>
                            <input type="text" className="form-control floating" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus select-focus">
                            <label className="focus-label">Purchased By</label>
                            <select className="select floating">
                                <option> -- Select -- </option>
                                <option>Loren Gatlin</option>
                                <option>Tarah Shropshire</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus select-focus">
                            <label className="focus-label">Paid By</label>
                            <select className="select floating">
                                <option> -- Select -- </option>
                                <option> Cash </option>
                                <option> Cheque </option>
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
                                        <th>Item</th>
                                        <th>Purchase From</th>
                                        <th>Purchase Date</th>
                                        <th>Purchased By</th>
                                        <th>Amount</th>
                                        <th>Paid By</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Stretcher</strong>
                                        </td>
                                        <td>Hospital Equipment Inc</td>
                                        <td>17 Aug 2018</td>
                                        <td>Loren Gatlin</td>
                                        <td>$8048</td>
                                        <td>Cash</td>
                                        <td className="text-center">
                                            <div className="dropdown action-label">
                                                <a className="custom-badge status-red dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    Pending
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Pending</a>
                                                    <a className="dropdown-item" href="#">Approved</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="edit-expense.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_expense"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Anaesthetic machine</strong>
                                        </td>
                                        <td>Biomedical Equipment Inc</td>
                                        <td>22 Jun 2018</td>
                                        <td>Tarah Shropshire</td>
                                        <td>$62480</td>
                                        <td>Cheque</td>
                                        <td className="text-center">
                                            <div className="dropdown action-label">
                                                <a className="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    Approved
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Pending</a>
                                                    <a className="dropdown-item" href="#">Approved</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="edit-expense.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_expense"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
									<tr>
                                        <td>
                                            <strong>Aspiration/Suction Pump</strong>
                                        </td>
                                        <td>Medi Pro Service</td>
                                        <td>24 Jul 2018</td>
                                        <td>Tarah Shropshire</td>
                                        <td>$3250</td>
                                        <td>Cheque</td>
                                        <td className="text-center">
                                            <div className="dropdown action-label">
                                                <a className="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    Approved
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Pending</a>
                                                    <a className="dropdown-item" href="#">Approved</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="edit-expense.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_expense"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
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

export default Expenses;