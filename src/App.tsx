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
  const [hasMore, setHasMore] = React.useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (): void => {
    const apiURL: string = "https://picsum.photos/v2/list";
    setPageNumber(pageNumber + 1);
    setTimeout(() => {
      axios
        .get(`${apiURL}?page=${pageNumber}&limit=30`)
        .then((res) => {
          console.log(res.data);
          setImages([...images, ...res.data]);
          if (res.data.length === 0) {
            setHasMore(false);
          }
        })
        .catch(() => {});
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gradient-to-tr dark:from-gray-700 dark:via-gray-900 dark:to-black h-full">
      <Header />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
        style={{ overflowY: "hidden"}}
      >
        <div className="grid grid-flow-row-dense grid-cols-3 gap-3 m-10" >
          {images.map((image) => (
              <Image url={image.download_url} id={image.id} author={image.author} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;
