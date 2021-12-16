import React from 'react';
import dynamic from 'next/dynamic';

const WhatsappChatBot = dynamic(
  () => import('../whatsapp-chat-bot'),
  { ssr: false }
)

const ChatBotComponent = () => (
  <>
    <WhatsappChatBot/>
  </>
);

export default ChatBotComponent;