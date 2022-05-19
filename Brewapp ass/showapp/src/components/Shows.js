import React, { useEffect, useState } from 'react'
import Show from './Show';
import axios from "axios"

const Shows = () => {
    const [shows, setShows] = useState();

    const sendRequest = async() =>{
    const res = await axios.get("http://localhost:5001/api/show").catch(err => console.log(err));
    const data = await res.data;
    return data;
    }
    useEffect(() =>{
        sendRequest().then(data => setShows(data.shows));
    },[]);
    console.log(shows);
  return (
        <>
            {shows && shows.map((show, index) =>(
                <Show 
                 id={show._id}
                 title={show.title}
                 description={show.description}
                 imageURL={show.image}
                 category={show.category}
             />
            ))}
            
        </>
  )
}

export default Shows
