import Link from 'next/link';
import styled from 'styled-components';

import SearchInput from '../components/search-input';

const AboveFoldContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
`;

const AboveFoldImage = styled.img`
  width: 100%;
  height: 500px;
  position: absolute;
`;

const Logo = styled.img`
  width: 212px;
  height: 100px;
  cursor: pointer;
  position: relative;
  padding: 18px 36px;
`;

const SearchContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  align-self: center;
  padding-top: 100px;
  align-items: center;
`;
const HelpInfo = styled.div`
  width: 300px;
  padding-bottom: 18px;
  text-align: center;
  font-size: 22px;
  color: #F7F7F7;
`;

const BelowFoldContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  padding: 27px;
`;

const SecondaryImage = styled.img`
  width: 90%;
`;

export default () => (
  <div>
    <AboveFoldContainer>
      <AboveFoldImage src="/static/main.jpg" />
      <Link href="/">
        <Logo src="/static/Logo.png" />
      </Link>
      <SearchContainer>
        <HelpInfo>Find the best locations for golden hour photography</HelpInfo>
        <SearchInput />
      </SearchContainer>
    </AboveFoldContainer>
    <BelowFoldContainer>
      <SecondaryImage src="/static/secondary.png" />
    </BelowFoldContainer>
  </div>
);
