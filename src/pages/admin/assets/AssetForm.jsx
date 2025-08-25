const AssetForm = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h4 className="page-title">Add Asset</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Asset Name</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Asset Id</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Purchase Date</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Purchase From</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Manufacturer</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Model</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Serial Number</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Supplier</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Condition</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Warranty</label>
                                    <input className="form-control" type="text" placeholder="In Months" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Value</label>
                                    <input className="form-control" type="text" placeholder="$" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Asset User</label>
                                    <select className="select">
                                        <option>John Doe</option>
                                        <option>Richard Miles</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Status</label>
                                    <select className="select">
                                        <option>Pending</option>
                                        <option>Approved</option>
                                        <option>Deployed</option>
                                        <option>Damaged</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="m-t-20 text-center">
                            <button className="btn btn-primary submit-btn">Add Asset</button>
                        </div>
                    </form>
                </div>
            </div></>
    );
};

export default AssetForm;