import { useEffect, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import {
  Container,
  FinishSpan,
  Half,
  HalfSpan,
  Span,
  Wrapper,
} from './ProgressiveBar.styled.js';
import { useSelector } from 'react-redux';

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

const ProgressiveBar = () => {
  const [values, setValues] = useState([0]);

  if (values[0] > 100) {
    setValues([100]);
  }

  const waterRate = useSelector(state => state.auth.user.waterRate);

  const water = useSelector(state => state.water.waters);

  const totalWater = water.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0
  );

  const waterPercent = (totalWater / waterRate) * 100;

  useEffect(() => {
    setValues([waterPercent]);
  }, [waterPercent]);

  console.log(values[0]);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        draggable={false}
        renderTrack={({ props, children }) => (
          <div
            style={{
              ...props.style,
              height: '16px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '8px',
                width: '100%',
                borderRadius: '10px',
                background: getTrackBackground({
                  values: values,
                  colors: ['#9EBBFF', '#D7E3FF'],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '14px',
              width: '14px',
              borderRadius: '50%',
              border: '1px solid #407BFF',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pointerEvents: 'none',
            }}
          ></div>
        )}
      />
      <Container>
        <Wrapper style={{ marginTop: '4px' }}>
          <div
            style={{ width: '1px', height: '8px', backgroundColor: '#D7E3FF' }}
          ></div>
          <Span>0%</Span>
        </Wrapper>
        <Wrapper>
          <Half></Half>
          <HalfSpan>50%</HalfSpan>
        </Wrapper>
        <Wrapper style={{ marginTop: '4px' }}>
          <div
            style={{
              width: '1px',
              height: '8px',
              backgroundColor: '#D7E3FF',
              position: 'relative',
              left: '36px',
            }}
          ></div>
          <FinishSpan>100%</FinishSpan>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ProgressiveBar;
