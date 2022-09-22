import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const QuantityNumber = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #fff;
`;