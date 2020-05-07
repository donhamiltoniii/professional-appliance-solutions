import React from "react";

import BulletedList from "../bulleted-list/bulleted-list.component";
import Container from "../container/container.component";

import "./category-details.styles.scss";

interface CategoryDetailsProps {
  categories: { category: string; items: string[] }[];
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ categories }) => {
  return (
    <section className="category-details">
      <Container>
        <h2 className="category-details__title">Category Details</h2>
        <div className="category-details__container">
          {categories.map((category: { category: string; items: string[] }) => (
            <BulletedList title={category.category} items={category.items} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryDetails;
