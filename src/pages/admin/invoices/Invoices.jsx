const Invoices = () => {
    return (
        <><div className="row">
            <div className="col-sm-5 col-4">
                <h4 className="page-title">Invoices</h4>
            </div>
            <div className="col-sm-7 col-8 text-right m-b-30">
                <a href="/admin/home/finance/invoices/create-invoice" className="btn btn-primary btn-rounded"><i className="fa fa-plus"></i> Create New Invoice</a>
            </div>
        </div>
            <div className="row filter-row">
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
                    <div className="form-group form-focus select-focus">
                        <label className="focus-label">Status</label>
                        <select className="select floating">
                            <option>Select Status</option>
                            <option>Pending</option>
                            <option>Paid</option>
                            <option>Partially Paid</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <a href="#" className="btn btn-success btn-block"> Search </a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-striped custom-table mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Invoice Number</th>
                                    <th>Patient</th>
                                    <th>Created Date</th>
                                    <th>Due Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><a href="invoice-view.html">#INV-0001</a></td>
                                    <td>Charles Ortega</td>
                                    <td>1 Aug 2018</td>
                                    <td>7 Aug 2018</td>
                                    <td>$20</td>
                                    <td><span className="custom-badge status-green">Paid</span></td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-invoice.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="invoice-view.html"><i className="fa fa-eye m-r-5"></i> View</a>
                                                <a className="dropdown-item" href="#"><i className="fa fa-file-pdf-o m-r-5"></i> Download</a>
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_invoice"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><a href="invoice-view.html">#INV-0002</a></td>
                                    <td>Denise Stevens</td>
                                    <td>24 Aug 2018</td>
                                    <td>24 Aug 2018</td>
                                    <td>$6</td>
                                    <td><span className="custom-badge status-blue">Sent</span></td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-invoice.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="invoice-view.html"><i className="fa fa-eye m-r-5"></i> View</a>
                                                <a className="dropdown-item" href="#"><i className="fa fa-file-pdf-o m-r-5"></i> Download</a>
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_invoice"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><a href="invoice-view.html">#INV-0003</a></td>
                                    <td>Dennis Salazar</td>
                                    <td>1 Sep 2018</td>
                                    <td>7 Sep 2018</td>
                                    <td>$20</td>
                                    <td><span className="custom-badge status-orange">Partially Paid</span></td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-invoice.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="invoice-view.html"><i className="fa fa-eye m-r-5"></i> View</a>
                                                <a className="dropdown-item" href="#"><i className="fa fa-file-pdf-o m-r-5"></i> Download</a>
                                                <a className="dropdown-item" href="#"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_invoice"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
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

export default Invoices;