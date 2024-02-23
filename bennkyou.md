# npm, npx

- npm은 라이브러리를 다운 - 빌드 -> (로컬에 다 다운) - 프로젝트마다, 글로벌 설정 가능
- npx은 라이브러리를 다운 - 빌드 -> (다운 받은 걸 재사용, 없으면 다운) -> 실행 -> 삭제


# React 엔진 - 데이터 변경을 감지해서 UI를 그려주는

# lifecycle - SPA -> a tag가 안 됨 왜?

# JSX문법
  - react function은 하나의 DOM만 리턴해준다
  - if 사용 불가능 -> 삼항 연산자 사용 가능
  - 조건부 렌더링(조건 && 값)
  - css 디자인
    - 내부에 적는 방법
    - 외부 파일에 적는 방법
    - 라이브러리 사용하는 방법(부트스트랩, styled-component)

# useState()
  - const [data, setData] = useState();
  - set으로 data값을 변경하거나 data에 변화가 발생할 때

# useEffect()
  - 실행시점
    1. App() 함수가 최초 실행될 때 (마운트될 때)
    2. 상태변수가 변경될 때 -> dependancy list를 넣는다.
    3. 의존 리스트를 관리할 수 있다.

# useMemo()


# useRef()



# Styled-Component
  - const Title = styled.div``; 이런 문법
  - ``안에 css문법 그대로 사용 가능
  - component화를 하기 때문에 클래스화 하는 것처럼 나눠서 작성하기 편함