import { useEffect, useState } from "react";
import { profile, logout, refresh } from "../api/authServices";
import { useNavigate } from "react-router-dom";

const Profile = ({accessToken, setAccessToken}) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await profile(accessToken);
        setUserData(response.data);
      } catch (error) {
        if (error.response.status === 401) {
          try {
            const response = await refresh();
            const newAccessToken = response.data.accessToken;
            localStorage.setItem('accessToken', newAccessToken)
            setAccessToken(newAccessToken);

            const retryResponse = await profile(newAccessToken);
            setUserData(retryResponse.data);
          } catch (error) {
            console.error(error.response.data.message || "Failed to refresh token");
            await logout();
            localStorage.removeItem("accessToken");
            setAccessToken("")
            setUserData(null)
            navigate('/login')
          }
        }else {
          console.error(error.response.data.message || "Failed to fetch user data");
        }
      }
    };

    fetchUserData();
  }, [accessToken]);
  
  const handleLogout = async () => {
    try{
      await logout();
      localStorage.removeItem('accessToken')
      setAccessToken("");
      setUserData(null);
      navigate('/login');
    }catch (error) {
      console.error(error.response.data.message || "Logout failed");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-96">
      <h2 className="text-cyan-500 text-3xl font-bold underline">Profile</h2>
      {!userData ? (
        <p className="text-gray-500 mt-4">Loading user data...</p>
      ):(
        <>
          <p className="text-gray-700 text-xl mt-4">Username: {userData.username}</p>
          <p className="text-gray-700 text-xl mt-2">Email: {userData.email}</p>
          <button onClick={handleLogout} className="bg-cyan-500 text-white p-2 rounded mt-4 cursor-pointer">Logout</button>
        </>
      )}
    </div>
  );
};

export default Profile;
