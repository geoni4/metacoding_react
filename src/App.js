import React, { createRef, useRef, useState } from 'react';
import './App.css';


// 1. lifecycle
// 2. jsx syntax
// function App() {
//   console.log("App 실행됨");
//   let sample = [
//     {id:1, name:"홍길동"},
//     {id:2, name:"임꺽정"},
//     {id:3, name:"장보고"},
//     {id:4, name:"코스"}
//   ]
//   const [num, setNum] = useState(5);
//   const [users, setUsers] = useState(sample);

//   const download = () => {
//     sample.push({id:num, name:'조자룡'});
//     setUsers([...sample]);
//     setNum(num+1);
//   }


//   return (
//     <div>
//       <button onClick={download}>다운로드</button>
//       {users.map(user=> <h1>{user.id}, {user.name}</h1>)}
//     </div>
//   );
// }

// const App = () =>{
// 
  // const [data, setData] = useState(0);
  // const [search, setSearch] = useState(0);

  // const download = () =>{
  //   let downloadData = 5;
  //   setData(downloadData)
  // }
  // useEffect 실행 시점
  // 1) App() 함수가 최초 실행될 때(마운트 될 때, 최초 그림이 그려질 때)
  // 2) 상태변수가 변경될 때
  // 3) 의존 리스트를 관리할 수 있다.
  // useEffect(() =>{
  //   console.log('useEffect 실행 됨');
  //   download();
  // }, [search]);
  // return (
  //   <div>
  //     <button onClick={()=>{
  //       setSearch(search+1);
  //     }} >검색하기</button>
  //     <h1> 데이터: {data}</h1>
  //     <button onClick={()=>{
  //       setData(data+1);
  //     }}>더하기</button>
  //   </div>
  // );
  
  
  // }
  
// useMemo
// function App() {
//   const [list, setList] = useState([1, 2, 3, 4]);
//   const [str, setStr] = useState("");

  
//   const getAddResult = () => {
//     let sum =0;
//     list.forEach(i => sum = sum+i);
//     console.log("sum", sum);
//     return sum;
//   }
//   const addResult = useMemo(() => getAddResult(), [list]);
  
//   return (
//     <div>
//       <button onClick={() => {
//         setStr("안녕");
//       }}>
//         문자변경
//       </button>
//       <button onClick={() =>{
//         setList([...list, 10]);
//       }}>리스트값 추가</button>
//       <div>
//         {list.map(e => <h1>{e}</h1>)}
//       </div>
//       <div>
//         {str}: {addResult}
//       </div>
//     </div>
//   )
// }
  
  
// export default App;
  


// useRef 디자인
// DOM 변경 시 사용
function App() {

  const myRef = useRef(null);
  
  const [list, setList] = useState([
    {id: 1, name:"길동"},
    {id: 2, name:"꺽정"}
  ])

  const myRefs = Array.from({length: list.length}).map(() => createRef());

  return (
    <div>
      <button onClick={() => { 
        console.log(myRef);
        console.log(myRef.current);

        myRefs[1].current.style.backgroundColor = 'red';}}>
          색 변경
      </button>
      <div ref={myRef}>박스</div>
      {list.map((user, index) => <h1 ref={myRefs[index]}>{user.name}</h1>)}
    </div>
  )
}

export default App