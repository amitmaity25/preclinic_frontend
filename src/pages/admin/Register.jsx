const Register = () => {
    return (
        <div class="main-wrapper account-wrapper">
            <div class="account-page">
                <div class="account-center">
                    <div class="account-box">
                        <form className="form-signin">
                            <div className="account-logo">
                                <a href="/"><img src="/assets/img/logo-dark.png" alt="Logo" /></a>
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group checkbox">
                                <label>
                                    <input type="checkbox" /> I have read and agree the Terms & Conditions
                                </label>
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary account-btn" type="submit">Signup</button>
                            </div>
                            <div className="text-center login-link">
                                Already have an account? <a href="/admin/login">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;