# git
> 로컬에서 레파지토리와 연결하기

1. git add . or git add ./README 
.은 모든 파일을 추가하겠다
<모든파일이란? git에서 추적하지 않거나 변경되거나 삭제된 모든 파일을 의미한다.>

    ./파일명 혹은 경로 : 지정된 파일 혹은 경로의 변경상태만 등록하겠다.

2. git commit -m "메세지" 
우리가 남긴 스냅샷에 설명을 작성한다.

3. git branch -m main 
브랜치의 설명을 main으로 한다.

4. git remote add origin 레파지토리의 주소 
생성한 브랜치의 레파지토리 주소를 다음과 같이 설정한다.

5. git push -u origin main
원격 레파지토리의 main브랜치에 기본적으로 push 를 하겠다.
->위 설정을 통해 git push 만 입력해도 main으로 파일을 추가할수 있게 된다.
<<<<<<< HEAD
=======

6. git pull
연결되어 있는 레파지토리의 상태를 내려 받는다.
>>>>>>> 72d5968b1c6c66ac7337fd0eaa1b360e3b556a91
