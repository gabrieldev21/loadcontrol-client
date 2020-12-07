import React from 'react'
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

const rows = [
  {
    id: 1,
    name: 'Apx2000',
    serialNumber: 'JK46958',
    price: 'R$ 5000,00',
  },
  {
    id: 2,
    name: 'Xts1500',
    serialNumber: 'ZICOIDE2305',
    price: 'R$ 3000,00',
  },
]

const Motorola = () => {
  const history = useHistory()
  const classes = useStyles()

  const redirectRegister = () => {
    history.push(`/motorola/cadastrar`)
  }

  return (
    <DefaultLayout>
      <div className={classes.header}>
        <Text variant="h5">Reserva Motorola</Text>
        <Button onClick={redirectRegister}>Cadastrar</Button>
      </div>
      <Table
        columns={columns}
        rows={rows.map((r) => ({ ...r, actions: <Actions id={r.id} /> }))}
      />
    </DefaultLayout>
  )
}

export default Motorola
