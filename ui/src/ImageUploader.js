import React, { useState } from 'react'
import axios from 'axios'
import './ImageUploader.css'
import dropImage from './img/drop-image.svg'

const ImageUploader = () => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

  const uploadFile = (e) => {
    const file = e.target.files[0]

    if (file !== undefined) {
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        if (file.size <= 1000000) {
          const form = new FormData()
          setIsUploading(true)
          form.append('file', file)
          axios
            .post('http://localhost:3001/api/image', form, {})
            .then((res) => console.log(res))
        } else {
          setErrorMessage('File too large')
        }
      } else {
        setErrorMessage('Format not accepted')
      }
    }
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
        File must be Jpeg or Png up to 1mo
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
          accept="image/jpeg, image/png"
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
      {errorMessage ? (
        <p className="image-uploader-error-notice">{errorMessage}</p>
      ) : null}
    </form>
  )
}

export default ImageUploader
