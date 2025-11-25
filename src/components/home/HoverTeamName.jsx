import { styled, keyframes, css } from 'styled-components';

const floatY = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const delayStyles = {
  'float-delay-1': css`
    animation-delay: 0s;
  `,
  'float-delay-2': css`
    animation-delay: 0.4s;
  `,
  'float-delay-3': css`
    animation-delay: 0.8s;
  `,
  'float-delay-4': css`
    animation-delay: 1.2s;
  `,
  'float-delay-5': css`
    animation-delay: 1.6s;
  `,
  'float-delay-6': css`
    animation-delay: 2s;
  `,
};

const FloatBox = styled.div`
  position: absolute;
  color: #fff;
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  font-weight: 600;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.9rem;
  cursor: pointer;

  background-color: ${({ $color }) => $color};
  left: ${({ $xy }) => $xy.x}px;
  top: ${({ $xy }) => $xy.y}px;
  animation: ${floatY} 3s ease-in-out infinite;

  /* delayClass prop으로 딜레이 결정 */
  ${({ $delay }) => delayStyles[$delay] || ''}

  @media (max-width: 767px) {
    left: ${({ $xy }) =>
      `max(20px, min(${$xy.x}px, calc(70vw - 80px)))`} !important;
    transform: translateX(0); /* 중심정렬 제거 */
    max-width: 85%;
    white-space: normal;
  }
`;

const HoverTeamName = ({ name, color, xy, delayClass }) => {
  return (
    <FloatBox $color={color} $xy={xy} $delay={delayClass}>
      {name}
    </FloatBox>
  );
};

export default HoverTeamName;
