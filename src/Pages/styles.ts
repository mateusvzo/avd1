import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #5636D3;
  padding: 30px 15px 30px 15px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;  
`;

export const InputContainer = styled.View`
  width: 90%;
  margin-top: 12px;
`; 


export const Input = styled.TextInput`
  margin-top: 20px; 
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  background-color: #b4b4b4;
  color: #000;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 50px;
  border-radius: 15px;

  margin: 0 15px 0 15px;

  margin-top: 30px;
  background-color: #FF872C;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #000;
`;

export const SubTitle = styled.Text`
  margin-top: 50px;

  font-weight: bold;
  font-size: 20px;

  color: #fff;
`;

export const ContainerList = styled.View`
  width: 320px;
  border-radius: 10px;

  padding: 10px;
`;

export const ButtonList = styled(TouchableOpacity)`
  background-color: #c891ff;

  border-radius: 20px;

  padding: 10px;
  margin-bottom: 10px;

  align-items: center;
  justify-content: center;
`;

export const TextList = styled.Text`
  margin-left: 5px;

  font-weight: bold;
  font-size: 14px;
`;

export const Icon = styled(MaterialIcons)`
  font-size: 30px;
  color: #fff;
`;

export const Header = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
