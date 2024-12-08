import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

function Home() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the username passed from the Login page
  const username = location.state?.username;

  // Redirect to login if no username
  if (!username) {
    toast.error("Please log in first!");
    navigate("/");
    return null;
  }

  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room ID is generated");
  };

  const joinRoom = () => {
    if (!roomId) {
      toast.error("Room ID is required");
      return;
    }

    // Redirect to Editor page
    navigate(`/editor/${roomId}`, {
      state: { username },
    });
    toast.success("Room joined successfully!");
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  const handleLogout = () => {
    // Clear session or state data if necessary
    toast.success("Logged out successfully!");
    navigate("/"); // Redirect to Login page
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-2 mb-5 bg-secondary rounded">
            <div className="card-body text-center bg-dark">
              <img
                src="/images/codecast.png"
                alt="Logo"
                className="img-fluid mx-auto d-block"
                style={{ maxWidth: "150px" }}
              />
              <h4 className="card-title text-light mb-4">
                Welcome, {username}! Enter the ROOM ID
              </h4>

              <div className="form-group">
                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="form-control mb-2"
                  placeholder="ROOM ID"
                  onKeyUp={handleInputEnter}
                />
              </div>

              {/* Join and Logout Buttons */}
              <div className="d-flex justify-content-center gap-3 mt-3">
                <button
                  onClick={joinRoom}
                  className="btn btn-success btn-lg"
                >
                  JOIN
                </button>
                <button
                  onClick={handleLogout}
                  className="btn btn-danger btn-lg"
                >
                  LOGOUT
                </button>
              </div>

              <p className="mt-3 text-light">
                Don't have a room ID? Create{" "}
                <span
                  onClick={generateRoomId}
                  className="text-success p-2"
                  style={{ cursor: "pointer" }}
                >
                  New Room
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
