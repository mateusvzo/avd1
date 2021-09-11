import React from 'react';
import { useState, useEffect } from 'react';
import {FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Button } from '../Components/Button';

import { 
  Container, 
  Title, 
  InputContainer, 
  Input,
  SubTitle,
  ContainerList,
  ButtonList,
  TextList,
  Icon,
  Header
} from './styles';


interface CadastroProps {
  id: string;
  name: string;
  email: string;
  telefone: string;
}


export function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cadastro, setCadastro] = useState<CadastroProps[]>([]);

  function handleAddCadastro() {
    const data = {
      id: String(new Date().getTime()),
      name: nome,
      email: email,
      telefone: telefone
    }
    setCadastro([...cadastro, data])
    setNome('')
    setEmail('')
    setTelefone('')
  }

  function handleRemoveCadastro(id: string) {
    setCadastro(cadastro => cadastro.filter( c => c.id !== id))
  }

  useEffect(() => {
    async function loadData() {
      const getData = await AsyncStorage.getItem('@listCadastro');
      return getData !== null ? setCadastro(JSON.parse(getData)) : null;
    }

    loadData()
  }, [])

  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('@listCadastro', JSON.stringify(cadastro));
    }

    saveData();
  }, [cadastro])

  return (
    <Container>
      <Header>
        <Icon name="app-registration"/>
        <Title>AVD1 - CADASTRO</Title>
      </Header>

      <InputContainer>
        <Input 
          placeholder="Digite seu Nome"
          placeholderTextColor= '#555'
          value={nome}
          onChangeText={setNome}
        />
        <Input 
          placeholder="Digite seu Email"
          placeholderTextColor= '#555'
          value={email}
          onChangeText={setEmail}
        />
        <Input 
          placeholder="Digite seu Telefone"
          placeholderTextColor= '#555'
          value={telefone}
          onChangeText={setTelefone}
          onSubmitEditing={handleAddCadastro}
        />

        <Button title= "Cadastrar" onPress={handleAddCadastro} />
      </InputContainer>

      <SubTitle>Lista de Cadastrados</SubTitle>

      <FlatList 
        showsVerticalScrollIndicator={false}
        data={cadastro}
        keyExtractor={ item => item.id}
        renderItem={({ item }) => (
          <ContainerList>
            <ButtonList
              onPress={() => handleRemoveCadastro(item.id)}
            >
              <TextList style={{fontSize: 26}}>{item.name}</TextList>
              <TextList style={{fontSize: 18}}>{item.email}</TextList>
              <TextList>{item.telefone}</TextList>
            </ButtonList>
          </ContainerList>
        )}
      />
    </Container>
  )
}