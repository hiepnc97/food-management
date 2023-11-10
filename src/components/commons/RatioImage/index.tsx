import { useState } from "react";
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
  const [pillColor, setPillColor] = useState('blue');

  const ImagePill = () => {

    switch (promotion) {
      case "gift":
        setPillColor('blue');
        return <GiftIcon />;
      case "discount":
        setPillColor('pink');
        return <span>%</span>;
      case "1+1":
        setPillColor('purple');
        return <span>1+1</span>;
      default:
        return null;
    }
  }
  

  return (
    <div
      className={`aspect-ratio-container ${className}`}
      style={{ paddingTop: `${(height / width) * 100}%` }}
    >
      <img
        className="aspect-ratio-container__content"
        src={src}
        alt="food image"
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded && promotion && <div className={`aspect-ratio-container__pill ${pillColor}`}><ImagePill /></div>}
      {!isLoaded && <div className="aspect-ratio-container__lazy skeleton-loading"></div>}
    </div>
  );
};

export default AspectRatioComponent;
