import React from 'react';
import styled from 'styled-components';


// style-components 사용하면 js파일과 css파일 관리 쉬움
const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;


const Footer = () => {
  return (
    <FooterList>
      <ul>
        <li>오시는 길: 서울 강남구...</li>
        <li>전화번호: 02-1231-1234</li>
      </ul>
    </FooterList>
  );
};


export default Footer;