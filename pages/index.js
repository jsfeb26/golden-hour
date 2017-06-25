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
  position: relative;
  align-self: center;
  padding-top: 100px;
`;

const BelowFoldContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
`;

const SecondaryImage = styled.img`
  position: relative;
  width: 400px;
  height: 250px;
  top: 50px;
  left: 200px;
`;

export default () => (
  <div>
    <AboveFoldContainer>
      <AboveFoldImage src="/static/main.jpg" />
      <Link href="/">
        <Logo src="/static/Logo.png" />
      </Link>
      <SearchContainer>
        <SearchInput />
      </SearchContainer>
    </AboveFoldContainer>
    <BelowFoldContainer>
    </BelowFoldContainer>
  </div>
);
