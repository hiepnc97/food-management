import { IContainer } from "@/types";
import "./Container.scss";

export default function Container({ children }: IContainer) {
  return <div className="container">{children}</div>;
}
