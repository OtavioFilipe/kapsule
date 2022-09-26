import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: #F5F7FE;
  border-radius: 8px;
  margin-top: 24px;
`;

export const ContentRow = styled.View`
    flex-direction: row;
    width: 100%;
    padding-vertical: 10px;
    padding-horizontal: 16px;
`;

export const ContentRowLeft = styled.View`
    flex: 2;
`;

export const ContentRowRight = styled.View`
    flex: 0.6;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #545976;
    margin-right: 8px;
`;

export const SubTitle = styled(Title)`
    font-weight: 400;
    opacity: 0.6;
    margin-right: 0px;
`;

export const Circle = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 100px;
    border: 1px;
    border-color: #BDBDBD;
    align-items: center;
    justify-content: center;
`;