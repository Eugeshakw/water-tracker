import img from '../WhyDrinkWater/icons/marker_item.svg';
import styled from 'styled-components';
//56565656
const H2WhyDrinkWater = styled.h2`
  color: #2f2f2f;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  margin-bottom: 12px;
  font-family: 'Roboto';
`;

const ItemOfListWhyDrinkWater = styled.li`
  list-style: none;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ImgStyle = styled.img`
  display: block;
`;

const ItemWhyDrinkWater = styled.p`
  color: #2f2f2f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-family: 'Roboto';
  margin: 0;
`;

const DivWhyDrinkWater = styled.div`
  border-radius: 10px;
  background-color: #ecf2ff;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media (min-width: 0px) {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-right: 16px;
    padding-left: 16px;
    max-width: 280px;
  }
  @media (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-right: 24px;
    padding-left: 24px;
    max-width: 494px;
  }
`;

const ListWhyDrinkWater = styled.ul`
  padding: 0;
  margin: 0;
`;

const WhyDrinkWater = function () {
  return (
    <DivWhyDrinkWater>
      <H2WhyDrinkWater>Why drink water</H2WhyDrinkWater>
      <ListWhyDrinkWater>
        <ItemOfListWhyDrinkWater>
          <ImgStyle src={img} alt="icon item" />
          <ItemWhyDrinkWater>
            Supply of nutrients to all organs
          </ItemWhyDrinkWater>
        </ItemOfListWhyDrinkWater>
        <ItemOfListWhyDrinkWater>
          <ImgStyle src={img} alt="icon item" />
          <ItemWhyDrinkWater>Providing oxygen to the lungs</ItemWhyDrinkWater>
        </ItemOfListWhyDrinkWater>
        <ItemOfListWhyDrinkWater>
          <ImgStyle src={img} alt="icon item" />
          <ItemWhyDrinkWater>
            Maintaining the work of the heart
          </ItemWhyDrinkWater>
        </ItemOfListWhyDrinkWater>
        <ItemOfListWhyDrinkWater>
          <ImgStyle src={img} alt="icon item" />
          <ItemWhyDrinkWater>Release of processed substances</ItemWhyDrinkWater>
        </ItemOfListWhyDrinkWater>
        <ItemOfListWhyDrinkWater>
          <ImgStyle src={img} alt="icon item" />
          <ItemWhyDrinkWater>
            Ensuring the stability of the internal environment
          </ItemWhyDrinkWater>
        </ItemOfListWhyDrinkWater>
        <ItemOfListWhyDrinkWater>
          <ImgStyle src={img} alt="icon item" />
          <ItemWhyDrinkWater>
            Maintaining within the normal temperature
          </ItemWhyDrinkWater>
        </ItemOfListWhyDrinkWater>
        <ItemOfListWhyDrinkWater>
          <ImgStyle src={img} alt="icon item" />
          <ItemWhyDrinkWater>
            Maintaining an immune system capable of resisting disease
          </ItemWhyDrinkWater>
        </ItemOfListWhyDrinkWater>
      </ListWhyDrinkWater>
    </DivWhyDrinkWater>
  );
};

export default WhyDrinkWater;
