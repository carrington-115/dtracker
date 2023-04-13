import { storage } from "../../Firebase/Firebase.config";
import { uploadString, ref, getDownloadURL } from "firebase/storage";

/*
  This function will be used to send the image to the backend
  with the firebase storage API, we will be able to send this data
  to the store using the reference of the location of the database

  1. Title: Structure of the database
  images|
         track|
              userEmail|
                      generatedID

  2. Depencies of the function
  - reference
  - user email
*/

export const sendImageToStore = async (email, baseUrl, id) => {
  let fileReference = ref(storage, `image/track/${email}/${id}`);
  await uploadString(fileReference, baseUrl, "data_url");
  try {
    console.log("uploaded a data_url");
  } catch (error) {
    console.log(error.message);
  }
  let imgUrl;
  getDownloadURL(fileReference).then((url) => {
    imgUrl = url;
  });
  return imgUrl;
};
