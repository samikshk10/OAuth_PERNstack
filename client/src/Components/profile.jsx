import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios
      .get("/api/currentuser")
      .then((res) => {
        setProfile(res.data);
        console.log(profile);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  if (profile.googleId) {
    return (
      <div>
        <ul>
          <li>GoogleID: {profile.googleId}</li>
        </ul>
        <a href="/api/logout">Logout</a>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <li>FacebookID: {profile.facebookId}</li>
        </ul>
        <a href="/api/logout">Logout</a>
      </div>
    );
  }
};

export default Profile;
