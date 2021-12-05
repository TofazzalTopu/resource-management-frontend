import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({test}) => {
console.log(test);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(){
    const baseURL = "http://localhost:8081";
    fetch(baseURL + "/user/login", {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
            localStorage.setItem("token",  json.token);
            localStorage.setItem("user",  JSON.stringify(json.user));
            test(json.user);
      console.log(json);
      });
      };

    return (
        <div className="login-page flex aic jc">
            <div className="block flex aic jc col">
                <div className="heading s40 fontb font">Login</div>
                <div className="input-field flex col">
                    <div className="lbl s13 c333 fontb font">Username</div>
                    <input type="text" className="input-name s14 anim font"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-field flex col">
                    <div className="lbl s13 c333 fontb font">Password</div>
                    <input type="password" className="input-name s14 anim font"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-field flex col">
                    <button onClick={handleLogin} className="btn-loing cleanbtn button flex aic jc cfff s14 fontb font">Login</button>
                </div>
                <div className="input-field flex aic">
                    <input type="checkbox" className="check-box s20" />
                    <div className="lbl">Remember me</div>
                </div>
                <div className="signup-forgot input-field flex aic">
                    <Link to={'/register'} className="btn-signup cleanbtn button cfff fontb font">sign up</Link>
                    <button className="btn-forgot-lbl cleanbtn button font">Forgot password?</button>
                </div>
            </div>
        </div>
    )
}

export default Login
