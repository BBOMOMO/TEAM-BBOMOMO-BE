## multer

**Multer**는 파일 업로드를 위해 사용되는 multipart/form-data 를 다루기 위한 node.js 의 미들웨어 입니다

```jsx
// AWS S3 사용하기 위한 config
AWS.config.update({
  accessKeyId: process.env.AWSAccessKeyId, //aws액세스키
  secretAccessKey: process.env.AWSSecretKey, //aws시크릿키
  region: process.env.AWSRegion, //설정지역
});

// multer를 사용하여 이미지를 업로드하는 미들웨어
const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "lsh-s3-bucket",
    key(req, file, cb) {
      cb(null, `bbomomo/${+new Date()}${path.basename(file.originalname)}`);
      console.log("multer", multer);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// filePath:res.req.file.path 어디에 파일이 저장되있는지 path(위치)를 가져올수있다.
// fileName: 저장된 파일의 이름을 가져올 수 있다.
```

라우터

```jsx
router.post("/", authorization, upload.single("file"), postCtl.postArticle);
```

`upload.single('file')` 미들웨어를 라우터 콜백함수 전에 끼워넣었는데요. 폼데이터의 속성명이 file이거나 폼 태그 인풋의 name이 file인 파일 **하나**를 받겠다는 뜻입니다. 이미지가 아닌 나머지 데이터는 그대로 `req.body`에 들어옵니다.

폼데이터나 폼 태그를 통해 업로드한 이미지를 올리면 req.file로 정보가 들어옵니다

```jsx
console.log("file", req.file);
```

![multer.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f53cee9a-cbb6-4d7d-8e32-7891ae06bd3a/multer.png)
