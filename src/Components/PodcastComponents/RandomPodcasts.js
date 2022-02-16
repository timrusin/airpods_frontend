import React, {useEffect, useState} from "react";
import axios from 'axios';
import SpotifyCards from './SpotifyCards'
import './SpotifySearch.css'


const RandomPodcasts = () => {
    const [shows, setShows] = useState([])

    const getAPIToken = async () => {

    let encodedToken = "Mjk3Zjk5YjUwMjVhNGEwZGE2ODkwZDI3NmZlOWNmNzc6NTE5MTUwNDZjZDM1NGNkYjg0OTI4NjA0ZmUwNDBlOTI"

    console.log(encodedToken)
    let url = 'https://accounts.spotify.com/api/token'
    let authOptions = {
        headers: {
        'Authorization': 'Basic ' + encodedToken
        },
        form: {
            grant_type: 'client_credentials'
            },
            json: true
        };
        const {data} = await axios.post(url, 'grant_type=client_credentials', authOptions);
        console.log(data)
        return data.access_token
    }

    const renderRandoShows = () => {
    return(
            <>
            {shows.map((show) => {
                return( 
                    <SpotifyCards key={show.id} {...show}/>
                )
            })}
            </>
        )
    }
    
    useEffect(() => {
        const randos = async () => {
            // e.preventDefault()
            console.log("searchShows")
            const randomNum = Math.floor((Math.random() * 20) + 1)
            const randomOffset = randomNum.toString()
            const token = await getAPIToken()
            console.log(token)
            const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            params: {
                q: "%25a%25",
                type: "show",
                market: "US",
                include_external: "audio",
                limit: "50",
                offset: randomOffset,
            },
            });
            console.log(data.shows.items)
            setShows(data.shows.items)
        }
    
        randos()
    }, [])

    if (shows.length > 0) {
    
        return (
            <div>
                <h5 className="random">Enter A New Search Or Browse These Random Podcasts!</h5>
                {/* <hr/> */}
                {renderRandoShows()}
            </div>
        );
    } else {
        return (
            <>
                <h5>No Podcasts Available</h5>
            </>
        )

    }
}
export default RandomPodcasts;