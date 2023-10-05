// let socket: any;
// const socketInitializer = () => {
//   socket = new WebSocket("ws://localhost:8081/ws")
//   console.log(socket)
//   socket.onerror = (err:any) => console.error(err);
//   return socket.onopen = () => {
//     console.log(socket)
//     return socket;
//     // if(socket.readyState == 1) setConnected(true)
//   };
//   // socket.onmessage = (msg:any) => {
//   //   console.log(msg)
//   // };
//   // return socket;
// }

// export { socketInitializer, socket };