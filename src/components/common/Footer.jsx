import styled from 'styled-components';

const Container = styled.footer`
  color: #e5e7eb;
  padding: 0;
  text-align: center;
  font-size: 0.9rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #6b7280;
  margin-bottom: 1rem;
  width: 95%;
`;

const LinkBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10rem;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    gap: 0.8rem;
    font-size: 0.6rem;
  }
`;

const LinkTag = styled.a`
  color: #e5e7eb;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

const Copy = styled.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Divider />
      <LinkBox>
        <div className="text-box">
          <LinkTag href="mailto:imde0205@gmail.com">Mail</LinkTag>
        </div>
        <div className="text-box">
          <LinkTag href="https://docs.google.com/forms/d/e/1FAIpQLSfvKz1Y2eiLJXezSkOcq4jPb_RKqUvV_1xcTPt5zr7vQFmEfA/viewform?usp=dialog">
            오류 및 제안
          </LinkTag>
        </div>
        <div className="text-box">
          <LinkTag href="https://github.com/SportsTeamRecommend">
            Github
          </LinkTag>
        </div>
      </LinkBox>
      <Copy>© 2025 MyTeamFinder. All Rights Reserved.</Copy>
    </Container>
  );
};

export default Footer;
