import { FormEvent, useState } from "react";
import CategoryDetails from "./components/category-details/category-details.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import HeroImage from "./components/hero-image/hero-image.component";
import ServicesList from "./components/services-list/services-list.component";

import "./App.scss";
import { Modal } from "./components/modal";

function App() {
  const categories = [
    {
      name: "High End and Single Family",
      items: [
        "Site inspections",
        "in-home consultation",
        "Uninstall/haul away",
        "Minor cabinet, countertop, electrical, and plumbing modifications",
        "Home vent hood specialists (Wall, Island, Pop-up with internal, in-line, or exterior motors)",
        "Custom panel installation specialists",
        "Product left in an end user ready condition: unboxed/uncrated, all trash removed, all connections made, leveled, tested, installed per code, house restored to it’s normal condition",
        "Delivery/Install windows are done in a 4 hour time frame of arrival (8a-noon, 10a-2p, noon-4p) please note jobs might exceed that time frame for completion due to situations/conditions out of our control",
        "4 hour time frames can be requested, but are not guaranteed. They are based on a first-come-first-served basis and if there is a route in the area that day",
        "Contract pricing available",
      ],
    },
    {
      name: "Multi Family",
      items: [
        "Delivery and Installation",
        "10 or more units installed in a day, depending on conditions",
        "Product left in an end user ready condition: unboxed/uncrated, all trash removed, all connections made, leveled, tested, installed per code",
        "Contract pricing available",
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);

    console.log({ data });
  };

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      {/* <Modal isOpen={isOpen} hasCloseBtn onClose={closeModal}>
        <p>wtf?</p>
      </Modal> */}
      <Header openModal={openModal} />
      <HeroImage />
      <ServicesList />
      <CategoryDetails categories={categories} />
      <Footer />
    </>
  );
}

export default App;
