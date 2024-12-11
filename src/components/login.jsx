import React, { useState } from "react";
import music from "../images/music.jpg";
import SpotifyLogo from "../images/spotifyLogo.png";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import googleIcon from "../images/googleIcon.png";
import facebookIcon from "../images/facebookIcon.png";
import spotifyIcon from "../images/spotifyIcon.png";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleLogin = () => {
    const clientId = "45e2ccc5fa77476494aba2daa6c50419";
    const redirectUri = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(
      scope.join(" ")
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="relative flex justify-center items-center h-screen w-screen overflow-hidden">
      <img
        src={music}
        alt="Login Background"
        className="h-full w-full object-cover"
      />
      <div className="absolute z-10 p-4 bg-opacity-50 bg-black w-[400px] h-[600px] flex flex-col items-center rounded-[20px]">
        <div className="mt-6 flex flex-col justify-center">
          <form>
            <div className="flex justify-center mt-2 mb-6">
              <img
                src={SpotifyLogo}
                alt="Spotify Logo"
                className="w-[300px] h-[85px]"
              />
            </div>
            <div className="w-full bg-green-500 flex justify-center mt-2 mb-4 rounded-[8px]">
              <Button onClick={handleLogin}>
                <img
                  src={spotifyIcon}
                  className="w-[25px] h-[25px] rounded-[50%] border-black border-[1px]"
                />
                <p className="bg-green-500 text-black px-4 text-[15px]">
                  Connect Spotify / Guest
                </p>
              </Button>
            </div>
            <FormControl sx={{ width: "36ch" }}>
              <OutlinedInput
                placeholder="Your Email"
                className="bg-white h-12"
              />
              <OutlinedInput
                placeholder="Your Password"
                className="bg-white mt-5 h-12"
              />
              <div className="mt-5">
                <LoadingButton
                  size="medium"
                  onClick={handleClick}
                  loading={loading}
                  variant="contained"
                  color={"warning"}
                  className="bg-black text-white hover:bg-gray-800 w-full py-2 rounded-md mt-5"
                >
                  {loading ? "Loading..." : "Login"}
                </LoadingButton>
              </div>
              <div>
                <hr className="text-white w-full h-4 mt-8 mb-8" />
              </div>
              <div className="flex justify-center items-center gap-4 flex-col">
                <div className="bg-white w-full text-center text-black rounded-[8px]">
                  <Button className="flex justify-center gap-2">
                    <img src={googleIcon} className="w-4 h-4" />
                    <p className="text-black">Google Login</p>
                  </Button>
                </div>
                <div className="bg-blue-400 w-full text-center text-white rounded-[8px]">
                  <Button className="flex justify-center gap-2">
                    <img src={facebookIcon} className="w-4 h-4" />
                    <p className="text-white">Facebook Login</p>
                  </Button>
                </div>
              </div>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
