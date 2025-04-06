# ESLint Config 사용 가이드

> @croot/eslint-config

---

## 패키지 설치

```bash
pnpm add -D eslint @croot/eslint-config
```

Flat Config 형식으로 설정되어 있으므로 ESLint 버전은 9 이상이 필요합니다.

---

## 해당 프로젝트에 적용

루트에 `eslint.config.js` 파일을 생성하고 아래와 같이 구성합니다.

```javascript
import base from '@croot/eslint-config/base';
import typescript from '@croot/eslint-config/typescript';
import prettier from '@croot/eslint-config/prettier';

export default [base, ...typescript, prettier];
```

원하는 구성만 골라서 조합할 수 있으며, 순서를 직접 조절할 수 있습니다.

---

### 구성 항목

| Config     | 설명                                     |
| ---------- | ---------------------------------------- |
| base       | 기본 JavaScript 규칙 세트                |
| typescript | TypeScript 전용 규칙 및 플러그인 포함    |
| prettier   | prettier 설정과 충돌 방지를 위한 룰 포함 |

---

## VSCode 설정 예시

`.vscode/settings.json`:

```JSON
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": ["javascript", "typescript", "json"]
}
```

---

## CLI 사용 예시

```bash
pnpm eslint . --ext .js,.ts,.tsx --fix
```

---

## 참고

- eslint.config.js는 Flat Config 방식입니다 (ESLint 9 이상).
- 설정 항목들을 직접 선택해서 조합할 수 있습니다.
- 추가적으로 react, vue, jest, vitest 등의 config도 분리하여 제공할 수 있습니다.
