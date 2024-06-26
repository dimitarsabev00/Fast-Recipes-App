import { Link } from "react-router-dom";
import "./styles.scss";
import { Category } from "../../Types";

type CategoryListProps = {
  categories: Category[];
};
const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="section-wrapper bg-whitesmoke">
      <div className="container">
        <div className="sc-title">categories</div>
        <section className="sc-category grid">
          {categories.map((category: Category) => {
            const {
              idCategory: id,
              strCategory: title,
              strCategoryThumb: thumbnail,
            } = category;

            return (
              <Link
                to={`/meal/category/${title}`}
                className="category-itm align-center justify-center"
                key={id}
              >
                <div className="flex align-center justify-center">
                  <img src={thumbnail} alt={title} />
                  <div className="category-itm-title bg-orange">
                    <h3 className="text-white fs-11 fw-6 ls-1 text-uppercase">
                      {title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default CategoryList;
