const ProvidentFund = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-5 col-4">
                    <h4 className="page-title">Provident Fund</h4>
                </div>
                <div className="col-sm-7 col-8 text-right m-b-30">
                    <a href="/admin/home/finance/provident-fund/add-provident-fund" className="btn btn-primary btn-rounded"><i className="fa fa-plus"></i> Add Provident Fund</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-striped custom-table datatable mb-0">
                            <thead>
                                <tr>
                                    <th>Employee Name</th>
                                    <th>Provident Fund Type</th>
                                    <th>Employee Share</th>
                                    <th>Organization Share</th>
                                    <th>Status</th>
                                    <th className="text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="profile.html" className="avatar">A</a>
                                        <h2><a href="profile.html">Albina Simonis  <span> Nurse</span></a></h2>
                                    </td>
                                    <td>Percentage of Basic Salary</td>
                                    <td>2%</td>
                                    <td>2%</td>
                                    <td>
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
                                                <a className="dropdown-item" href="edit-provident-fund.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_pf"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
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

export default ProvidentFund;