import React from 'react'
import {
  Container,
  Button,
  Paper,
  Input,
  Avatar,
  Text,
  Loading,
} from 'components'
import logo from 'assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { authentication } from 'redux/modules/user'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const isLogged = useSelector((state) => !!state.user.token)
  if (isLogged) history.replace('/')

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setLoading(true)
    const success = await dispatch(authentication({ username, password }))
    setLoading(false)
    if (success) history.replace('/')
  }

  return (
    <Container full center>
      <Loading open={loading} />
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
            <Text variant="body1">Insira seus dados para continuar </Text>
          </Container>

          <Input
            label="Usuário"
            required
            value={username}
            onChange={(evt) => {
              setUsername(evt.target.value)
            }}
          />
          <Input
            label="Senha"
            required
            type="password"
            value={password}
            onChange={(evt) => {
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
