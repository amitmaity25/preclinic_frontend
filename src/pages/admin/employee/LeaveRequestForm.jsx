const LeaveRequestForm = () => {
    return (
        <> <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <h4 className="page-title">Add Leave</h4>
            </div>
        </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <form>
                        <div className="form-group">
                            <label>Leave Type <span className="text-danger">*</span></label>
                            <select className="select">
                                <option>Select Leave Type</option>
                                <option>Casual Leave 12 Days</option>
                                <option>Medical Leave</option>
                                <option>Loss of Pay</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>From <span className="text-danger">*</span></label>
                                    <div className="cal-icon">
                                        <input className="form-control datetimepicker" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>To <span className="text-danger">*</span></label>
                                    <div className="cal-icon">
                                        <input className="form-control datetimepicker" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Number of days <span className="text-danger">*</span></label>
                                    <input className="form-control" readonly="" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Remaining Leaves <span className="text-danger">*</span></label>
                                    <input className="form-control" readonly="" value="12" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Leave Reason <span className="text-danger">*</span></label>
                            <textarea rows="4" cols="5" className="form-control"></textarea>
                        </div>
                        <div className="m-t-20 text-center">
                            <button className="btn btn-primary submit-btn">Send Leave Request</button>
                        </div>
                    </form>
                </div>
            </div></>
    );
};
export default LeaveRequestForm;