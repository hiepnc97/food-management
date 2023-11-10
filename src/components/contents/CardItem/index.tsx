import { ICardItemProps } from "@/types";
import "./CardItem.scss";
import AspectRatioComponent from "@/components/commons/RatioImage";
import { StarIcon } from "@/components/icons/IconStar";
import { roundUpDecimal } from "@/utils/helper";

export default function CardItem({ data }: ICardItemProps) {
  return (
    <div className="card-item">
      <AspectRatioComponent
        className="card-item__image"
        src={data.imageUrl}
        promotion={data.promotion}
        width={3}
        height={2}
      />
      <div className="card-item__content">
        <p className="card-item__content__title">{data.name}</p>
        <div className="card-item__content__tags">
          <div className="tag">
            <StarIcon /> {roundUpDecimal(data.rating)}
          </div>
          <div className="tag">
            {data.minCookTime}-{data.maxCookTime} min
          </div>
          {data.isNew && (
            <div className="tag">
              <span className="tag__new">New</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
