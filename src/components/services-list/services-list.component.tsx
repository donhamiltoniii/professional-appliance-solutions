import React from "react";

import Service from "../service/service.component";

const ServicesList = () => {
  const services = [
    { title: "Highend", img: "", content: "" },
    { title: "Single Family", img: "", content: "" },
    { title: "Multi Family", img: "", content: "" },
  ];
  return (
    <div className="services-list">
      {services.map(({ content, img, title }, index) => (
        <Service
          content={content}
          img={img}
          isEven={index % 2 === 0}
          key={index}
          title={title}
        />
      ))}
    </div>
  );
};

export default ServicesList;
