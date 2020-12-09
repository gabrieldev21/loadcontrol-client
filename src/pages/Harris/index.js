import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { DefaultLayout, Button, Table, Text } from 'components'
import Actions from './Actions'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
})

const columns = [
  {
    name: 'name',
    text: 'Nome',
  },
  {
    name: 'serialNumber',
    text: 'Número de Série',
  },
  {
    name: 'price',
    text: 'Preço',
  },
  {
    name: 'actions',
    text: 'Ações',
  },
]

const Harris = () => {
  const rows = useSelector((state) => state.reservation.rows)
  const history = useHistory()
  const classes = useStyles()

  const redirectRegister = () => {
    history.push(`/harris/cadastrar`)
  }

  return (
    <DefaultLayout>
      <div className={classes.header}>
        <Text variant="h5">Reserva Harris</Text>
        <Button onClick={redirectRegister}>Cadastrar</Button>
      </div>
      <Table
        columns={columns}
        rows={rows.map((r) => ({ ...r, actions: <Actions id={r.id} /> }))}
      />
    </DefaultLayout>
  )
}

export default Harris
