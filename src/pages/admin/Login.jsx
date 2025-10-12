import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, loginAdmin } from "../../store/slices/admin/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { email, password, loading, error, loginSuccess, role } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        dispatch(updateForm({ name: e.target.name, value: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAdmin({ email, password }));
    };

    useEffect(() => {
        if (loginSuccess) {
            navigate("/admin/home");
        }
    }, [loginSuccess]);

    return (
        <div className="main-wrapper account-wrapper">
            <div className="account-page">
                <div className="account-center">
                    <div className="account-box">
                        <form className="form-signin" onSubmit={handleSubmit}>
                            <div className="account-logo">
                                <a href="/"><img src="/assets/img/logo-dark.png" alt="" /></a>
                            </div>
                            <div className="form-group">
                                <label>Username or Email</label>
                                <input id="inputEmail" type="email" name="email" className="form-control" value={email} onChange={handleInputChange} placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" id="inputPassword" name="password" value={password} className="form-control" onChange={handleInputChange} placeholder="Password" />
                            </div>
                            <div className="form-group text-right">
                                <a href="/admin/forgot-password">Forgot your password?</a>
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary account-btn" disabled={loading}>{loading ? "Please Wait" : "Login"}</button>
                                {error && <p style={{ color: "red" }}>{error}</p>}
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