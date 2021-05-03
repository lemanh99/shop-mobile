import React from "react";
import "./category.css";

import { useSelector } from "react-redux";
import { generatePublicUrl } from "../../../urlConfig";

const Category = () => {
  const categories = useSelector((state) => state.category);
  return (
    <div>
      <div class="categories-wrapper">
        {categories.listCategory.map((category) => (
          <div
            className="store-categories-list__item"
            data-test-id="l0-category"
          >
            <div className="category-image">
              <div className="img-loader__wrapper__wrapper">
                <div className="img-loader__wrapper">
                  <img
                    className="img-loader__img img-loader__img--shown "
                    alt="Category"
                    src={
                      category.categoryImage
                        ? generatePublicUrl(category.categoryImage)
                        : "/images/phone.png"
                    }
                  />
                  <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden img-loader__placeholder--category-card" />
                </div>
              </div>
            </div>
            <div className="category-name">
              <div className="category-name__discount"></div>
              <div className="category-name__name">{category.name}</div>
            </div>
            <div className="category-icon">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
