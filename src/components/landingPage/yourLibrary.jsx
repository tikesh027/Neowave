import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPlalist } from "../redux/slices/playlistSlice";

const YourLibrary = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const containerRef = useRef(null);

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
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const items = playlistData.data.items || [];
        const details = items
          .filter((item) => item && item.name && item.id && item.images)
          .map((item) => ({
            name: item.name,
            id: item.id,
            image: item.images,
          }));
        dispatch(setPlalist(details));
      } catch (error) {
        console.error("Error fetching playlist data:", error);
      }
    };
    getPlaylistData();
  }, [token, dispatch]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const isAtBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight;
      const isAtTop = container.scrollTop === 0;
      setScrollDirection(
        isAtBottom ? "up" : isAtTop ? "down" : scrollDirection
      );
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollDirection]);

  return (
    <div className="p-2 relative group">
      <div className="text-lg font-bold mb-4">Your Library</div>
      <div className="relative flex items-center">
        <div
          ref={containerRef}
          className="grid grid-cols-5 gap-4 overflow-y-auto h-[180px]"
        >
          {playlist.map((item) => (
            <div
              key={item.id}
              className="h-[70px] bg-purple-400 rounded-md flex items-center gap-6 my-1"
            >
              <img
                src={item.image[0].url}
                className="h-[70px] w-[70px] rounded-tl-md rounded-bl-md"
              />
              <h2 className="text-center text-white font-medium truncate">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
        <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 bg-gray-800 bg-opacity-50 text-white px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {scrollDirection === "down" ? "↓" : "↑"}
        </button>
      </div>
    </div>
  );
};

export default YourLibrary;
