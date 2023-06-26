import { useState } from "react";
import "./Form.scss";
import Contact from "../../assets/images/contact.png";
import Text from "../text/Text";
import InputMask from "react-input-mask";
import Icon from "../../assets/images/sended.png";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [sended, setSended] = useState(false);

  // State variables to handle validation errors
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validateEmail = (email: string) => {
    // Simple email validation pattern
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Validation logic
    setPhoneError(phone === "");
    setEmailError(!validateEmail(email));
    setMessageError(message === "");

    if (!phoneError && !emailError && !messageError && agreement) {
      setSended(true);
    }
  };

  return (
    <div className="contact" id="connect">
      <form className="form" onSubmit={handleSubmit}>
        <img src={Contact} alt="contact" className="contact-img" />
        <Text variant="h2">Форма с приветами</Text>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputMask
          mask="+374 (99) 99-99-99"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`form-input ${phoneError ? "error" : ""}`}
        />
        <input
          type="email"
          placeholder="Электронная почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`form-input ${emailError ? "error" : ""}`}
        />
        <textarea
          placeholder="Сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`form-input ${messageError ? "error" : ""}`}
        />
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
          />
          <label>Согласен с правилами обработки моих персональных данных</label>
        </div>
        {sended ? (
          <div className="sended">
            <img src={Icon} alt="sended" />
            <p>
              Письмо для активации аккаунта успешно отправлено на адрес
              электронной почты, который вы указали при регистрации.
            </p>
          </div>
        ) : null}
        <button
          type="submit"
          disabled={!phone || !email || !message || !agreement}
        >
          Отправить сообщение
        </button>
      </form>
    </div>
  );
};

export default Form;
