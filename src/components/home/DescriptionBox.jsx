import styled from 'styled-components';

const Card = styled.div`
  background: rgba(31, 41, 55, 0.4);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(75, 85, 99, 0.3);
  padding: 1.5rem;
  text-align: center;
  transition: all 0.2s;
  border-radius: 0.5rem;

  &:hover {
    background: rgba(55, 65, 81, 0.5);
  }
`;

const Title = styled.h3`
  font-weight: 600;
  color: #ffffff; /* 완전한 흰색으로 변경 */
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #e5e7eb; /* 더 밝은 회색으로 변경 */
  font-size: 0.875rem;
`;

const DescriptionBox = ({ des, icon }) => {
  return (
    <Card>
      {icon}
      <Title>{des.title}</Title>
      <Description>{des.description}</Description>
    </Card>
  );
};

export default DescriptionBox;
