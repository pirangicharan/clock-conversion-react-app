import React, { useEffect, useState } from 'react'

const AlienTime = () => {
    const [alienTime, setAlienTime] = useState('');

    useEffect(() => {
        const fetchAlienTime = async () => {
            try{
                const response = await fetch('http://localhost:8080/clock/alien-clock', {method: "GET"});
                const data = await response.text();
                setAlienTime(data);
            } catch(error){
                console.error('Error fetching Alien Time: ', error);
            }
        };

        fetchAlienTime();
        
        const intervalId = setInterval(fetchAlienTime, 1000);
        return () => clearInterval(intervalId);

    }, []);

  return (
    <div>
        <h2 className="App-link">
          Alien Time
        </h2>
        
        <p>{alienTime}</p>
      
    </div>
  )
}

export default AlienTime
