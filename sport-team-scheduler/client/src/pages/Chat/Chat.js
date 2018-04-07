import React from "react";
import "./Chat.css";
import SideBar from "../../components/SideBar";
import { Messages } from "../../components/Messages";


const Chat = () =>
  <div className="chatBoard">
    <SideBar />
    <Messages />
  </div>;
export default Chat;  