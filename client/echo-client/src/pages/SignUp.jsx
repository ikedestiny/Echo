import '../style/form.css'
const SignUp = () => {
    return (
        <div className="home form">
            <h2 className='form-h2'>
                Sign up
            </h2>
            <div className='form'>
                <input type="text" placeholder="username" />
                <input type="email" name="email" id="email" placeholder='email' />
                <input type="password" placeholder='password' />
            </div>
            <button className='form-button'>Submit</button>
            <p className="form-p">Already registered? <a href="/login">Login</a></p>
        </div>

    )
}

export default SignUp