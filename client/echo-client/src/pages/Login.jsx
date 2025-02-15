import '../style/form.css'

const Login = () => {
    return (
        <div className="home form">
            <h2 className="form-h2">
                Login
            </h2>
            <div className='form'>
                <input type="email" name="email" id="email" placeholder='email' />
                <input type="password" placeholder='password' />
            </div>
            <button className='form-button'>Submit</button>
            <p className="form-p">Not registered? <a href="/signup">Sign up</a></p>
        </div>
    )
}

export default Login