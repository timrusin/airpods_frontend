import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import axios from "axios";

const SearchCard = (props) => {
    const { id, name, category, image_url } = props
    
   
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/playlists`, {name: name, category: category, image_url: image_url, id: id})
    }

    return(
        <div>
        <Card>
            <CardBody>
                <CardTitle tag = "h5">
                    Podcast Title: {name}
                 </CardTitle>
                 <CardText>
                    Category: {category}
                </CardText>
                <CardText>
                    <img src= {image_url} alt = "podcast"/>
                </CardText>
                <Button onClick={handleSubmit}
                    color="primary"
                    >
                    THIS IS A POST ROUTE Y'ALL
                </Button>
            </CardBody>
        </Card>
        </div>
        
    )
}

export default SearchCard;