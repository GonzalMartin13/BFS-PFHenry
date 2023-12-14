
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from '../ChatBot/config.jsx';
import MessageParser from '../ChatBot/MessageParser.jsx';
import ActionProvider from '../ChatBot/ActionProvider.jsx';
import '../ChatBot/stylesBot.css'
import style from '../ChatBot/chatBot.module.css'


const Chat = () => {

  return (
    <div className={style.chat}>
  
        <Chatbot
        key="uniqueKey"
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText='Escribe aqui ...'
      />

    </div>
  );
};

export default Chat;
