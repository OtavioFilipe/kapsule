import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 64px;
  flex-direction: row;
`;

export const LeftSide = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    padding-left: 16px;
`;

export const Cart = styled.TouchableOpacity`
    width: 41px;
    height: 41px;
    background-color: #fff;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
`

export const RightSide = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;
    flex-direction: row;
`;