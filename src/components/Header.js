import React from 'react';
import styled from 'styled-components';


// style-components 사용하면 js파일과 css파일 관리 쉬움
const HeaderList = styled.div`
  border: 1px solid black;
  height: 300px;
`;


const Header = () => {
  return (
    <HeaderList>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </HeaderList>
  );
};


export default Header;