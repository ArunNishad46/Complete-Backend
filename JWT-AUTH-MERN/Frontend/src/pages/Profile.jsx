import { useContext, useEffect, useState } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { accessToken, setAccessToken } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(!accessToken) {  
      return;
    }
    const fetchUserData = async () => {
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            const refreshResponse = await api.post("/refreshtoken");
            const newAccessToken = refreshResponse.data.accessToken;
            setAccessToken(newAccessToken);
            const retryResponse = await api.get("/profile", {
              headers: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            setUserData(retryResponse.data);
          } catch (error) {
            console.error(error.response.data.message || "Failed to refresh token");
          }
        }else {
          console.error(error.response.data.message || "Failed to fetch user data");
        }
      }
    };

    if (accessToken) {
      fetchUserData();
    }
  }, [accessToken]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const logout = async () => {
    try{
      await api.post("/logout");
      setAccessToken(null);
      setUserData(null);
      navigate('/login');
    }catch (error) {
      console.error(error.response.data.message || "Logout failed");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-96">
      <h2 className="text-cyan-500 text-3xl font-bold underline">Profile</h2>
      <p className="text-gray-700 text-xl mt-4">Username: {userData.username}</p>
      <p className="text-gray-700 text-xl mt-2">Email: {userData.email}</p>
      <button onClick={logout} className="bg-cyan-500 text-white p-2 rounded mt-4 cursor-pointer">Logout</button>
    </div>
  );
};

export default Profile;
