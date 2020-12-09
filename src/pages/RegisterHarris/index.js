import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import { DefaultLayout, Text, Input, Button } from 'components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '700px',
  },
  firstButton: {
    marginRight: 16,
    padding: 10,
  },
})

const RegisterHarris = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleSave = () => {
    history.push(`/harris`)
  }
  const handleCancel = () => {
    history.push(`/harris`)
  }

  return (
    <DefaultLayout>
      <Text variant="h5">Cadastrar Harris</Text>
      <div className={classes.form}>
        <Input label="Nome" />
        <Input label="Número de Série" />
        <Input label="Preço" />
        <div>
          <Button
            color={'secondary'}
            className={classes.firstButton}
            onClick={handleCancel}
          >
            Cancelar
          </Button>
          <Button onClick={handleSave}>Salvar</Button>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default RegisterHarris
