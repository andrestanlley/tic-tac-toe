import { useField } from '@unform/core';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string,
  icon?: React.ComponentType<IconBaseProps>;
}

export function Input({name, icon: Icon, ...rest}: InputProps){
  const inputRef = useRef<HTMLInputElement>(null);
  const {fieldName, defaultValue, error, registerField} = useField(name);
  
  useEffect( () => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value'
      })
  }, [fieldName, registerField])

  return (
    <Container>
      <input ref={inputRef} name={name} defaultValue={defaultValue} {...rest}></input>
      {Icon && <Icon size={36}/>}
    </Container>
  )
}