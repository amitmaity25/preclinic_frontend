const ExpensesForm = () => {
    return (
        <><div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">New Expense</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Item Name</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchase From</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchase Date</label>
                                        <div className="cal-icon">
                                            <input className="form-control datetimepicker" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchased By </label>
                                        <select className="select">
                                            <option>Daniel Porter</option>
                                            <option>Roger Dixon</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input placeholder="$50" className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Paid By</label>
                                        <select className="select">
                                            <option>Cash</option>
                                            <option>Cheque</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Status</label>
                                        <select className="select">
                                            <option>Pending</option>
                                            <option>Approved</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Attachments</label>
                                        <input className="form-control" type="file" />
                                    </div>
                                </div>
                            </div>
                            <div className="attach-files">
                                <ul>
                                    <li>
                                        <img src="assets/img/user.jpg" alt="" />
                                        <a href="#" className="fa fa-close file-remove"></a>
                                    </li>
                                    <li>
                                        <img src="assets/img/user.jpg" alt="" />
                                        <a href="#" className="fa fa-close file-remove"></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Expense</button>
                            </div>
                        </form>
                    </div>
                </div></>
    );
};

export default ExpensesForm;