# 🛠 TSConfig 사용 가이드 (@croot/tsconfig)

이 디렉토리는 Monorepo 및 템플릿에서 재사용 가능한 TypeScript 설정 파일들을 제공합니다.

## ✅ 사용 방법

각 프로젝트의 `tsconfig.json`에서 다음과 같이 `extends`를 사용하세요:

```json
{
  "extends": "@croot/tsconfig/base.json"
}
```