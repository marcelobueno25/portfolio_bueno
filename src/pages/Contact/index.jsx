import styled from "styled-components";
import Container from "@/components/Container";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_KEY = "6LewxlYrAAAAAOw1jUdKc0JdPum2qrEGR9keWMXr"; // vinda do site do Google

const Section = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoColumn = styled.div`
  flex: 1;
  width: 100%;
`;

const ContactGroup = styled.div`
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0.6rem 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  word-break: break-all;
`;

const Icon = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
`;

const FormColumn = styled.form`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Input = styled.input`
  background: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const TextArea = styled.textarea`
  background: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 6px;
  outline: none;
  resize: vertical;
  min-height: 120px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.muted};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export default function Contact() {
  const form = useRef();
  const captchaRef = useRef();
  const [status, setStatus] = useState("");

  // 👇 Envia o formulário para o EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Pega o token do reCAPTCHA
    const token = captchaRef.current.getValue();

    if (!token) {
      setStatus("❗ Por favor, confirme que você não é um robô.");
      return;
    }

    // Envia o formulário usando EmailJS
    emailjs
      .sendForm(
        "service_cd6q1k4", // <- coloque o seu
        "template_9w79x1t", // <- coloque o seu
        form.current,
        "uhd6Zw0pJ7IhYKYPG" // <- coloque o seu
      )
      .then(
        () => {
          setStatus("✅ Mensagem enviada com sucesso!");
          form.current.reset();
          captchaRef.current.reset(); // limpa o reCAPTCHA
        },
        () => {
          setStatus("❌ Ocorreu um erro. Tente novamente.");
        }
      );
  };

  return (
    <Section>
      <Header>
        <Title>Contato</Title>
      </Header>
      <Grid>
        <InfoColumn>
          <ContactGroup>
            <strong>Entre em contato</strong>
            <p
              style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#888" }}
            >
              Me mande um e-mail, mensagem ou me chame nas redes sociais.
            </p>
          </ContactGroup>

          <ContactGroup>
            <ContactItem>
              <Icon>
                <FaEnvelope />
              </Icon>
              <span>marcelobueno_developer@outlook.com</span>
            </ContactItem>
            <ContactItem>
              <Icon>
                <FaWhatsapp />
              </Icon>
              <span>+55 (11) 94042-5798</span>
            </ContactItem>
            <ContactItem>
              <Icon>
                <FaMapMarkerAlt />
              </Icon>
              <span>Osasco - SP</span>
            </ContactItem>

            <ContactItem>
              <ReCAPTCHA
                ref={captchaRef}
                sitekey={RECAPTCHA_KEY}
                theme="dark" // ou "light" se quiser claro
                style={{ marginTop: "1rem" }}
              />
            </ContactItem>
          </ContactGroup>
        </InfoColumn>

        <FormColumn ref={form} onSubmit={sendEmail}>
          <Label>Nome</Label>
          <Input type="text" name="from_name" required placeholder="Seu nome" />
          <Label>E-mail</Label>
          <Input
            type="email"
            name="from_email"
            required
            placeholder="Seu e-mail"
          />
          <Label>Mensagem</Label>
          <TextArea name="message" required placeholder="Sua mensagem" />
          <Button type="submit">Enviar mensagem</Button>
          {status && (
            <p style={{ marginTop: "1rem", color: "#0f0" }}>{status}</p>
          )}
        </FormColumn>
      </Grid>
    </Section>
  );
}
