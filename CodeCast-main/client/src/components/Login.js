import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation (optional)
    if (!username || !password) {
      toast.error("Both fields are required!");
      return;
    }

    // Dummy authentication logic (you can replace this with actual backend verification)
    if (username && password) {
      // On successful login, store username and redirect to Home
      toast.success("Login successful!");
      navigate("/home", { state: { username } }); // Redirect to Home page with username
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-4">
          <div className="card shadow-sm p-3 bg-secondary rounded">
            <div className="card-body bg-dark text-center">
              <h4 className="card-title text-light mb-4">Login</h4>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                onClick={handleLogin}
                className="btn btn-success btn-lg btn-block"
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
