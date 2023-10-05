import React, { useEffect, useState } from 'react'
import { useWebSocket } from '../../context/websocket';
import "./style.css";

const Points = () => {
  const [points,  setPoints] = useState<any>(null);
  const socket:any = useWebSocket();
  useEffect(() => {
    if(socket && socket.readyState ==1 ){
      socket.onmessage=(msg:any)=>{
        setPoints(JSON.parse(msg.data))
      }
    }
  }, [socket])
  return (
    <div className='w-4/12'>
      <h4 className='text-center text-2xl'>Points</h4>
    {points && Object.entries(points).map(([_name,value]) => {
      return(
        <div key={_name} className='flex justify-around py-2'>
          <span className='pts-label'>{_name}</span>
          <span className='pts-value'>{String(value)}</span>
        </div>
      )
    })}
    </div>
  )
}

export default Points