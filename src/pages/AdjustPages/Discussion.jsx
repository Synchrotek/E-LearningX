import React from 'react'
import './Discussion.css'
import Navbar from '../../components/Navbar';

const Discussion = () => {
    return (<>
        <Navbar />
        <div class="container">
            <div class="chat">
                <div class="chat-header">
                    <h2>Real-Time Discussion</h2>
                </div>
                <div class="chat-messages" id="chat-messages">
                    <p>For more details, connect with us on <a href="https://chat.whatsapp.com/FphdnblumZS3A8FgeeEXjg">WhatsApp</a>
                        or join our <a href="https://discord.gg/JACzmmJR">Discord server</a>.</p>
                </div>
                <div class="chat-input">
                    <input type="text" id="message-input" placeholder="Type your message" />
                    <button id="send-button">Send</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Discussion