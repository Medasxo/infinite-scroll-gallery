import React, { useEffect, useState } from "react";
import Header from "./Header";
import Image from "./Image";
import Loader from "./Loader";

import axios from "axios";

const App: React.FC = () => {
  const [images, setImages] = React.useState<
    Array<{
      id: string;
      author: string;
      width: number;
      height: number;
      url: string;
      download_url: string;
    }>
  >([]);
  const [pageNumber, setPageNumber] = React.useState<number>(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (): void => {
    const apiURL: string = "https://picsum.photos/v2/list";
    setPageNumber(pageNumber + 1);
    console.log(pageNumber);
    axios
      .get(`${apiURL}?page=${pageNumber}`)
      .then((res) => setImages(res.data));
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gradient-to-tr dark:from-gray-700 dark:via-gray-900 dark:to-black h-full">
      <Header />
      <div className="m-20 ml-80 mr-80 grid grid-flow-row grid-cols-3 gap-10">
        {images.map((image) => (
          <Image url={image.download_url} id={image.id} />
        ))}
      </div>
      <Loader />
    </div>
  );
};

export default App;
