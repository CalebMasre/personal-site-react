import { useState } from "react";
import "./chat.css";
import Login from "./login";
import Chatroom from "./chatroom";

function Chat() {
    const [user, setUser] = useState();
  
    if (!user) {
      return <Login onAuth={(user) => setUser(user)} />;
    } else {
      return <Chatroom user={user} />;
    }
  }
  
  export default Chat;