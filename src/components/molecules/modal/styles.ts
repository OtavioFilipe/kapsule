import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
   
`;

export const ModalComponent = styled.Modal`
    
`

export const ContainerInsideModal = styled.View`
    width: 95%;
    height: 299px;
    position: absolute;
    top: 30%;
    align-self: center;

    background: #FFFFFF;
    border-radius: 8px;
    padding: 16px;
    justify-content: center;
    align-items: center;

    shadow-radius: 3.84;

    elevation: 5;
    shadow-offset: {  width: 10;  height: 10  };
    shadow-color: #C6C9D6;
    shadow-opacity: 1.0;
`

export const LabelModal = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;

    text-align: center;


    color: #545976;

    margin-top: 12px;
    margin-bottom: 22px;
`; 

export const ButtonsModal = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 29px;
`;

export const CloseModal = styled.TouchableOpacity`
    position: absolute;
    right: 16px;
    top: 16px;
`;