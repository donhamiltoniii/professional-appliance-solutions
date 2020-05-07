import React from "react";

import "./bulleted-list.styles.scss";

interface BulletedListProps {
  title: string;
  items: string[];
}

const BulletedList: React.FC<BulletedListProps> = ({ items, title }) => {
  return (
    <section className="bulleted-list">
      <h3 className="bulleted-list__title">{title}</h3>
      <ul className="bulleted-list__items">
        {items.map((item: string) => (
          <li className="bulleted-list__item">{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default BulletedList;
