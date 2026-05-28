import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div style={{ padding: "20px" }}>
      <h1>👤 Profile</h1>
      {user ? (
        <>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
}

export default Profile;
