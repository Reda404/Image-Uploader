import React, { useState, useRef } from 'react'
import axios from 'axios'
import './ImageUploader.css'
import dropImage from './img/drop-image.svg'
import checkIcon from './img/check-icon.svg'

const ImageUploader = () => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [imageUrl, setImageURL] = useState('')

  const inputLink = useRef(null)

  const copyLink = (e) => {
    e.preventDefault()
    inputLink.current.select()
    document.execCommand('copy')
  }

  const uploadFile = (e) => {
    const file = e.target.files[0]
    const apiUrl = process.env.REACT_APP_API_URL

    if (file !== undefined) {
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        if (file.size <= 1000000) {
          const form = new FormData()
          setIsUploading(true)
          form.append('file', file)
          axios.post(`${apiUrl}/api/image`, form, {}).then((res) => {
            setIsUploading(false)
            setIsUploaded(true)
            setImageURL(res.data.imageUrl)
          })
        } else {
          setErrorMessage('File too large')
          e.target.value = null
        }
      } else {
        setErrorMessage('Format not accepted')
        e.target.value = null
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

  if (isUploaded) {
    return (
      <form className="image-uploader">
        <img className="image-uploader-check-icon" src={checkIcon} alt="" />
        <h2 className="image-uploader-title">Uploaded Sucessfully!</h2>
        <img className="image-uploader-image" src={imageUrl} alt="" />
        <div className="image-uploader-link">
          <input
            className="image-uploader-link-input"
            ref={inputLink}
            type="text"
            value={imageUrl}
            readOnly
          />
          <button className="image-uploader-link-button" onClick={copyLink}>
            Copy Link
          </button>
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
