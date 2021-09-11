import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { ButtonOpacity, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps){
  return (
    <ButtonOpacity
    {...rest}
    >
      <TextButton>{title}</TextButton>
    </ButtonOpacity>
  )
}