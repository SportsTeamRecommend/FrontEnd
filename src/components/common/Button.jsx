import { styled, css } from 'styled-components';

const SportButton = styled.button`
  font-weight: bold;
  padding: 1.5rem 3rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  width: 300px;
  height: 100px;

  &:hover {
    transform: scale(1.05);
  }

  /* variant에 따라 색상 분기 */
  ${({ $variant }) => {
    switch ($variant) {
      case 'f1-button':
        return css`
          background-color: rgb(239, 68, 68);
          color: white;
          &:hover {
            background-color: rgb(220, 38, 38);
          }
        `;
      case 'kbo-button':
        return css`
          background-color: rgb(37, 99, 235);
          color: white;
          &:hover {
            background-color: rgb(29, 78, 216);
          }
        `;
      case 'resultPage':
        return css`
          background-color: rgba(31, 41, 55, 0.4);
          color: white;
          height: 30px;
          width: 250px;
        `;
      case 'statistics-f1':
      case 'compare-f1':
        return css`
          color: white;
          width: 246px;
          height: 46px;
          background-color: rgb(239, 68, 68);
          &:hover {
            background-color: rgb(220, 38, 38);
          }
        `;
      case 'statistics-kbo':
      case 'compare-baseball':
        return css`
          color: white;
          width: 246px;
          height: 46px;
          background-color: rgb(29, 78, 216);
          &:hover {
            background-color: rgb(29, 78, 216);
          }
        `;
      default:
        return css``;
    }
  }}
`;

const Button = ({ onClick, text, type }) => {
  return (
    <SportButton $variant={type} onClick={onClick}>
      {text}
    </SportButton>
  );
};

export default Button;
