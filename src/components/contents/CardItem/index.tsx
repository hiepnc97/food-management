import { ICardItemProps } from "@/types";
import "./CardItem.scss";

export default function CardItem({ data }: ICardItemProps) {
  return (
    <div className="card-item">
      <img className="card-item__image" src={data.imageUrl} alt="food image" />
      <div className="card-item__content">
        <p className="card-item__content__title">{data.name}</p>
        <div className="card-item__content__tags">
          <div className="tag">Tag 1</div>
        </div>
      </div>
    </div>
  );
}
