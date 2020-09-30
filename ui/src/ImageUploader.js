import React from 'react'
import './ImageUploader.css'
import dropImage from './img/drop-image.svg'

const ImageUploader = () => {
  const handleFile = (e) => {
    console.log(e.target.value)
  }

  return (
    <form className="image-uploader">
      <h2 className="image-uploader-title">Upload your image</h2>
      <p className="image-uploader-primary-notice">
        File should be Jpeg, Png,...
      </p>
      <div className="image-uploader-drop-area">
        <img src={dropImage} alt="" />
        <p className="image-uploader-secondary-notice">
          Drag & drop your image here
        </p>
      </div>
      <p className="image-uploader-secondary-notice">Or</p>
      <label className="image-uploader-button" htmlFor="file">
        Choose a file
      </label>
      <input
        id="file"
        className="image-uploader-input-file"
        type="file"
        accept="image/*"
        onChange={handleFile}
      />
    </form>
  )
}

export default ImageUploader
