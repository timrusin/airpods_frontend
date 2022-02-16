import React, { useState, useEffect } from "react";
import SpotifySearch from "./Components/PodcastComponents/SpotifySearch";
import RandomPodcasts from "./Components/PodcastComponents/RandomPodcasts";
import axios from "axios";
import './Home.css'

const Home = () => {
  const [podcasts, setPodcasts] = useState();

  useEffect(() => {
    // axiosInstance.get("podcasts").then((res) => {
    //   setPodcasts(res.data);
    // });
    axios.get('http://localhost:8000/podcasts', 
    {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
    .then((res)=>{
      setPodcasts(res.data);
    })
  },[])

  if (!podcasts)
    return (
      <div className="sign-up-prompt">
        <h5 className="unauthorized">
          {" "}
          Please <a href="/signin">Sign In</a> to View This Page
        </h5>
        <h6 className="unauthorized">
          {" "}
          Don't have an account? <a href="/signup">Sign Up</a>
        </h6>
      </div>
    );

  return (
    <>
        <SpotifySearch/>
        <br/>
        <p></p>
        <RandomPodcasts/>
        </>
  );
};

export default Home;