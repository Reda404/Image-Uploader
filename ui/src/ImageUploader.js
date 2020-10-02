import React, { useState } from 'react'
import './ImageUploader.css'
import dropImage from './img/drop-image.svg'

const ImageUploader = () => {
  const [isDragOver, setIsDragOver] = useState(false)

  const uploadFile = (e) => {
    console.log(e.target.value)
  }

  return (
    <form className="image-uploader">
      <h2 className="image-uploader-title">Upload your image</h2>
      <p className="image-uploader-primary-notice">
        File should be Jpeg, Png,...
      </p>
      <div
        className={`image-uploader-drop-area ${
          isDragOver ? 'drag-over' : null
        }`}
      >
        <img src={dropImage} alt="" />
        <p className="image-uploader-secondary-notice">
          Drag & drop your image here
        </p>
        <input
          id="file"
          className="image-uploader-input-file"
          type="file"
          accept="image/*"
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragOver(true)
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={() => setIsDragOver(false)}
          onChange={uploadFile}
        />
      </div>
      <p className="image-uploader-secondary-notice">Or</p>
      <label className="image-uploader-button" htmlFor="file">
        Choose a file
      </label>
    </form>
  )
}

export default ImageUploader
