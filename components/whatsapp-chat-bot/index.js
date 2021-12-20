import React from 'react';

import i18next from 'i18next';
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const WhatsappChatBotComponent = () => {
    const t = i18next.t.bind(i18next);
    return ( 
        <WhatsAppWidget
            position="left"
            phoneNo='919646579412'
            iconColor="white"
            iconBgColor="rgb(79, 206, 93)"
            messageBox={true}
            messageBoxTxt={t('wtsappMsgBoxTxt')}
        />
    );
}
  
export default WhatsappChatBotComponent;