import React from 'react';
import ReactDOM from 'react-dom';

function Mailbox(props) {
  const messages = props.messages;
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Helló!</h1>
      {messages.length > 0 &&
        <h2>
          {messages.length} üzeneted van.
        </h2>
      }
      {unreadMessages.length > 0 &&
        <h2>
          Ebből {unreadMessages.length} olvasatlan üzenet.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
const unreadMessages = ['Re:Re: React'];
ReactDOM.render(
  <Mailbox messages={messages} unreadMessages={unreadMessages} />,
  document.getElementById('root')
);