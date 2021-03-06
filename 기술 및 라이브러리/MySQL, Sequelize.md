## 🐬 MySQL과 Sequelize
---

#### 1. MySQL이란

     대표적인 관계형 데이터베이스. Structured Query Language를 사용해 데이터를 추가하고, 읽고, 수정하고, 삭제할 수 있습니다.


##### 1-1. MySQL을 사용한 이유

> 유저DB모델은 닉네임과 프로필 이미지를 가집니다. 이때 관계형데이터 베이스는 아래와 같은 상황에서 비관계형 데이터 베이스 보다 효율적으로 데이터를 관리합니다.
> - 유저가 게시물과 댓글을 작성한 후 닉네임 또는 프로필 이미지를 변경.
> - 공부시간 랭킹에 올라간 유저가 닉네임을 변경.
> 
> 관계형 데이터 베이스는 User 테이블을 한번 수정해주면 이를 참조하는 게시물, 댓글, 랭킹페이지에 유저정보 변경사항이 반영된다는 장점이 있습니다.
반면 비관계형 데이터 베이스는 유저의 게시물마다 닉네임과 프로필 이미지를 수정해야하는 비효율이 발생합니다. 또한 게시물마다 프로필 이미지와 닉네임이 중복 저장되는 단점이 있습니다.
<br>


#### 2. Sequelize란

      자바스크립트 객체와 데이터베에스의 관계를 맵핑해주는 도구. MariaDB, MSSQL등과 호환이 가능합니다다. 
     시퀄라이즈를 사용하면 자바스크립트 구문을 SQL로 바꿔줍니다.

##### 2-1. Sequelize를 사용한 이유

> 자바스크립트로 DB를 다룰 수 있다는 점에서 직관적입니다. 또한 재사용성 및 유지보수의 편의성을 고려했습니다. 다만 raw query에 비해 검색 성능이 떨어질 수 있습니다.
