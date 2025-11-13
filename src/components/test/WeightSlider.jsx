import { useState, useEffect } from 'react';
import {
  Container,
  Header,
  List,
  Item,
  LabelWrapper,
  LabelText,
  Select,
  Range,
  Value,
  CheckboxGroup,
  CheckboxLabel,
} from './WeightSlider.styles';
import { f1Fields, kboFields } from '../../utils/testData';

const WeightSlider = ({ labels, checkLabels, region, type, onUpdate }) => {
  const keyList = type === 'f1' ? f1Fields : kboFields;

  const [values, setValues] = useState(Array(labels.length).fill(0));
  const [selectedOptions, setSelectedOptions] = useState(
    checkLabels.map((group) => (group ? 0 : null))
  );
  const [selectedRegion, setSelectedRegion] = useState('');

  const mapWeight = (idx) => {
    if (idx === 1) return 'HIGH';
    if (idx === 2) return 'LOW';
    return 'NONE';
  };

  const handleChange = (idx, newValue) => {
    const updated = [...values];
    updated[idx] = newValue;
    setValues(updated);
  };

  const handleOptionChange = (groupIdx, itemIdx) => {
    const updated = [...selectedOptions];
    updated[groupIdx] = itemIdx;
    setSelectedOptions(updated);
  };

  const buildPayload = () => {
    const data = {};

    keyList.forEach((field, idx) => {
      const { preferenceKey, importanceKey } = field;

      data[preferenceKey] = mapWeight(selectedOptions[idx]); // 라디오
      data[importanceKey] = values[idx]; // 슬라이더
    });

    return data;
  };

  console.log('data', buildPayload());

  useEffect(() => {
    onUpdate?.(buildPayload());
  }, [values, selectedOptions]);

  return (
    <Container>
      <Header>
        <h2>팀에서 무엇을 중요하게 생각하나요?</h2>
        <p>슬라이더를 오른쪽으로 움직여 본인의 성향을 표현해 보세요</p>
      </Header>

      <List>
        {labels.map((label, idx) => (
          <Item key={idx}>
            <LabelWrapper>
              <LabelText>{label}</LabelText>
              {label === '연고지' && region && (
                <Select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  <option value="">선택하세요</option>
                  {region.map((r, rIdx) => (
                    <option key={rIdx} value={r}>
                      {r}
                    </option>
                  ))}
                </Select>
              )}
            </LabelWrapper>

            <Range
              type="range"
              value={values[idx]}
              min="0"
              max="10"
              step="0.1"
              onChange={(e) => handleChange(idx, Number(e.target.value))}
            />

            <Value>{values[idx].toFixed(1)}</Value>

            {checkLabels[idx] && (
              <CheckboxGroup>
                {checkLabels[idx].map((checkLabel, checkIdx) => (
                  <CheckboxLabel
                    key={checkIdx}
                    selected={selectedOptions[idx] === checkIdx}
                  >
                    <input
                      type="radio"
                      name={`option-group-${idx}`}
                      checked={selectedOptions[idx] === checkIdx}
                      onChange={() => handleOptionChange(idx, checkIdx)}
                    />
                    <span>{checkLabel}</span>
                  </CheckboxLabel>
                ))}
              </CheckboxGroup>
            )}
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default WeightSlider;
