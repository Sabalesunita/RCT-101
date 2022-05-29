import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Timer = () => {
  const [timer,setTimer]= useState(10);

  useEffect(() =>{
    const id = setInterval(() => {
    // setTimer((prev) => prev-1);
    if(timer < 1){
      clearInterval(id);
    }
    else{
      setTimer(timer-1);
    }
    },1000);

    return () => {
      clearInterval(id);
    }
  },[timer]);
 
  return (
    <div>
          <h1>Timer</h1>
        Count down :{timer}
        </div>
  )
}

export default Timer;