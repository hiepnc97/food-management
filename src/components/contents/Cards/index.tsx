import CardItem from "../CardItem";
import "./Cards.scss";
import { DEFAULT_ITEMS, useFoodsManageContext } from "@/contexts/FoodsManageContext";

export default function Cards() {
  const { foods, isShowMore, visibleItems, setVisibleItems } =
    useFoodsManageContext();

  return (
    <>
      <div className="product-list cards-wrapper">
        {foods &&
          foods.map((food) => {
            return <CardItem data={food} key={food.id} />;
          })}
      </div>
      <div className="cards-action">
        {isShowMore && (
          <button
            className="show-more-button"
            onClick={() => setVisibleItems(visibleItems + DEFAULT_ITEMS)}
          >
            + Show More
          </button>
        )}
      </div>
    </>
  );
}
