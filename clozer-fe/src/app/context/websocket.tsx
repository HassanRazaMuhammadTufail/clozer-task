import React, { useState, useEffect, createContext, useContext } from 'react';

const WebSocketContext = createContext(null);

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};

// export default WebSocketContext;

const WebSocketProvider = ({ children }: any) => {
  const [ws, setWs] = useState<any>(null)
  const socketInitializer = () => {
    let socket = new WebSocket("ws://localhost:8081/ws")
    // console.log(socket)
    socket.onerror = (err:any) => console.error(err);
    socket.onopen = () => {
      // console.log(socket)
      setWs(socket);
    };
    socket.onmessage=(obj:any)=>{};
  }

  useEffect(() => {
    socketInitializer()
  }, []);

  return (
    <WebSocketContext.Provider value={ws}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
