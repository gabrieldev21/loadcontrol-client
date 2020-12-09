import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'

import { setRows } from 'redux/modules/reservation'
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

const EditReserve = () => {
  const { id } = useParams()
  const rows = useSelector((state) => state.reservation.rows)
  const dispatch = useDispatch()
  const classes = useStyles()
  const history = useHistory()
  const row = rows.find((r) => r.id.toString() === id.toString())
  const formik = useFormik({
    initialValues: row,
  })

  const handleSave = () => {
    const idx = rows.findIndex((r) => r.id.toString() === id.toString())
    rows[idx] = formik.values
    dispatch(setRows(rows))
    history.push(`/reserve`)
  }
  const handleCancel = () => {
    history.push(`/reserve`)
  }

  return (
    <DefaultLayout>
      <Text variant="h5">Editar Rádio</Text>
      <div className={classes.form}>
        <Input
          label="Nome"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <Input
          label="Fabricante"
          id="factory"
          name="factory"
          onChange={formik.handleChange}
          value={formik.values.factory}
        />
        <Input
          label="Número de Série"
          id="serialNumber"
          name="serialNumber"
          onChange={formik.handleChange}
          value={formik.values.serialNumber}
        />
        <Input
          label="Preço"
          id="price"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
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

export default EditReserve
