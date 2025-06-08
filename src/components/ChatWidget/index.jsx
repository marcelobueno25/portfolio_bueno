import { useState } from "react";
import styled from "styled-components";
import { FaCommentDots, FaTimes } from "react-icons/fa";

const ToggleButton = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 320px;
  max-height: 420px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
`;

const ChatHeader = styled.div`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Messages = styled.div`
  flex: 1;
  padding: 0.75rem;
  overflow-y: auto;
`;

const Message = styled.div`
  max-width: 80%;
  margin-bottom: 0.5rem;
  align-self: ${({ from }) => (from === "user" ? "flex-end" : "flex-start")};
  background: ${({ from, theme }) =>
    from === "user" ? theme.colors.accent : theme.colors.muted};
  color: ${({ from, theme }) =>
    from === "user" ? theme.colors.black : theme.colors.textPrimary};
  padding: 0.4rem 0.6rem;
  border-radius: 12px;
`;

const Form = styled.form`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Input = styled.input`
  flex: 1;
  padding: 0.6rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: none;
  outline: none;
`;

const SendButton = styled.button`
  padding: 0 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { from: "bot", text: "pensando..." }]);
    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      if (!res.ok) throw new Error("bad response");
      const data = await res.json();
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { from: "bot", text: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { from: "bot", text: "Erro ao obter resposta." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open && (
        <ChatContainer>
          <ChatHeader>
            <span>Chat</span>
            <button onClick={toggleOpen} style={{ background: "none", border: "none", cursor: "pointer" }}>
              <FaTimes />
            </button>
          </ChatHeader>
          <Messages>
            {messages.map((msg, idx) => (
              <Message key={idx} from={msg.from}>
                {msg.text}
              </Message>
            ))}
          </Messages>
          <Form onSubmit={handleSubmit}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem"
            />
            <SendButton type="submit">Enviar</SendButton>
          </Form>
        </ChatContainer>
      )}
      {!open && (
        <ToggleButton onClick={toggleOpen}>
          <FaCommentDots />
        </ToggleButton>
      )}
    </>
  );
}
