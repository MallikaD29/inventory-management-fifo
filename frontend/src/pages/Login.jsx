import { useState } from "react";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    if (username === "admin" && password === "admin") {

      localStorage.setItem("loggedIn", "true");

      window.location.href = "/";

    } else {

      alert("Invalid Username or Password");

    }

  };

  return (

    <div className="container">

      <div className="row vh-100 align-items-center justify-content-center">

        <div className="col-md-4">

          <div className="card shadow">

            <div className="card-body">

              <h3 className="text-center mb-4">
                Inventory Login
              </h3>

              <input
                className="form-control mb-3"
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
              />

              <button
                className="btn btn-primary w-100"
                onClick={login}
              >
                Login
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;