const TaxesForm = () => {
    return (
        <><div className="row">
            <div className="col-lg-8 offset-lg-2">
                <h4 className="page-title">Add Tax</h4>
            </div>
        </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <form>
                        <div className="form-group">
                            <label>Tax Name <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Tax Percentage (%) <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Status <span className="text-danger">*</span></label>
                            <select className="select">
                                <option>Pending</option>
                                <option>Approved</option>
                            </select>
                        </div>
                        <div className="m-t-20 text-center">
                            <button className="btn btn-primary submit-btn">Create Tax</button>
                        </div>
                    </form>
                </div>
            </div></>
    );
};

export default TaxesForm;