import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface Props {
  url: string;
  id: string;
}

const Image: React.FC<Props> = ({ url, id }) => {
  return (
    <div>
      <LazyLoadImage className="rounded-2xl opacity-90 hover:opacity-100 object-cover w-full h-full" src={url} key={id} alt="" />
    </div>
  );
};

export default Image;
