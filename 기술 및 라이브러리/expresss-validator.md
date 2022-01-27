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
  "/user",
  body("name").inLength({ min: 2, max: 10 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!rerror.isEmpty()) {
      res.status(400).json({ msg: errors.array() });
    }
    res.sendStatus(201);
  }
);
```

→

“name” : “E”, 요청 시

2글자이하이므로

```jsx
{
  msg: [
    {
      value: "E",
      msg: "Invalid value", //.withMessage('메세지 입력')으로 변경가능
      param: "name",
      location: "body",
    },
  ];
}
```

숫자, 아스키, 알파벳, 이메일, 빈값, 정규표현식 등 다양하게 사용가능

체이닝가능

```jsx
body("name")
  .notEnpty()
  .withMessage("이름을 입력해주세요")
  .isLength({ min: 2 })
  .withMessage("두글자 이상");
```

배열로 묶어도 가능

```jsx
[
body('name').notEnpty().withMessage('이름을 입력해주세요')
body('nick').isLength({ min: 2}).withMessage('두글자 이상')
]

//body -> param도 가능
//trim()을 사용하여 공백제거하기 -> 하지않으면 공백값도 포함됨
```

순서에 따라 통과할수도

```jsx
body("nick").trim().isLength({ min: 2 }).withMessage("두글자 이상");
body("nick").isLength({ min: 2 }).trim().withMessage("두글자 이상");
```

프로젝트에서는 미들웨어로 사용했다

유효성검사를 잘한다면 불필요한 비용을 줄일 수 있다.

다음 프로젝트때는 공식문서를 잘 참고하여 좀 더 효율성있게 만들어보자
