import React, { useState } from "react";
import axios from "axios";
import SpotifyCards from "./SpotifyCards";
import "./SpotifySearch.css";

const SpotifySearch = () => {
  const [searchKey, setSearchKey] = useState("");
  const [shows, setShows] = useState([]);
  const initialPlaceholder = "Podcast Name";
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);

  const getAPIToken = async () => {
    let encodedToken =
      "Mjk3Zjk5YjUwMjVhNGEwZGE2ODkwZDI3NmZlOWNmNzc6NTE5MTUwNDZjZDM1NGNkYjg0OTI4NjA0ZmUwNDBlOTI";

    let url = "https://accounts.spotify.com/api/token";
    let authOptions = {
      headers: {
        Authorization: "Basic " + encodedToken,
      },
      form: {
        grant_type: "client_credentials",
      },
      json: true,
    };
    const { data } = await axios.post(
      url,
      "grant_type=client_credentials",
      authOptions
    );
    return data.access_token;
  };

  const searchShows = async (e) => {
    e.preventDefault();
    const token = await getAPIToken();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params: {
        q: searchKey,
        type: "show",
        market: "US",
      },
    });
    setShows(data.shows.items);
    setPlaceholder(initialPlaceholder);
  };
  const renderShows = () => {
    return (
      <>
        {shows.map((show) => {
          return <SpotifyCards key={show.id} {...show} />;
        })}
      </>
    );
  };

  return (
    <div className="search-form">
      <form className="search-background" onSubmit={searchShows}>
        <input
          className="search-input"
          type="text"
          placeholder={placeholder}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className="search-button" type={"submit"}>
          Search
        </button>

        <input
          className="search-button"
          type={"reset"}
          value="Clear"
          onClick={(e) => {
            setSearchKey("");
            setShows([]);
          }}
        />
      </form>
      {searchKey && (
        <>
          <h4 className="search-results">search: {searchKey}</h4>
        </>
      )}
      {renderShows()}
    </div>
  );
};
export default SpotifySearch;
