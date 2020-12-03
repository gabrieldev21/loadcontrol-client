import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { DefaultLayout, Button, Table, Text } from 'components'
import Actions from '../Motorola/Actions'

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
    name: 'Falcon 3',
    serialNumber: 'JK46958',
    price: 'R$ 10.000,00',
    actions: <Actions />,
  },
  {
    name: 'Falcon 2',
    serialNumber: 'ZICOIDE2305',
    price: 'R$ 30.000,00',
    actions: <Actions />,
  },
]

const Harris = () => {
  const classes = useStyles()
  return (
    <DefaultLayout>
      <div className={classes.header}>
        <Text variant="h5">Reserva Harris</Text>
        <Button>Cadastrar</Button>
      </div>
      <Table columns={columns} rows={rows} />
    </DefaultLayout>
  )
}

export default Harris
