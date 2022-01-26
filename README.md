# ![Group 3474](https://user-images.githubusercontent.com/63698668/151095484-0d54cb7c-b35a-4f4f-947a-ce50e45489fa.png) 서비스 설명 리드미 보러가기

[메인 ReadMe.md](https://github.com/BBOMOMO) 를 먼저 참고 해주세요

<br>

# ![Group 3475](https://user-images.githubusercontent.com/63698668/151095485-db07f9d7-a895-4a60-85f1-d214a0ee8b15.png) 팀원 소개

|   이름   |                        깃허브 주소                         | 포지션 |
| :------: | :--------------------------------------------------------: | :----: |
| 김희경🔰 |   [https://github.com/gimgit](https://github.com/gimgit)   | 백엔드 |
|  이상협  |     [https://github.com/23hh](https://github.com/23hh)     | 백엔드 |
|  길재원  | [https://github.com/kiljw316](https://github.com/kiljw316) | 백엔드 |

<br>

# :hammer: 기술 스택

|  이름   |       설명       |
| :-----: | :--------------: |
| AWS EC2 |  서버 인스턴스   |
| Node.js |   JS 실행 환경   |
| Express | nodeJS Framework |
|  mySQL  |  데이터 베이스   |
|   git   |    버전 관리     |

<br><br>

# :book: 라이브러리

|       name        |            Appliance             | version  |
| :---------------: | :------------------------------: | :------: |
|     sequelize     |         데이터베이스 ORM         |  6.13.0  |
|       cors        |          cors 정책 설정          |  2.8.5   |
|      dotenv       |          환경변수 설정           |  10.0.0  |
|      multer       |        이미지 데이터 처리        |  1.4.4   |
|     multer-S3     |         사진 파일 업로드         |  2.10.0  |
|      aws-sdk      |             S3 접근              | 2.1048.0 |
|     socket.io     |        웹소켓 라이브러리         |  4.4.0   |
| express-validator |      인증 정보 유효성 검사       |  6.14.0  |
|   jsonwebtoken    | Json 포맷으로 사용자 속성을 저장 |  8.5.1   |
|      bcrypt       |         비밀번호 해쉬화          |  5.0.1   |
|     passport      |         소셜 로그인 구현         |  0.5.2   |

<br>

# ![Group 3477](https://user-images.githubusercontent.com/63698668/151095490-9e2b3688-9f9f-4e93-9165-97b8423fef78.png) 트러블 슈팅, 느낀점

## 희경님

## 상협님

## 재원

<br>

# ![Group 3478](https://user-images.githubusercontent.com/63698668/151095492-35f5e6d7-1854-4175-8b94-d5e19ac19c65.png) 설치 가이드

아래 지시사항을 통해 프로젝트를 실행하실 수 있습니다.

## 필수 구성 요소

- Node.js
- MySQL

## 설치

1. 프로젝트 클론

```console
$ git clone https://github.com/BBOMOMO/TEAM-BBOMOMO-BE.git
```

2. 패키지 설치

```console
$ cd backend
$ npm install
```

3. 환경 변수 설정  



```text
// backend 폴더 안에 .env 파일 생성 후 아래 내용 기입

MYSQL_PW=db 비밀번호
MYSQL_HOST=db 호스트명
SECRET_KEY=JWT 시크릿키
SECRET_SALT=비밀번호 암호화 솔트 키

// S3와 oauth 옵션, 로컬로 구동 시 꼭 설정할 필요 x

AWSAccessKeyId=AWS S3 키ID
AWSSecretKey=AWS S3 시크릿키
AWSRegion=AWS S3 리전
KAKAO_ID=kakao api 키
GOOGLE_ID=google api 키
GOOGLE_SECRET=google api 시크릿 키
```

## Backend API 서버 실행

```console
$ cd backend
$ node server.js
```
