import { useState } from "react";

const MessageInput = ({ onSend }) => {
    const [message, setMessage] = useState("")

    const sendMessage = async () => {
        if (message.trim() === "") {
            return;
        } else {
            await onSend(message);
            setMessage("");
        }
    }

    return (
        <div className="container d-flex mt-5">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
                className="form-control me-4"
            />
            <button onClick={sendMessage} className="btn btn-primary">Send Message</button>
        </div>
    )
}

export default MessageInput