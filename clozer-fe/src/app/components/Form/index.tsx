import React, { useState } from 'react'
import { useWebSocket } from '../../context/websocket';
import "./style.css";

const Form = () => {
  const socket:any = useWebSocket();
  const [val, setVal] = useState<number>(0);
  const [name, setName] = useState<string>("test");
  const onChange = (e: any) => {
    setVal(e.target.value)
  }

  const onChangeName = (e: any) => {
    setName(e.target.value)
  }

  const submit = () => {
    socket.send(JSON.stringify({name, value: Number(val)}))
  }
  return (
    <div className='w-4/12'>
      <div className='input-wrapper'>
      <span className='custom-label'>Name : </span>
      <input value={name} name="name" onChange={onChangeName} type="text" className='my-2.5 custom-input' />
      </div>
      <div className='input-wrapper'>
      <span className='custom-label'>Pts : </span>
      <input value={val} name="points" onChange={onChange} type="number" className='my-2.5 custom-input' />
      </div>
      <button onClick={submit} className='block custom-button'>submit</button>
    </div>
  )
}

export default Form