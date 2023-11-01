import React, { useEffect, useState } from 'react'

const EarthTime = () => {
    const [earthTime, setEarthTime] = useState('');

    useEffect(() => {
        const fetchEarthTime = async () => {
            try{
                const response = await fetch('http://localhost:8080/clock/earth-clock', {method: "GET"});
                const data = await response.text();
                setEarthTime(data);
            } catch(error){
                console.error('Error fetching Earth Time: ', error);
            }
        };

        fetchEarthTime();
        
        const intervalId = setInterval(fetchEarthTime, 1000);
        return () => clearInterval(intervalId);

    }, []);

  return (
    <div>
        <h2 className="App-link">
        Earth Time
        </h2>

        <p>{earthTime}</p>
      
    </div>
  )
}

export default EarthTime
