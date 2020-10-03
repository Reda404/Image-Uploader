import React, { useState } from 'react'
import './ImageUploader.css'
import dropImage from './img/drop-image.svg'

const ImageUploader = () => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const uploadFile = (e) => {
    console.log(e.target.value)
    setIsUploading(true)
  }

  if (isUploading) {
    return (
      <form className="image-uploader">
        <h2 className="image-uploader-title align-left">Uploading..</h2>
        <div className="image-uploader-loading-bar">
          <div className="image-uploader-loading-slider"></div>
        </div>
      </form>
    )
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
