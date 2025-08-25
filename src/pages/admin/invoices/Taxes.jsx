const Taxes = () => {
    return (
        <> <div className="row">
                    <div className="col-sm-8 col-6">
                        <h4 className="page-title">Taxes</h4>
                    </div>
                    <div className="col-sm-4 col-6 text-right m-b-30">
                        <a href="/admin/home/finance/taxes/add-tax" className="btn btn-primary btn-rounded"><i className="fa fa-plus"></i> Add Tax</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tax Name </th>
                                        <th>Tax Percentage (%) </th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>VAT</td>
                                        <td>14%</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a className="custom-badge status-red dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
													Inactive
												</a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Active</a>
                                                    <a className="dropdown-item" href="#">Inactive</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="edit-tax.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_tax"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>GST</td>
                                        <td>30%</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a className="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
													Active
												</a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Active</a>
                                                    <a className="dropdown-item" href="#">Inactive</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="edit-tax.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_tax"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
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

export default Taxes;