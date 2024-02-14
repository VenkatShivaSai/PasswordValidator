// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordValidatorContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [input, setInput] = useState('')

  const onChangeInput = event => {
    setInput(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput type="password" onChange={onChangeInput} value={input} />
        <ErrorMessage>
          {input.length >= 8
            ? ''
            : 'Your password must be at least 8 characters'}
        </ErrorMessage>
      </PasswordValidatorContainer>
    </MainContainer>
  )
}

export default PasswordValidator
