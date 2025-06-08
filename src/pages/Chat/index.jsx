import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Messages = styled.div`
  margin-bottom: 1rem;
`;

export default function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: data.reply }]);
    setInput('');
  };

  return (
    <Container>
      <Messages>
        {messages.map((m, idx) => (
          <p key={idx}>
            <strong>{m.sender}:</strong> {m.text}
          </p>
        ))}
      </Messages>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Enviar</button>
    </Container>
  );
}
