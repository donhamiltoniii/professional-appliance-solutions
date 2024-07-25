import HighendImage from "../../assets/images/Highend/6-26-19 Derrick Layer - Taggert 2.jpg";
import MultiFamilyImage from "../../assets/images/Multi Family/98657.jpeg";
import SingleFamilyImage from "../../assets/images/Single Family/52341.jpeg";
import { ServiceData } from "../types";

import Service from "../service/service.component";

const ServicesList = () => {
  const services: ServiceData[] = [
    {
      title: "Highend",
      img: HighendImage,
      content:
        "As Columbus’ premier appliance installation company, we pride ourselves on doing the jobs most other companies refuse or simply cannot do. Much of our work is kept in-house, minimizing the need for subcontractors, while simultaneously working with you or your contractor/builder. As a family owned and operated business, with decades of experience, we value each and every job we’re tasked with doing, and it’s our commitment to a high level of satisfaction that has kept us operating in the industry for so long. Our founder and CEO always says “You’re only as good as your last job”. It’s that motto that drives our employees to always ensure we do our best to serve the community.",
    },
    {
      title: "Single Family",
      img: SingleFamilyImage,
      content:
        "Our ability to work fast. efficient, and accurately separates us from other install services. By combining proprietary methods and industry standards we are able to accomplish several full house installs per day. Our capacity to work with situations that are not ideal or a “perfect scenario” allows us to adapt to a customer’s individual needs.",
    },
    {
      title: "Multi Family",
      img: MultiFamilyImage,
      content:
        "Professional Appliance Solutions set the standard for multi family installation in Ohio. We deliver and install hundreds of multi family appliances a week. Whether it’s new builds or remodels, our fluid ability to scale and adapt to a builder’s needs is second to none. First floor or dozens of floors of living units, we find a way to get the job done in a timely manner. We utilize any and every method possible to deliver into buildings: stairs, elevator, grad all/forklift, buck hoist, or even a crane. With a decade of experience in multi family across Ohio our track record speaks for itself.",
    },
  ];

  return (
    <div className="services-list">
      {services.map(({ content, img, title }: ServiceData, index) => (
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
