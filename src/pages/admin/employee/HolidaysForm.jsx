const HolidaysForm = () => {
    return (
        <><div className="row">
            <div className="col-lg-8 offset-lg-2">
                <h4 className="page-title">Add Holiday</h4>
            </div>
        </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <form>
                        <div className="form-group">
                            <label>Holiday Name <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Holiday Date <span className="text-danger">*</span></label>
                            <div className="cal-icon">
                                <input className="form-control datetimepicker" type="text" />
                            </div>
                        </div>
                        <div className="m-t-20 text-center">
                            <button className="btn btn-primary submit-btn">Create Holiday</button>
                        </div>
                    </form>
                </div>
            </div></>
    );
};

export default HolidaysForm;