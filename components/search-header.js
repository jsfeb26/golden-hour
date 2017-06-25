import styled from 'styled-components';
import SearchInput from '../components/search-input';
import Link from 'next/link';

const HeaderContainer = styled.div`
  padding: 18px 36px;
  background-color: #C9E0E0;
  margin-bottom: 18px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 108px;
  height: 50px;
  cursor: pointer;
`;

export default () => (
  <HeaderContainer>
    <ContentContainer>
      <Link href="/">
        <Logo src="/static/Logo.png" />
      </Link>
      <SearchInput />
    </ContentContainer>
  </HeaderContainer>
);
