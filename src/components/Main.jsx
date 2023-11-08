import React, { useState } from "react";
import "./Main.css";
import individual from "../assets/images/individual.jpg";
import d7 from "../assets/images/d7.jpg";
import d14 from "../assets/images/d14.jpg";
import d30 from "../assets/images/d30.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  const arrowClassName = isOpen ? "rotate-arrow" : "";

  return (
    <div className="faq">
      <div className="question" onClick={toggleAnswer}>
        <h3>
          {question}
          <RiArrowDropDownLine size={24} className={arrowClassName} />
        </h3>
      </div>
      <div className="answer" style={{ display: isOpen ? "block" : "none" }}>
        {answer.split("\n").map((line, index) => (
          <p key={index}>
            {line.includes("<a href=") ? (
              <span dangerouslySetInnerHTML={{ __html: line }} />
            ) : (
              line
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

const Main = () => {
  const faqItems = [
    {
      question: "Каков риск бана?",
      answer:
        "При покупке чита вы должны понимать, что риск банов в данной игре достаточно высокий, баны могут случаться. Просьба это учитывать при покупке. В следствии блокировки вашего аккаунта возврат средств невозможен.",
    },
    {
      question: "Какие компоненты необходимы для работы чита?",
      answer: `<a href="https://www.java.com/ru/download/">Java</a>\n<a href="https://aka.ms/vs/17/release/vc_redist.x64.exe">VC Redist</a>`,
    },
  ];
  return (
    <div className="main">
      <h2>Функционал</h2>
      <div className="functional">
        <p>
          Jaw hook - сбалансированный приватный чит Warface, идеальное
          соотношение трезвой цены и хорошего качества! Наш чит обеспечивают
          100% легит, без бана, самый дешевый и безопасный. . Читы можно
          настроить полностью под себя, в них присутствуют все необходимые и
          проработанные функции для любого стиля игры пвп и пве.
        </p>
        <ul>
          <h3>Доступные функции</h3>
          <li>AutoShot</li>
          <li>Silent Aim</li>
          <li>Bone</li>
          <li>Wallhack</li>
        </ul>
      </div>
      <h2>Продукты</h2>
      <div className="products">
        <div className="product">
          <img src={individual} alt="" /> <h3>Индивидуальный чит</h3>
          <p className="coast">1500 ₽ </p>
          <a
            target="blank"
            href="https://vk.com/jawhook?w=product-222865671_8412009%2Fquery"
          >
            Купить
          </a>
        </div>
        <div className="product">
          <img src={d7} alt="" /> <h3>JAW HOOK PVP - 7 Day</h3>
          <p className="coast">400 ₽ </p>
          <a
            target="blank"
            href="https://vk.com/jawhook?w=product-222865671_8411994%2Fquery"
          >
            Купить
          </a>
        </div>
        <div className="product">
          <img src={d14} alt="" /> <h3>JAW HOOK PVP - 14 Day</h3>
          <p className="coast">800 ₽ </p>
          <a
            target="blank"
            href="https://vk.com/jawhook?w=product-222865671_8411998%2Fquery"
          >
            Купить
          </a>
        </div>
        <div className="product">
          <img src={d30} alt="" /> <h3>JAW HOOK PVP - 30 Day</h3>
          <p className="coast">1200 ₽ </p>
          <a
            target="blank"
            href="https://vk.com/market-222865671?screen=group&w=product-222865671_8412003%2Fquery"
          >
            Купить
          </a>
        </div>
      </div>
      <h2>FAQ</h2>
      {faqItems.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
      <h2>Контакты</h2>
      <div className="contacts">
        <div className="contacts-social">
          <h3>Социальные сети</h3>
          <a target="blank" href="https://vk.com/jawhook">
            группа VK
          </a>
          <a target="blank" href="https://t.me/jawhook">
            группа Telegram
          </a>
        </div>
        <div className="contacts-devs">
          <h3>Разработчики</h3>
          <a target="blank" href="https://t.me/LiL_dexi">
            d3x7
          </a>
          <a target="blank" href="https://vk.com/seryozhaboychenko">
            zxcерега
          </a>
          <a target="blank" href="https://t.me/gonedone228">
            nn dolbaeb
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
