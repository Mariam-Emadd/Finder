/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./MyInsertedPhoto.css";
import insert_icon from './insert.png' 
import homeless from '../homeless.jpg'
const MyInsertedPhoto = () => {
  const [image, setImage] = useState('');
  const [processedImage, setProcessedImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    console.log(event.target.files);
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch("/process-image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Image processing failed");
      }

      const processedImageUrl = await response.json();
      setProcessedImage(processedImageUrl);
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Image processing failed. Please try again.");
    }
  };

  // const downloadImage = () => {
  //   const link = document.createElement("a");
  //   link.href = processedImage;
  //   link.download = "processed_image.jpg";
  //   link.click();
  // };

  return (
    <div>
      <div>
        <img src={homeless} alt="." className="homeless" />
        <div class="centered">Centered</div>
      </div>
      <div className="upload">
        <img
          src={insert_icon}
          alt="insert photo"
          style={{ width: "80px", textAlign: "center" }}
        />
        <br />
        <br />
        <button
          onClick={uploadImage}
          className="  rounded-2"
          style={{ width: "20%" }}
        >
          <i className="fa fa-upload"> </i> Upload Image
          <input type="file" onChange={handleImageChange} />
        </button>
        <hr style={{ color: "white" }} />

        {/* {processedImage && (
        <div id="resultContainer">
          <img src={processedImage} alt="Processed Image" />
          <button
            onClick={downloadImage}
            className="btn submit w-100 rounded-2"
          >
            Download Processed Image
          </button>
        </div>
      )} */}
      </div>
    </div>
  );
};

export default MyInsertedPhoto;
