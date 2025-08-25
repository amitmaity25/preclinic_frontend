const ForgotPassword = () => {
    return (
        <div class="main-wrapper account-wrapper">
            <div class="account-page">
                <div class="account-center">
                    <div class="account-box">
                        <form className="form-signin" action="#">
                            <div className="account-logo">
                                <a href="/"><img src="/assets/img/logo-dark.png" alt="" /></a>
                            </div>
                            <div className="form-group">
                                <label>Enter Your Email</label>
                                <input type="text" class="form-control" autofocus />
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary account-btn" type="submit">Reset Password</button>
                            </div>
                            <div className="text-center register-link">
                                <a href="/admin/login">Back to Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ForgotPassword;