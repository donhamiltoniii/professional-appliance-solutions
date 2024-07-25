import { ReactNode } from "react";

import BulletedList from "../bulleted-list/bulleted-list.component";
import Container from "../container/container.component";

import "./category-details.styles.scss";

interface CategoryDetailsProps {
  categories: { name: string; items: string[] }[];
}

const CategoryDetails = ({ categories }: CategoryDetailsProps): ReactNode => {
  return (
    <section className="category-details">
      <Container>
        <h2 className="category-details__title">Category Details</h2>
        <div className="category-details__container">
          {categories.map(
            ({ name, items }: { name: string; items: string[] }) => (
              <BulletedList key={name} title={name} items={items} />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default CategoryDetails;
