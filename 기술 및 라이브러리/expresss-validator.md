## expresss-validator

라이브러리가 없다면...

```jsx
app.post('/user', (req, res, next)=>{
if(req.body.email..) {
 //정규표현식이나 유효성검사
	res.status(400).send({msg: 틀린 이메일입니다})
else if()...

}
res.sendStatus(201);
});
```

expresss-validator 사용

```jsx
app.post(
  "/post",
  body("nick").inLength({ min: 5, max: 10 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!rerror.isEmpty()) {
      res.status(400).json({ msg: errors.msg });
    }
    res.sendStatus(201);
  }
);
```

→

“nick” : “h”, 요청 시

5글자이하이므로

```jsx
{
  msg: [
    {
      msg: "Invalid value"
    },
  ];
}
```

```jsx
body("nick")
  .notEnpty()
  .withMessage("닉네임을 입력해주세요")
  .isLength({ min: 2 })
  .withMessage("두글자 이상");
```

//trim()을 사용하여 공백제거하기


프로젝트에서는 미들웨어로 사용했다

유효성검사를 잘한다면 불필요한 비용을 줄일 수 있다.

다음 프로젝트때는 공식문서를 잘 참고하여 좀 더 효율성있게 만들어보자
