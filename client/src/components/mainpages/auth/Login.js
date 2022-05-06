import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Logo from '../../../images/amigos_logo1.png'
import Image2 from '../../../images/image2.jpg'

//Login component
function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/welcome";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        // login form
        <div className="login-page">

            <form onSubmit={loginSubmit}>
                <br></br>
                <p id="text1">WELCOME TO AMIGOS</p>
                <br></br>
                <h2 id="text2">Login</h2>
                <br></br>
                <br></br>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div>
                    <button type="submit">Login</button>
                    <br></br>
                    <br></br>

                    <span id="text3">Don't you have an account ? </span> &nbsp;&nbsp;
                    
                    <Link to="/register" id="link1">Register</Link>
                </div>
            </form>
        
            <div>
                <img src={Image2} id="login_image2"/>
            </div>

            <div>
                <img src={Logo} id="login_image"/>
            </div> 

        </div>
    )
}

export default Login
