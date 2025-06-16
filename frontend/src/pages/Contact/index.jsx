import styled, { useTheme } from "styled-components";
import Container from "@/components/Container";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Title } from "@/components/Title";
import { useTranslation } from "react-i18next";

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
  color: ${({ theme }) => theme.colors.primary};
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
    border-color: ${({ theme }) => theme.colors.primary};
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
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
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
  const theme = useTheme(); // <- acessa darkTheme ou lightTheme
  const { t } = useTranslation();

  // 👇 Envia o formulário para o EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Pega o token do reCAPTCHA
    const token = captchaRef.current.getValue();

    if (!token) {
      setStatus(t("captcha_required"));
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
          setStatus(t("msg_success"));
          form.current.reset();
          captchaRef.current.reset(); // limpa o reCAPTCHA
        },
        () => {
          setStatus(t("msg_error"));
        }
      );
  };

  return (
    <Section>
      <Header>
        <Title>{t("contact_title")}</Title>
      </Header>
      <Grid>
        <InfoColumn>
          <ContactGroup>
            <strong>{t("contact_heading")}</strong>
            <p
              style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#888" }}
            >
              {t("contact_intro")}
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
          <Label>{t("name")}</Label>
          <Input
            type="text"
            name="from_name"
            required
            placeholder={t("your_name")}
          />
          <Label>E-mail</Label>
          <Input
            type="email"
            name="from_email"
            required
            placeholder={t("your_email")}
          />
          <Label>{t("message")}</Label>
          <TextArea name="message" required placeholder={t("your_message")} />
          <Button type="submit">{t("send_message")}</Button>
          <ReCAPTCHA
            key={theme.name}
            ref={captchaRef}
            sitekey={RECAPTCHA_KEY}
            theme={theme.name === "dark" ? "dark" : "light"} // <- aqui troca
            style={{ marginTop: "1rem" }}
          />
          {status && (
            <p style={{ marginTop: "1rem", color: "#777" }}>{status}</p>
          )}
        </FormColumn>
      </Grid>
    </Section>
  );
}
