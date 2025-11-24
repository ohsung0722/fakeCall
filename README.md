# 📱 FakeCall - 진짜처럼 오는 가짜 전화

>"불편한 상황에서 자연스럽게 벗어나보세요" </br>

Fake Call은 React Native 기반 가짜 전화 어플입니다. </br>
단순한 UI 구현이 아닌, 오디오 재생·녹음·로컬 저장·시나리오 기반 호출 등 실제 전화 앱과 유사한 UX 구현을 목표로 했습니다.

</br>

## 🛠 기술 스택

| Category | Technology |
|---------|------------|
| Framework | <img src="https://img.shields.io/badge/Expo-000000?style=for-the-badge&logo=expo&logoColor=white" /> |
| Language | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /> |
| Mobile | <img src="https://img.shields.io/badge/React&nbsp;Native-61DAFB?style=for-the-badge&logo=react&logoColor=black" /> |
| Audio | <img src="https://img.shields.io/badge/Expo&nbsp;Audio-000000?style=flat-square" /> |
| Storage | <img src="https://img.shields.io/badge/AsyncStorage-323232?style=flat-square" /> |

</br>

## 🛠️ 기능 소개

|메인 화면|
|:---:|
|<img width="648" height="1404" alt="image" src="https://github.com/user-attachments/assets/ab4fd2c4-926d-4e5e-80d7-0eac16e96272" />|
|FakeCall 메인 화면으로 상황별 전화 or 전화번호부 연동한 가짜 전화 선택 가능|

- FakeCall의 메인 화면 UI 입니다.
- 크게 두 가지 섹션으로 분리되며, 상황별 전화 또는 사용자의 연락처를 연동한 가짜 전화 둘 중 하나의 섹션을 선택 가능합니다.

</br>

|상황별 화면|
|:---:|
|<img width="1080" height="1273" alt="image" src="https://github.com/user-attachments/assets/fe8a70ac-a744-4538-8f1e-fc7c764fb177" />|
|<img width="648" height="1404" alt="image" src="https://github.com/user-attachments/assets/c99980b8-7995-4c19-898c-de365627c3af" />|
|기본으로 주어지는 상황 + 커스텀 상황 추가 가능|

- 상황별 전화를 선택했을 때 보여지는 화면입니다.
- 기본으로 저장된 상황이 있고, 해당 상황 클릭 시 사전에 저장된 시나리오의 음성이 재생되는 실감나는 전화를 받을 수 있습니다.
- 커스텀 상황을 추가하여 원하는 상황, 장소에서 원하는 사람에게 원하는 목소리로 가짜 전화를 받을 수 있습니다.

</br>

|전화 수신 화면|
|:---:|
|<img width="648" height="1404" alt="image" src="https://github.com/user-attachments/assets/a37cef17-7b1a-4e9e-a212-d40b1e752d9d" />|
|<img width="648" height="1404" alt="image" src="https://github.com/user-attachments/assets/1bf98cdc-336f-410d-8899-72cc10077bb5" />|
|가짜 전화 수신 화면 UI|

- 상황 혹은 연락처를 선택했을 때 보여지는 화면입니다.
- 전화가 오는 것 같은 화면에서는 실제 갤럭시 벨소리가 울리고,
- 전화를 받았을 때는 사전에 시나리오에 녹음해놓은 소리가 재생되게 됩니다.
- 단, 내 연락처로 연락받기를 선택 후 전화 수신을 할 시 시나리오 녹음 소리는 재생되지 않습니다.

</br>

## 설치 및 실행 방법
### 1. Demo 영상
google drive: https://drive.google.com/file/d/1_2_dL7jTMX4wkdMQ02HDLxBIicTEj_oB/view?usp=sharing

### 2. apk파일
apk 파일 링크: https://expo.dev/artifacts/eas/frMaeaE12KmRE7ggJ1V25M.apk

### 3. 프로젝트 클론 후 실행할 때
1. npm install
2. npm start
3. QR코드 스캔
4. Expo Go 앱 설치 후 실행 가능

</br>

## Author
|권오성|
|:---:|
|<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/5f92d4e3-cf07-4391-a97f-b655a2d94f82" />|
|React 기반 FE 개발자|

