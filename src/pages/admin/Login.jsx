import { useEffect, useLayoutEffect } from "react";

const Login = () => {
    useEffect(() => {
        console.log("login render");
    }, []);

    useLayoutEffect(() => {
        console.log("use Layout Effect");
    }, []);
    return (
        <div class="main-wrapper account-wrapper">
            <div class="account-page">
                <div class="account-center">
                    <div class="account-box">
                        <form className="form-signin">
                            <div className="account-logo">
                                <a href="/"><img src="/assets/img/logo-dark.png" alt="" /></a>
                            </div>
                            <div className="form-group">
                                <label>Username or Email</label>
                                <input type="text" autofocus="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="form-group text-right">
                                <a href="/admin/forgot-password">Forgot your password?</a>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-primary account-btn">Login</button>
                            </div>
                            <div className="text-center register-link">
                                Don’t have an account? <a href="/admin/register">Register Now</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Login;