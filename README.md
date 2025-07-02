# 키보드 소리 체크 서비스

## 프로젝트 개요

키보드를 고를 때 배열과 키감, 디자인 등 많은 요인을 고려하게 됩니다.
이 때 각 키의 소리 또한 매우 중요한데요,
구매 사이트 또는 다양한 유튜브 후기 영상에서 소리를 확인할 수 있지만, 여전히 녹음 환경과 품질에 따라 소리를 명확하게 듣기 어렵습니다.
이에 따라 키의 소리를 녹음하고 확인할 수 있도록 하는 가상 키보드 형태의 키보드 소리 체크 서비스를 제작하였습니다.

---

### 사용 툴 및 라이브러리

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

### 핵심 기능

- 반응형 웹 디자인
- 각 키 별 매핑된 객체를 활용하여 오디오 이벤트 처리 및 출력
- 키보드 타이핑, 마우스 호버, 마우스 클릭 모드에 따라 eventHandler 교체
- useMemo()를 통한 연산 최적화
- useRef()를 활용해 여러개의 오디오 파일을 미리 로드해두고 순환시킴으로써, 연속적인 입력에 로딩이나 끊김 없이 대응


---
시연 영상

![시연](./public/demo_gif/keyboard_demo.gif)
