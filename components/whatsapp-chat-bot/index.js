import React from 'react';

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const WhatsappChatBotComponent = () => (   
    <WhatsAppWidget 
        position="left"
        phoneNo='XXXXXXXXXX'
        iconColor="white"
		iconBgColor="rgb(79, 206, 93)"
    />
);
  
export default WhatsappChatBotComponent;