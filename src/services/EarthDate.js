import React, { useEffect, useState } from 'react'

const EarthDate = () => {
    const [earthDate, setEarthDate] = useState('');

    useEffect(() => {
        const fetchEarthDate = async () => {
            try{
                const response = await fetch('http://localhost:8080/clock/earth-date', {method: "GET"});
                const data = await response.text();
                setEarthDate(data);
            } catch(error){
                console.error('Error fetching Earth Date: ', error);
            }
        };

        fetchEarthDate();
        
        const intervalId = setInterval(fetchEarthDate, 1000);
        return () => clearInterval(intervalId);

    }, []);

  return (
    <div>
        <h2 className="App-link">
        Earth Date
        </h2>

        <p>{earthDate}</p>
      
    </div>
  )
}

export default EarthDate
