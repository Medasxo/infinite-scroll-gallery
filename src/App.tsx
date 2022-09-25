import React, { useEffect } from "react";
import Header from "./Header";
import Image from "./Image";
import Loader from "./Loader";


import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

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
    console.log(pageNumber);
    setPageNumber(pageNumber + 1);
    setTimeout(() => {
    axios
      .get(`${apiURL}?page=${pageNumber}&limit=30`)
      .then((res) => {
        setImages([...images, ...res.data]
        )});
        }, 1000);
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gradient-to-tr dark:from-gray-700 dark:via-gray-900 dark:to-black h-full">
      <Header />
      <InfiniteScroll 
      dataLength={images.length}
      next={fetchData}
      hasMore={true}
      loader={<Loader />}
      style={{ overflowY: 'hidden' }}>
        <div className="m-20 ml-80 mr-80 grid grid-flow-row grid-cols-3 gap-10">
        {images.map((image) => (
          <Image url={image.download_url} id={image.id} />
        ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;

/*
<InfiniteScroll
      dataLength={images.length}
      next={fetchData}
      hasMore={true}
      loader={<Loader />}>
      <div className="m-20 ml-80 mr-80 grid grid-flow-row grid-cols-3 gap-10">
        {images.map((image) => (
          <Image url={image.download_url} id={image.id} />
        ))}
      </div>
      </InfiniteScroll>
*/