import React, { useState } from "react";
import loginImage from "../images/loginImage.jpg";
import spotifyButton from "../images/spotifyButton.jpg";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import LoadingButton from "@mui/lab/LoadingButton";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="relative flex justify-center items-center h-screen w-screen overflow-hidden">
      <img
        src={loginImage}
        alt="Login Background"
        className="h-full w-full object-cover"
      />
      <div className="absolute z-10 p-4 bg-opacity-80 bg-slate-500 w-[400px] h-[600px] flex flex-col items-center rounded-[10px]">
        <div>
          <img
            src={spotifyButton}
            alt="Spotify Button"
            className="h-[150px] w-[450px]"
          />
        </div>
        <div className="mt-6 flex flex-col justify-center">
          <form>
            <FormControl sx={{ width: "36ch" }}>
              <OutlinedInput
                placeholder="Your Email"
                className="bg-white mt-5 h-12"
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
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
