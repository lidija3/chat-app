import Messages from './Messages';
import Input from './Input';
import Header from './Header';
import { useEffect } from 'react';
import { useState } from 'react';

const Chat = ({name}) => {
    
  const [drone, setDrone] = useState();
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({
    username: name,
    color: getRandomColor(),
  });

  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

  useEffect(() => {
    const drone = new window.Scaledrone("Qq7xOdnH3ZGcDcTt", {
      data: user,
    });
    setDrone(drone);
  }, [])

  useEffect(() => {
    if(drone) {
      const room = drone.subscribe("observable-room");

      drone.on('open', error => {

        if(error) {
          return console.error(error);
        }

        setUser({...user, id: drone.clientId})

        room.on('data', (data, member) => {
          setMessages((oldArray) => [...oldArray, {member, text: data}])
        });
      });
    }
  }, [drone])

  useEffect(() => {
    console.log('messages', messages);
  }, [messages])

  const onSendMessage = (message) => {
      if(message) {
        drone.publish({
          room: "observable-room",
          message
        });
      }
    }

  return (

    <>
      <Header />

      <Messages
          messages={messages}
          currentMember={user}
      />

      <Input
          onSendMessage={onSendMessage}
      />
    </>
  )
}

export default Chat;