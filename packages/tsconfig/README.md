# TypeScript Config 사용 가이드

> @croot/tsconfig-config

---

## 패키지 설치

```bash
pnpm add -D @croot/tsconfig
```

---

## 해당 프로젝트에 적용

tsconfig.json 파일에서 원하는 프리셋을 extends로 연결해 주세요.

### 포함 Config

| Config | 설명                                                   |
| ------ | ------------------------------------------------------ |
| base   | 기본 TS 설정, 모든 프로젝트의 베이스                   |
| react  | `jsx: react-jsx` 포함                                  |
| vue    | `jsx: preserve`, `types: ['vue']` 포함                 |
| next   | `react` 기반 + `types: ['next']`, `next-env.d.ts` 포함 |
| nuxt   | `types: ['nuxt']`, `moduleResolution: node`            |

---

## 사용 예시

### React

```json
{
  "extends": "@croot/tsconfig/react",
  "include": ["src"]
}
```

### Vue

```json
{
  "extends": "@croot/tsconfig/vue",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### Next.js

```JSON
{
  "extends": "@croot/tsconfig/next",
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]
}
```

### Nuxt

```JSON
{
  "extends": "@croot/tsconfig/nuxt"
}
```

---

## ⚙️ 사용자 설정 확장 예시

```JSON
{
  "extends": "@croot/tsconfig/base",
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "~/*": ["./*"],
      "components/*": ["components/*"]
    }
  }
}
```

---

## 참고

- extends를 통해 각 프로젝트 환경에 맞는 TSConfig를 간단하게 구성할 수 있습니다.
- 필요 시 compilerOptions를 프로젝트 단위로 자유롭게 override 할 수 있습니다.
