import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface Props {
  url: string;
  id: string;
  author: string;
}

const Image: React.FC<Props> = ({ url, id, author }) => {
  const [imageIsLoaded, setImageIsLoaded] = React.useState<Boolean>(false);
  const [imageIsClicked, setImageIsClicked] = React.useState<Boolean>(false);

  const handleImageLoaded = () => {
    setImageIsLoaded(true);
  };

  const handleImageClick = () => {
    if (imageIsClicked === false) {
      setImageIsClicked(true);
    } else {
      setImageIsClicked(false);
    }
  };

  return (
    <div>
      {!imageIsLoaded && (
        <div className="bg-indigo-500 rounded-2xl object-cover w-full h-full"></div>
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
          key={id}
          alt=""
          onLoad={handleImageLoaded}
          onClick={handleImageClick}
        />
        {imageIsClicked && (
          <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center font-righteous text-white drop-shadow-md shadow-indigo-500">
            Author
            <p>{author}</p>
          </h1>
        )}
      </div>
    </div>
  );
};

export default Image;
