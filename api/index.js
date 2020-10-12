require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { Storage } = require('@google-cloud/storage')
const multer = require('multer')
const app = express()

app.use(cors())

const storage = new Storage({
  credentials: {
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.CLIENT_EMAIL,
  },
})

const bucket = storage.bucket(process.env.BUCKET_URL)

const uploader = multer({
  storage: multer.memoryStorage(),
  limits: {
    files: 1,
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true)
    } else {
      cb(new Error('Format not accepted'), false)
    }
  },
}).single('file')

app.post('/api/image', (req, res) => {
  uploader(req, res, (err) => {
    const file = req.file

    if (err) {
      res.status(500).send({ error: err.message })
    } else {
      const fileName = `${file.originalname}-${Date.now()}`

      const blob = bucket.file(fileName)

      const blobWriter = blob.createWriteStream({
        metadata: {
          contentType: file.mimetype,
        },
      })

      blobWriter.on('error', (err) => {
        res.status(500).send({ error: err.message })
      })

      blobWriter.on('finish', () => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURI(blob.name)}?alt=media`

        res.status(200).send({ imageUrl })
      })

      blobWriter.end(file.buffer)
    }
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
