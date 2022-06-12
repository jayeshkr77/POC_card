import { useRef, useState } from "react";

function Login() {
    const submitButton = useRef<HTMLInputElement>(null);
    const [loader, setLoader] = useState<boolean>(false);
    
    const loginUser = () => {
        setLoader(true);
    }
    return (
        <form className="login-form" onSubmit={loginUser}>
            <div className="title">Login</div>
            <div className="field">
                <div className="label">Email</div>
                <input type="email" />
            </div>
            <div className="field">
                <div className="label">Password</div>
                <input type="password" />
            </div>
            <div className='field'>
                <input type="submit" ref={submitButton} className='login-btn' value={loader ? 'logging...' : 'Log in'} disabled={loader} />
            </div>
        </form>
    )
}
export default Login;