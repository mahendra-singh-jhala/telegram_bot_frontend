import { useState } from "react";
import axios from "axios";
import MessageInput from "./components/MessageInput";
import MessageResponse from "./components/MessageResponse"
import './App.css';

function App() {
    const [response, setResponse] = useState("");

    const handleMessage = async (message) => {
        try {
            const res = await axios.post("https://telegram-bot-shl4.onrender.com/webhook", {
                message: {
                    chat: { id: 1305898321 },
                    text: message
                },
            })
            setResponse(res.data);
        } catch (error) {
            setResponse("Error sending message");
        }
    }

    return (
        <div className="container-fluid bg-primary-subtle p-4 text-center" style={{ height: "100vh" }}>
            <h1 >Telegram Bot (chatter_flow_bot) </h1>
            <MessageInput onSend={handleMessage} />
            <MessageResponse response={response} />
        </div>
    );
}

export default App;


