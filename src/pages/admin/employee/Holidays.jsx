const Holidays = () => {
    return (
        <><div className="row">
            <div className="col-sm-5 col-5">
                <h4 className="page-title">Holidays 2018</h4>
            </div>
            <div className="col-sm-7 col-7 text-right m-b-30">
                <a href="/admin/home/employees/holiday/add-holiday" className="btn btn-primary btn-rounded"><i className="fa fa-plus"></i> Add Holiday</a>
            </div>
        </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-striped custom-table mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title </th>
                                    <th>Holiday Date</th>
                                    <th>Day</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="holiday-completed">
                                    <td>1</td>
                                    <td>New Year</td>
                                    <td>1 Jan 2018</td>
                                    <td>Monday</td>
                                    <td></td>
                                </tr>
                                <tr className="holiday-completed">
                                    <td>2</td>
                                    <td>Good Friday</td>
                                    <td>13 Apr 2018</td>
                                    <td>Friday</td>
                                    <td></td>
                                </tr>
                                <tr className="holiday-completed">
                                    <td>3</td>
                                    <td>May Day</td>
                                    <td>1 May 2018</td>
                                    <td>Tuesday</td>
                                    <td className="text-center">
                                    </td>
                                </tr>
                                <tr className="holiday-completed">
                                    <td>4</td>
                                    <td>Memorial Day</td>
                                    <td>28 May 2018</td>
                                    <td>Monday</td>
                                    <td className="text-center">
                                    </td>
                                </tr>
                                <tr className="holiday-completed">
                                    <td>5</td>
                                    <td>Ramzon</td>
                                    <td>26 Jun 2018</td>
                                    <td>Monday</td>
                                    <td></td>
                                </tr>
                                <tr className="holiday-upcoming">
                                    <td>6</td>
                                    <td>Bakrid</td>
                                    <td>23 Aug 2018</td>
                                    <td>Wednesday</td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-holiday.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_holiday"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="holiday-upcoming">
                                    <td>7</td>
                                    <td>Deepavali</td>
                                    <td>18 Oct 2018</td>
                                    <td>Wednesday</td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-holiday.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_holiday"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="holiday-upcoming">
                                    <td>8</td>
                                    <td>Christmas</td>
                                    <td>25 Dec 2018</td>
                                    <td>Tuesday</td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="edit-holiday.html"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_holiday"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
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

export default Holidays;