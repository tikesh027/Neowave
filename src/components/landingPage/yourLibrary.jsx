import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPlalist } from "../redux/slices/playlistSlice";

const YourLibrary = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist.playlist);

  useEffect(() => {
    const getPlaylistData = async () => {
      try {
        const playlistData = await axios.get(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        const items = playlistData.data.items || [];

        const details = items
          .filter((item) => item && item.name && item.id)
          .map((item) => ({
            name: item.name,
            id: item.id,
          }));

        console.log(details);
        dispatch(setPlalist(details));
      } catch (error) {
        console.error("Error fetching playlist data:", error);
      }
    };

    getPlaylistData();
  }, [token, dispatch]);

  return (
    <div>
      <div>Your PlayList</div>
      <div className="flex">
        {playlist.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourLibrary;
