import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-self: flex-end;
  width: 172px;
  height: 28px;
  background: #21E7C5;
  border-radius: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
`;

export const Icon = styled.Image`
    margin-left: 8px;
`

export const Title = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
`;
