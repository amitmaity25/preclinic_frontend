const DoctorScheduleForm = () => {
    return (
        <> <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <h4 className="page-title">Add Schedule</h4>
            </div>
        </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Doctor Name</label>
                                    <select className="select">
                                        <option>Select</option>
                                        <option>Doctor Name 1</option>
                                        <option>Doctor Name 2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Available Days</label>
                                    <select className="select" multiple>
                                        <option>Select Days</option>
                                        <option>Sunday</option>
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                        <option>Friday</option>
                                        <option>Saturday</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Start Time</label>
                                    <div className="time-icon">
                                        <input type="text" className="form-control" id="datetimepicker3" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>End Time</label>
                                    <div className="time-icon">
                                        <input type="text" className="form-control" id="datetimepicker4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea cols="30" rows="4" className="form-control"></textarea>
                        </div>
                        <div className="form-group">
                            <label className="display-block">Schedule Status</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="status" id="product_active" value="option1" checked />
                                    <label className="form-check-label" for="product_active">
                                        Active
                                    </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="status" id="product_inactive" value="option2" />
                                    <label className="form-check-label" for="product_inactive">
                                        Inactive
                                    </label>
                            </div>
                        </div>
                        <div className="m-t-20 text-center">
                            <button className="btn btn-primary submit-btn">Create Schedule</button>
                        </div>
                    </form>
                </div>
            </div></>
    );
};
export default DoctorScheduleForm;