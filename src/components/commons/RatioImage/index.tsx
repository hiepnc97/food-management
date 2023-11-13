import { useEffect, useState } from "react";
import "./AspectRatioComponent.scss";
import { GiftIcon } from "@/components/icons/IconGift";

interface IProps {
  width?: number;
  height?: number;
  src: string;
  promotion: string | null | undefined;
  className?: string;
}

const AspectRatioComponent = ({
  width = 1,
  height = 1,
  src,
  promotion,
  className,
}: IProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pillColor, setPillColor] = useState("blue");
  const [promotionComponent, setPromotionComponent] =
    useState<React.ReactNode | null>(null);

  useEffect(() => {
    switch (promotion) {
      case "gift":
        setPillColor("blue");
        setPromotionComponent(<GiftIcon data-testid="gift-icon" />);
        break;
      case "discount":
        setPillColor("pink");
        setPromotionComponent(<span data-testid="discount-pill">%</span>);
        break;
      case "1+1":
        setPillColor("purple");
        setPromotionComponent(<span data-testid="11-pill">1+1</span>);
        break;
      default:
        setPromotionComponent(null);
    }
  }, [promotion]);

  return (
    <div
      className={`aspect-ratio-container ${className}`}
      style={{ paddingTop: `${(height / width) * 100}%` }}
      data-testid="aspect-ratio-container"
    >
      <img
        className="aspect-ratio-container__content"
        src={src}
        alt="food image"
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded && promotion && (
        <div
          className={`aspect-ratio-container__pill ${pillColor}`}
          data-testid="aspect-ratio-pill"
        >
          {promotionComponent}
        </div>
      )}
      {!isLoaded && (
        <div
          className="aspect-ratio-container__lazy skeleton-loading"
          data-testid="aspect-ratio-container__lazy"
        ></div>
      )}
    </div>
  );
};

export default AspectRatioComponent;
