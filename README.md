# 🍿 Movie_Search

### OMDb API를 활용 TypeScript 영화 검색 애플리케이션

👉🏻 **[사이트 바로가기](https://movie-search-flame.vercel.app/#/)**

# 🍿 사용기술 & 개발환경

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"><br>
<img src="https://img.shields.io/badge/Visual Studio Code-0769AD?style=for-the-badge&logo=Visual Studio Code IDEA&logoColor=white">

# 🍿 화면구성 및 기능

### Vercel Hosting

`node-fetch` 패키지는 2ver 설치 👇🏻

```bash
npm i -D vercel dotenv
npm i node-fetch@2
```

`vercel.json` 👇🏻

```json
{
  "devCommand": "npm run dev",
  "buildCommand": "npm run build"
}
```

`package.json` 👇🏻

```json
{
  "scripts": {
    "vercel": "vercel dev"
  }
}
```

### Vercel Serverless Functions

프로젝트 루트 경로에 /api 폴더를 생성\
**API Key** 를 노출하지 않도록 서버리스 함수를 작성

```ts
import { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'node-fetch'

const { APIKEY } = process.env

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const { title, page, id } = JSON.parse(request.body as string)
  const url = id
    ? `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`
  const res = await fetch(url)
  const json = await res.json()
  response
    .status(200)
    .json(json)
}

```

**환경변수**
로컬의 개발용 서버에서 사용할 환경변수를 `.env` 파일에 지정

```env
APIKEY=<MY_OMDb_API_KEY>
```

Vercel 서비스의 프로젝트 **'Settings / Environment Variables'** 옵션에서 환경변수 지정
