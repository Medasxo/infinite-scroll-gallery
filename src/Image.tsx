import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface Props {
  url: string;
  id: string;
}

const Image: React.FC<Props> = ({ url, id }) => {
  const [imageIsLoaded, setImageIsLoaded] = React.useState<Boolean>(false);

  const handleImageLoaded = () => {
    setImageIsLoaded(true);
  };

  return (
    <div>
      {!imageIsLoaded && (
        <div className="bg-indigo-500 rounded-2xl object-cover w-full h-full"></div>
      )}
      <LazyLoadImage
        className={`rounded-2xl opacity-90 hover:opacity-100 object-cover w-full ${imageIsLoaded ? "h-full": "h-0"}`}
        src={url}
        key={id}
        alt=""
        onLoad={handleImageLoaded}
      />
    </div>
  );
};

export default Image;
