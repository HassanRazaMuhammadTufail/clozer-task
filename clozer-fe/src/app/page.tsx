"use client";

import { useEffect, useState } from 'react';
import Points from './components/Points';
import WebSocketContext from './context/websocket';
import WebSocketProvider from './context/websocket';
import Form from './components/Form';

let socket:any;
const Home = () => {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h2 className='text-4xl pt-2.5'>Giveaways</h2>
      <WebSocketProvider>
        <div className="flex justify-around w-full items-center" style={{height:"80vh"}}>
        <Form />
        <Points />
        </div>
      </WebSocketProvider>
    </main>
  )
}

export default Home;