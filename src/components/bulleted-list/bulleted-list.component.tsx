import { ReactNode } from "react";

import "./bulleted-list.styles.scss";

interface BulletedListProps {
  title: string;
  items: string[];
}

const BulletedList = ({ items, title }: BulletedListProps): ReactNode => {
  return (
    <section className="bulleted-list">
      <h3 className="bulleted-list__title">{title}</h3>
      <ul className="bulleted-list__items">
        {items.map((item: string) => (
          <li className="bulleted-list__item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BulletedList;
