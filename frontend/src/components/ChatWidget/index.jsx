import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaRobot, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ToggleButton = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.5rem;
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
  background: ${({ theme }) => theme.colors.muted};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const Messages = styled.div`
  flex: 1;
  padding: 0.75rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Message = styled.div`
  max-width: 80%;
  margin-bottom: 0.5rem;
  align-self: ${({ from }) => (from === "user" ? "flex-end" : "flex-start")};
  background: ${({ from, theme }) =>
    from === "user" ? theme.colors.accent : theme.colors.muted};
  color: ${({ from, theme }) =>
    from === "user" ? theme.colors.muted : theme.colors.textPrimary};
  padding: 0.4rem 0.6rem;
  border-radius: ${({ from }) =>
    from === "user" ? "12px 12px 0 12px" : "12px 12px 12px 0"};
`;

const Form = styled.form`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Input = styled.textarea`
  flex: 1;
  padding: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: none;
  outline: none;
  resize: none;
  overflow-y: auto;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SendButton = styled.button`
  padding: 0 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export default function ChatWidget() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messages.length === 1 && messages[0].from === "bot") {
      setMessages([{ from: "bot", text: t("chat_presentation") }]);
    }
  }, [i18n.language]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const API_URL =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_URL
      : "https://portfolio-backend-nu-brown.vercel.app";

  const toggleOpen = () => {
    setOpen((prev) => {
      const abrir = !prev;
      if (abrir && messages.length === 0) {
        setMessages([
          {
            from: "bot",
            text: t("chat_presentation"),
          },
        ]);
      }
      return abrir;
    });
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }

    setLoading(true);
    setMessages((prev) => [...prev, { from: "bot", text: "..." }]);

    try {
      const res = await fetch(`${API_URL}/api/chat.js`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          throw new Error(
            "Você está enviando muitas mensagens. Tente novamente em breve."
          );
        }
        throw new Error(data.error || "Erro inesperado");
      }

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { from: "bot", text: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { from: "bot", text: err.message || "Erro ao obter resposta." },
      ]);
    } finally {
      setLoading(false); // 🔥 ESSENCIAL PARA REATIVAR O INPUT
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      {open && (
        <ChatContainer>
          <ChatHeader>
            <span>AI Marcelo</span>
            <button
              onClick={toggleOpen}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <FaTimes />
            </button>
          </ChatHeader>
          <Messages>
            {messages.map((msg, idx) => (
              <Message key={idx} from={msg.from}>
                {msg.text}
              </Message>
            ))}
            <div ref={messagesEndRef} />
          </Messages>
          <Form onSubmit={handleSubmit}>
            <Input
              ref={inputRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem"
              rows={1}
              disabled={loading}
            />

            <SendButton type="submit" disabled={loading}>
              Enviar
            </SendButton>
          </Form>
        </ChatContainer>
      )}
      {!open && (
        <ToggleButton onClick={toggleOpen}>
          <FaRobot />
        </ToggleButton>
      )}
    </>
  );
}
