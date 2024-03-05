# nuxt3-monorepo-study
Nuxt3 프레임워크에 대한 Monorepo 구조를 공부하는 저장소.  
ui폴더에는 storybook에 대해서도 탐구해본다.  
패키지매니저는 `pnpm`을 사용한다.

```bash
pnpm install
```

## 구조
구조를 잡을 땐 다음 링크를 보면서 구조를 잡았다.  
감사합니다,,  
> https://serko.dev/post/nuxt-3-monorepo#sharing-env-environment-variables

Nuxt3에서는 layer 기능을 제공해서 모노레포를 구축할 때 편의를 준다.  
그래서 자체적으로 템플릿도 제공해주지만, 이번에는 위 링크를 보면서 직접 구축해보기로 했다.
> https://nuxt.com/docs/guide/going-further/layers#starter-template

`packages`폴더에 각 패키지를 만들어서 구성하였고,  
`app` 폴더에는 실질적으로 화면에 Nuxt3앱이고 도메인이라고 보면된다.  
`ui` 폴더에는 공통적으로 쓰이는 base 컴포넌트들을 구성하기로 했다.

## 트러블 슈팅
### recursive unknown error
위의 구조 잡을 떄 참조한 링크를 보면,  
`ui` 패키지(layer)를 먼저 잡고 `app` 패키지(layer)를 잡는다.

근데, `ui` 패키지를 먼저 잡을 때 template을 써서 잡는 것이 아니므로 설정하기가 귀찮아 `app`을 먼저 잡고 `ui`를 잡았다.  
그 후, 루트 디렉토리에서 `pnpm -r dev` 명령어를 실행하니 다음과 같은 에러가 발생했다.
- `Unknown option: 'recursive' when using pnpm -r`

혹시 순서가 꼬였나 싶어서 그 전에 각각 패키지에서 설치한 `node_modules`폴더를 전부 지우고,  
`ui`설치 후, `app`을 설치하고 루트 디렉토리에서 `pnpm -r dev`명령어를 실행하니 해결되었다.

### storybook error
`ui`패키지에 storybook을 설치하고, addon까지 설치했다.
```bash
pnpm dlx storybook@latest init
```
```bash
pnpm add -D storybook-addon-nuxt 
```

그 후에 `.storybook/main.js`에 addon을 추가하고 실행했더니 다음과 같은 에러가 발생했다.
-  SyntaxError: Cannot use import statement outside a module
  - import { fileURLToPath } from 'node:url';

당황스러웠지만,  
찾아보니 설치된 외부라이브러리인 `storybook-addon-nuxt`폴더의 `package.json`에 `"type": "module"`을 추가하라는 글을 찾아볼 수 있었다.
- https://github.com/hirotaka/storybook-addon-nuxt/issues/24

진짜로 `node_modules`폴더에 해당 내용을 추가하니 해결되었다.
