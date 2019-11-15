import React, { useEffect, useState } from "react";
import axios from 'axios'



export default function LocationsList() {
  const [locations, addLocation] = useState([])

  useEffect(() => {
    
    axios.get('https://rickandmortyapi.com/api/location/')
    .then(response => {
      addLocation(response.data.results)
      console.log(response.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <section className="location-list">
        <div>
            {locations.map(location => (
                <div className='location' key={location.id}>
                    <h2>Name: {location.name}</h2>
                    <p>Type: {location.type}</p>
                    <p>Dimension: {location.dimension}</p>
                </div>
            ))}
        </div>
    </section>
  );
}

