import "./Footer.scss";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer flex flex-col">
      <div className="flex flex-justify-between">
        <div>
          <h4 className="footer__text--title">Санкт-Петербург</h4>
          <p className="footer__text">Большой Проспект П. С., 5, 55</p>
        </div>
        <div>
          <h4 className="footer__text--title">mail@yandex.ru</h4>
          <p className="footer__text">+7 (981) 131-64-98</p>
        </div>
        <HashLink to="#connect">
          <button className="footer__button">Написать нам</button>
        </HashLink>
      </div>
      <div className="flex flex-justify-between">
        <div className="flex">
          <HashLink to="#text">
            <p className="footer__text--bold">Текстовые блоки</p>
          </HashLink>
          <HashLink to="#gallery">
            <p className="footer__text--bold">Галерея</p>
          </HashLink>
          <HashLink to="#connect">
            <p className="footer__text--bold">Форма</p>
          </HashLink>
        </div>
        <p className="footer__text--small">© 2009-2020 Vasya.inc</p>
      </div>
    </div>
  );
};

export default Footer;
