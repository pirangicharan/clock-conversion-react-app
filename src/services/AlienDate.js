import React, { useEffect, useState } from 'react'

const AlienDate = () => {
    const [alienDate, setAlienDate] = useState('');

    useEffect(() => {
        const fetchAlienDate = async () => {
            try{
                const response = await fetch('http://localhost:8080/clock/alien-date', {method: "GET"});
                const data = await response.text();
                setAlienDate(data);
            } catch(error){
                console.error('Error fetching Alien Date: ', error);
            }
        };

        fetchAlienDate();
        
        const intervalId = setInterval(fetchAlienDate, 1000);
        return () => clearInterval(intervalId);

    }, []);

  return (
    <div>
        <h2 className="App-link">
          Alien Date
        </h2>

        <p>{alienDate}</p>
      
    </div>
  )
}

export default AlienDate
