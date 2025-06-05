import styled from "styled-components";
import Container from "@/components/Container";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Section = styled(Container)`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 2rem;
`;

const InfoColumn = styled.div`
  flex: 1;
  min-width: 300px;
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
`;

const Icon = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
`;

const FormColumn = styled.form`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Input = styled.input`
  background: transparent;
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
  background: transparent;
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
  color: #0a0a0a;
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
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cd6q1k4", // <- coloque o seu
        "template_9w79x1t", // <- coloque o seu
        form.current,
        "uhd6Zw0pJ7IhYKYPG" // <- coloque o seu
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Ocorreu um erro. Tente novamente.");
        }
      );
  };
  return (
    <Section id="contato">
      <InfoColumn>
        <Title>Contato</Title>

        <ContactGroup>
          <strong>Entre em contato</strong>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#888" }}>
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
        </ContactGroup>
      </InfoColumn>

      <FormColumn ref={form} onSubmit={sendEmail}>
        <Label>Nome</Label>
        <Input type="text" name="from_name" required />
        <Label>E-mail</Label>
        <Input type="email" name="from_email" required />
        <Label>Mensagem</Label>
        <TextArea name="message" required />
        <Button type="submit">Enviar mensagem</Button>
        {status && <p style={{ marginTop: "1rem", color: "#0f0" }}>{status}</p>}
      </FormColumn>
    </Section>
  );
}
