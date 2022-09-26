import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  url: string;
  author: string;
}

const Image: React.FC<Props> = ({ url, author }) => {
  const [imageIsLoaded, setImageIsLoaded] = React.useState<Boolean>(false);
  const [imageIsClicked, setImageIsClicked] = React.useState<Boolean>(false);

  const handleImageLoaded = (): void => {
    setImageIsLoaded(true);
  };

  const handleImageClick = (): void => {
    if (imageIsClicked === false) {
      setImageIsClicked(true);
    } else {
      setImageIsClicked(false);
    }
  };

  return (
    <div>
      {!imageIsLoaded && (
        <div className="animate-pulse bg-indigo-500 rounded-2xl object-cover w-full h-full"></div>
      )}
      <div
        className={`relative rounded-2xl object-cover w-full 
        ${imageIsLoaded ? "h-full" : "h-0"}`}
      >
        <LazyLoadImage
          className={`opacity-90 rounded-2xl hover:opacity-100 ${
            imageIsClicked ? "blur-sm" : "blur-none"
          } hover:opacity-100 object-cover w-full 
        ${
          imageIsLoaded ? "h-full" : "h-0"
        } align-middle active:border-indigo-500 active:border-4 shadow-md shadow-indigo-500 `}
          src={url}
          alt=""
          onLoad={handleImageLoaded}
          onClick={handleImageClick}
        />
        {imageIsClicked && (
          <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center font-righteous text-indigo-400 text-xl">
            Author
            <div className="text-stone-50 ">{author}</div>
          </h1>
        )}
      </div>
    </div>
  );
};

export default Image;
