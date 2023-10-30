import React, { useEffect, useState } from "react";
import storage from "../../firebase";
import { getDownloadURL, ref, listAll, list } from "firebase/storage";

const fireStorage = storage;
const gsReference = ref(
  fireStorage,
  "gs://image-iploader-a08c8.appspot.com/image"
);

const LucyPage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    listAll(gsReference)
      .then((res) => {
        const downloadPromise = res.items.map((item) => getDownloadURL(item));
        Promise.all(downloadPromise).then((urls) => {
          setImages(urls);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // getDownloadURL(gsReference)
  //   .then((url) => {
  //     setImage(url);
  //   })
  //   .catch((err) => console.log(err));

  return (
    <>
      {images.map((imgUrl, index) => (
        <img key={index} src={imgUrl} alt={`Image ${index}`} />
      ))}
    </>
  );
};

export default LucyPage;
