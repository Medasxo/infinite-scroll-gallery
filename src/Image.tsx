import React from "react";

interface Props {
  url: string;
  id: string;
}

const Image: React.FC<Props> = ({ url, id }) => {
  return (
    <div>
      <img className="rounded-2xl opacity-90 hover:opacity-100 object-cover w-full h-full" src={url} key={id} alt=""></img>
    </div>
  );
};

export default Image;
