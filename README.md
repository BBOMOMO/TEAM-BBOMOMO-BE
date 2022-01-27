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

<h1>
<details>
<summary>서비스 아키텍쳐</summary>
<div markdown="1">


![뽀모모아키텍쳐v2](https://user-images.githubusercontent.com/85975904/151278794-c81d778e-31d5-4b89-af24-7a44b4b322d2.png)


</div>
</details>
</h1>

<br>

<h1>
<details>
<summary>API 명세서</summary>
<div markdown="1">

![auth](https://user-images.githubusercontent.com/87928719/151182062-10082d50-771c-4835-992a-be3f1c5d034e.PNG)
![users](https://user-images.githubusercontent.com/87928719/151182046-13c8f50a-da55-4e85-b68f-e0ee2ed242d6.png)
![studyRoom](https://user-images.githubusercontent.com/87928719/151182076-8896433d-2e7e-45e1-9c45-24e4ca46761d.png)
![post](https://user-images.githubusercontent.com/87928719/151182093-e3c120e9-cc38-4eb6-a706-4068b04534fb.png)

</div>
</details>
</h1>

<br>

# ![Group 3477](https://user-images.githubusercontent.com/63698668/151095490-9e2b3688-9f9f-4e93-9165-97b8423fef78.png) 트러블 슈팅, 느낀점

## 희경
 > 개인 공부시간을 제공하는 코드를 클린하게 작성하지 못했다. 현재는 09시를 기준으로 공부시간 DB에서 createdAt 컬럼을 참고해 해당 일자의 랭킹을 표시해주고 있다. 24를 기준으로 공부시간이 바뀌지 않고 09시 까지는 전날의 공부시간을 보내줘야 하기때문에 함수가 필요했고 코드가 복잡해졌다. 이를 개선할 방법으로 두 가지를 생각해 보았다. 
 > 1. 노드 스케쥴러, 크론 등을 사용한다. 테이블에 "오늘 공부 시간" 칼럼을 추가하고, 09시마다 초기화하도록 한다. 이 경우 함수의 사용없이 "오늘 공부 시간" 데이터만 보내주면 된다. 
 > 2. DB의 createdAt 데이터 저장 양식을 변경, 꺼내오는 과정을 간소화 한다. 다만 이경우에도 createdAt이 생성되는 과정에 데이터를 가공하는 함수가 필요하지만 좀 더 간소화 할 수 있을것으로 기대한다.
## 상협
 - 너무 고민 하지말자. 안될 것 같다, 가능할까?라고 생각하지말고 한줄이라도 입력하면 무언가라도 만들 수 있다라는 걸 배울 수 있는 프로젝트였습니다.
 - 실수한 부분이 있다면 인정하고 배우자.
 - 모르는 것을 부끄러워하지말자. 서로부족한 부분을 채우면서 공부 할 수 있어 좋았습니다.
 - 소통의 중요성을 느낄 수 있었습니다.
 - 편하게 사용했던 서비스들의 데이터통신, 이렇게 만든 이유, 소셜로그인과정 등 눈에 보이지 않던 것들이 눈에 보이기 시작했습니다.
 - 지금 편하려고 만든 코드는 언젠가 나를 불편하게한다를 배웠습니다.
 - 항상 왜? 라고 생각하여 목표와 방향성을 찾아가자.
 - 다들 감사합니다. 열심히 하겠습니다.
## 재원

<details>
<summary>프로젝트 회고</summary>
<div markdown="1">

- 6주라는 꽤 긴 기간이 주어지다보니 프로젝트의 규모를 키우고 싶었다. 

- 프로젝트 규모가 커지는 만큼 서비스 기획, API 명세, 서비스 아키텍쳐 등등 준비 과정이 굉장히 길었다. 코드를 작성하기 전에 이미 기력을 모두 소모한 것같은 느낌을 받을 정도 였다. 

- 문제는 긴 회의로 인해 지치다보니 한 번 작성해놓은 문서는 잘 수정되지 않았던 것이다. 아무리 꼼꼼하게 설계를 했어도 수정사항이 생기기 마련인데 소통의 부재가 발생한 것이다. 그렇게 Fe와 Be가 문서로만 소통하다보니 중간 결과물을 확인했을 때 수정사항이 몰아치면서 악순환이 계속 되었다.

- 이를 해결하기 위해 우리 조는 서로의 실수를 줄이고 전체적인 프로젝트를 이해하기 위한 방법이 없을까 찾아보던 중에 애자일 방법론의 데일리 스크럼 방식을 발견하게 되었는데 

- 불확실성이 높은 서비스를 개발하거나 업데이트와 조율을 귀찮아 할 경우 도입하면 효과적이라는 것을 보고 한 번 시작해 보기로 했다.

- 매일 오전 10시에 15분 정도의 공통 회의 시간을 갖고 서로 작업 상황을 공유하며 오늘 할 작업과 수정 사항을 매일매일 공유하는 방식으로 규칙을 정했다. 아침에 일어나는 것이 굉장히 힘들었지만 모든 팀원이 참가해서 회의를 하고 대화를 나눴다. 
즉각적인 피드백으로 빠르게 서비스의 방향을 학습할 수 있었고 무의식적으로 서로 협동심도 생기는 것 같았다.

- 아직 유지/보수 및 추가할 기능들이 남아 있지만 MVP 서비스로의 런칭은 선공적으로 마무리 되었다. 

- 이 프로젝트를 런칭하고 느낀점은 사람은 결국 말을 통해 소통하고 의사결정을 하고 서로의 의견을 묻기 때문에 짧지만 잦은 대화가 일의 효율성을 높여준다는 것이다.

</div>
</details>



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
