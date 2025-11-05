import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  h2 {
    margin: 0 0 6px;
    font-size: 24px;
    font-weight: 700;
  }

  p {
    margin: 0 0 20px;
    color: #9aa3ad;
    font-size: 14px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
  padding-right: 8px;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'label-wrapper label-wrapper'
    'range value'
    'checkboxes checkboxes';
  row-gap: 8px;
  column-gap: 12px;
  padding: 14px 18px;
  border-radius: 12px;
  background: rgba(37, 50, 67, 0.4);
`;

export const LabelWrapper = styled.div`
  grid-area: label-wrapper;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const LabelText = styled.span`
  font-weight: 700;
  color: #ff6259;
`;

export const Select = styled.select`
  padding: 6px 12px;
  border-radius: 8px;
  background: #2a3037;
  border: 1px solid #3a4047;
  color: #e5e7eb;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s;

  &:hover {
    border-color: #ff6259;
  }
`;

export const Range = styled.input`
  grid-area: range;
  width: 100%;
  accent-color: #ff6259;
  background: transparent;
  height: 28px;
  margin: 0;
  cursor: pointer;
  outline: none;
  transform: scaleY(1.15);
  transform-origin: center;
`;

export const Value = styled.span`
  grid-area: value;
  align-self: center;
  justify-self: end;
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 999px;
  background: #2a3037;
  min-width: 36px;
  text-align: center;
`;

export const CheckboxGroup = styled.div`
  grid-area: checkboxes;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  padding-top: 12px;
  border-top: 1px solid #2a3037;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #2a3037;
  border: 1px solid ${({ selected }) => (selected ? '#ff6259' : '#3a4047')};
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    border-color: #ff6259;
    background: #2d3339;
  }

  input[type='radio'] {
    cursor: pointer;
    width: 16px;
    height: 16px;
    accent-color: #ff6259;
  }
`;
