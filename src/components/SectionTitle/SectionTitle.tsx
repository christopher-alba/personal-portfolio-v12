import { FC } from "react";
import "./sectionTitle.css";

const SectionTitle: FC<{ title: string; number: number }> = ({
  title,
  number,
}) => {
  return (
    <h1 className="section-title-h1">
      <span className="section-title-span">#{number}:</span>
      {title}.
    </h1>
  );
};

export default SectionTitle;
