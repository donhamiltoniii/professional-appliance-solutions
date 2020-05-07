import React from "react";

import "./service.styles.scss";

import Container from "../container/container.component";

interface ServiceProps {
  content: string;
  img: string;
  isEven: boolean;
  title: string;
}

const Service: React.FC<ServiceProps> = ({ content, img, isEven, title }) => (
  <div
    className="service"
    style={{
      backgroundColor: isEven ? "#143787" : "#3461c9",
    }}
  >
    <Container>
      <div
        className={`service__content${!isEven ? " service__content--odd" : ""}`}
      >
        <figure className="service__image-container">
          <img className="service__image" src={img} alt={`${title}`} />
        </figure>
        <section className="service__content-container">
          <h3 className="service__title">{title}</h3>
          <p className="service__content">{content}</p>
        </section>
      </div>
    </Container>
  </div>
);

export default Service;
