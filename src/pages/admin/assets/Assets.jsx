const Assets = () => {
    return (
        <>
            <div className="row">
            <div className="col-sm-8 col-6">
                <h4 className="page-title">Assets</h4>
            </div>
            <div className="col-sm-4 col-6 text-right m-b-30">
                <a href="/admin/home/assets/add-asset" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Asset</a>
            </div>
            </div>
            <div className="row filter-row">
                <div className="col-sm-6 col-md-3">
                    <div className="form-group form-focus">
                        <label className="focus-label">Employee Name</label>
                        <input type="text" className="form-control floating" />
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="form-group form-focus">
                        <label className="focus-label">From</label>
                        <div className="cal-icon">
                            <input className="form-control floating datetimepicker" type="text" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="form-group form-focus">
                        <label className="focus-label">To</label>
                        <div className="cal-icon">
                            <input className="form-control floating datetimepicker" type="text" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <a href="#" className="btn btn-success btn-block"> Search </a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-striped custom-table mb-0 datatable">
                            <thead>
                                <tr>
                                    <th>Asset User</th>
                                    <th>Asset Name</th>
                                    <th>Asset Id</th>
                                    <th>Purchase Date</th>
                                    <th>Warrenty</th>
                                    <th>Warrenty End</th>
                                    <th>Amount</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>
                                        <strong>Anaesthetic machine</strong>
                                    </td>
                                    <td>#AST-0001</td>
                                    <td>22 Jun 2018</td>
                                    <td>4 Years</td>
                                    <td>22 Jun 2022</td>
                                    <td>$62480</td>
                                    <td className="text-center">
                                        <div className="dropdown action-label">
                                            <a className="custom-badge status-red dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                Pending
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Pending</a>
                                                <a className="dropdown-item" href="#">Approved</a>
                                                <a className="dropdown-item" href="#">Returned</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a class="dropdown-item" href="edit-asset.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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

export default Assets;