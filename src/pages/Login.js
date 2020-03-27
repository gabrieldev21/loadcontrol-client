import React from 'react'
import { Container, Button, Paper, Input, Avatar, Text } from 'components'
import logo from 'assets/images/logo.png'
import { useDispatch } from 'react-redux'

import { authentication } from 'redux/modules/user'

const Login = props => {
  const dispatch = useDispatch()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
    dispatch(authentication({ username, password }))
  }

  return (
    <Container full center>
      <form onSubmit={handleSubmit}>
        <Paper maxWidth={380}>
          <Container center column>
            <Avatar
              size={92}
              style={{
                marginBottom: '20px',
                padding: 8,
                animation: 'spin 20s linear infinite',
              }}
              src={logo}
            />
            <Text variant="h6" style={{ marginBottom: '0.35em' }}>
              Seja bem vindo Combatente
            </Text>
            <Text variant="body1">Insira suas credências para continuar </Text>
          </Container>

          <Input
            label="Usuário"
            required
            value={username}
            onChange={evt => {
              setUsername(evt.target.value)
            }}
          />
          <Input
            label="Senha"
            required
            type="password"
            value={password}
            onChange={evt => {
              setPassword(evt.target.value)
            }}
          />
          <Button type="submit">Entrar</Button>
        </Paper>
      </form>
    </Container>
  )
}

export default Login
