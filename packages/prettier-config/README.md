# Prettier 설정 적용 가이드

> @croot/prettier-config

---

## 파이프 설치

```bash
pnpm add -D prettier @croot/prettier-config
```

---

## 해당 프로젝트에 적용

### `.prettierrc.cjs`

```js
module.exports = require('@croot/prettier-config');
```

> Tailwind 포함 시:

```js
module.exports = require('@croot/prettier-config/with-tailwind');
```

---

### `.prettierignore`

```txt
node_modules
dist
build
coverage
```

---

### VSCode 설정 (`.vscode/settings.json`)

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.configPath": "./.prettierrc.cjs"
}
```

---

### CLI 명령어

```bash
pnpm prettier --write .
pnpm prettier --check .
```

---

## 포맷 가능 구성

- `with-tailwind`: Tailwind CSS 클래스 정렬 자동화
- `toss`: Toss 스타일 기반 설정

---

## 프로젝트 구조 예시

```
project-root/
├── .prettierrc.cjs
├── .prettierignore
├── .vscode/
│   └── settings.json
├── package.json
```

---

> 이 설정은 팀 전체가 일관된 포맷팅 스타일을 유지할 수 있게 해줍니다.
