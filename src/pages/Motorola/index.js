import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { DefaultLayout, Button, Table, Text } from 'components'
import Actions from './Actions'

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
    name: 'Apx2000',
    serialNumber: 'JK46958',
    price: 'R$ 5000,00',
    actions: <Actions />,
  },
  {
    name: 'Xts1500',
    serialNumber: 'ZICOIDE2305',
    price: 'R$ 3000,00',
    actions: <Actions />,
  },
]

const Motorola = () => {
  const classes = useStyles()
  return (
    <DefaultLayout>
      <div className={classes.header}>
        <Text variant="h5">Reserva Motorola</Text>
        <Button>Cadastrar</Button>
      </div>
      <Table columns={columns} rows={rows} />
    </DefaultLayout>
  )
}

export default Motorola
