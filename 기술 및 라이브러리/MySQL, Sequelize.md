## ๐ฌ MySQL๊ณผ Sequelize
---

#### 1. MySQL์ด๋

     ๋ํ์ ์ธ ๊ด๊ณํ ๋ฐ์ดํฐ๋ฒ ์ด์ค. Structured Query Language๋ฅผ ์ฌ์ฉํด ๋ฐ์ดํฐ๋ฅผ ์ถ๊ฐํ๊ณ , ์ฝ๊ณ , ์์ ํ๊ณ , ์ญ์ ํ  ์ ์์ต๋๋ค.


##### 1-1. MySQL์ ์ฌ์ฉํ ์ด์ 

> ์ ์ DB๋ชจ๋ธ์ ๋๋ค์๊ณผ ํ๋กํ ์ด๋ฏธ์ง๋ฅผ ๊ฐ์ง๋๋ค. ์ด๋ ๊ด๊ณํ๋ฐ์ดํฐ ๋ฒ ์ด์ค๋ ์๋์ ๊ฐ์ ์ํฉ์์ ๋น๊ด๊ณํ ๋ฐ์ดํฐ ๋ฒ ์ด์ค ๋ณด๋ค ํจ์จ์ ์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ๊ด๋ฆฌํฉ๋๋ค.
> - ์ ์ ๊ฐ ๊ฒ์๋ฌผ๊ณผ ๋๊ธ์ ์์ฑํ ํ ๋๋ค์ ๋๋ ํ๋กํ ์ด๋ฏธ์ง๋ฅผ ๋ณ๊ฒฝ.
> - ๊ณต๋ถ์๊ฐ ๋ญํน์ ์ฌ๋ผ๊ฐ ์ ์ ๊ฐ ๋๋ค์์ ๋ณ๊ฒฝ.
> 
> ๊ด๊ณํ ๋ฐ์ดํฐ ๋ฒ ์ด์ค๋ User ํ์ด๋ธ์ ํ๋ฒ ์์ ํด์ฃผ๋ฉด ์ด๋ฅผ ์ฐธ์กฐํ๋ ๊ฒ์๋ฌผ, ๋๊ธ, ๋ญํนํ์ด์ง์ ์ ์ ์ ๋ณด ๋ณ๊ฒฝ์ฌํญ์ด ๋ฐ์๋๋ค๋ ์ฅ์ ์ด ์์ต๋๋ค.
๋ฐ๋ฉด ๋น๊ด๊ณํ ๋ฐ์ดํฐ ๋ฒ ์ด์ค๋ ์ ์ ์ ๊ฒ์๋ฌผ๋ง๋ค ๋๋ค์๊ณผ ํ๋กํ ์ด๋ฏธ์ง๋ฅผ ์์ ํด์ผํ๋ ๋นํจ์จ์ด ๋ฐ์ํฉ๋๋ค. ๋ํ ๊ฒ์๋ฌผ๋ง๋ค ํ๋กํ ์ด๋ฏธ์ง์ ๋๋ค์์ด ์ค๋ณต ์ ์ฅ๋๋ ๋จ์ ์ด ์์ต๋๋ค.
<br>


#### 2. Sequelize๋

      ์๋ฐ์คํฌ๋ฆฝํธ ๊ฐ์ฒด์ ๋ฐ์ดํฐ๋ฒ ์์ค์ ๊ด๊ณ๋ฅผ ๋งตํํด์ฃผ๋ ๋๊ตฌ. MariaDB, MSSQL๋ฑ๊ณผ ํธํ์ด ๊ฐ๋ฅํฉ๋๋ค๋ค. 
     ์ํ๋ผ์ด์ฆ๋ฅผ ์ฌ์ฉํ๋ฉด ์๋ฐ์คํฌ๋ฆฝํธ ๊ตฌ๋ฌธ์ SQL๋ก ๋ฐ๊ฟ์ค๋๋ค.

##### 2-1. Sequelize๋ฅผ ์ฌ์ฉํ ์ด์ 

> ์๋ฐ์คํฌ๋ฆฝํธ๋ก DB๋ฅผ ๋ค๋ฃฐ ์ ์๋ค๋ ์ ์์ ์ง๊ด์ ์๋๋ค. ๋ํ ์ฌ์ฌ์ฉ์ฑ ๋ฐ ์ ์ง๋ณด์์ ํธ์์ฑ์ ๊ณ ๋ คํ์ต๋๋ค. ๋ค๋ง raw query์ ๋นํด ๊ฒ์ ์ฑ๋ฅ์ด ๋จ์ด์ง ์ ์์ต๋๋ค.
