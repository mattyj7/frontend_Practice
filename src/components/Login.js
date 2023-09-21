

const Login = () => {
    return (
        <div className="login-section">
            <div className="username">
                <label> Username: </label>
                <input></input>
            </div>
            <div className="password">
                <label> Password: </label>
                <input></input>
            </div>
            <div className="login-btn">
                <button>Login</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default Login;
