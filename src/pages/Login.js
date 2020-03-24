import React from 'react'
import { Container, Button, Paper, Input, Avatar, Text } from 'components'
import logo from 'assets/images/logo.png'

const Login = props => {
  return (
    <Container full center>
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
        <Input label="Usuário " required />
        <Input label="Senha" required type="password" />
        <Button>Entrar</Button>
      </Paper>
    </Container>
  )
}

export default Login
