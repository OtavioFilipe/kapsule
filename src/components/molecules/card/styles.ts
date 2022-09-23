import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
    margin-top: 16px;
    background: #FFFFFF;
    box-shadow: 0px 6px 6px #C6C9D6;
    border-radius: 8px;
    padding-horizontal: 17px;
    padding-vertical: 16px;
    
    shadow-opacity: 0.25;
    shadow-radius: 3.84;

    elevation: 5;
    shadow-offset: {  width: 10,  height: 10  };
    shadow-color: black;
    shadow-opacity: 1.0;
`;

export const CardTop = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const ChipIcon = styled(LinearGradient)`
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin-right: 6px;
`;

export const ChipIconDefault = styled.View`
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    flex-direction: row;
    margin-right: 6px;
`
export const Capsule = styled.View`
    width: 46px;
    height: 25px;
    background-color: #F5F7FE;
    flex-direction: row;
    align-items: center;
    padding: 3px;
`

export const Title = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`
export const CardContent = styled.View`
    margin-top: 14px;
    flex-direction: row;
`

export const CardTitle = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`

export const SubTitle = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`

export const Content = styled.View``

export const ProductImage = styled.View`
    flex-direction: row;
    margin-top: -28px;
`