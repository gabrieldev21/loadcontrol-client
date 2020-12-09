import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import EditIcon from '@material-ui/icons/Create'
import RemoveIcon from '@material-ui/icons/Delete'
import { useHistory } from 'react-router-dom'

import { setRows } from 'redux/modules/reservation'

const ITEM_HEIGHT = 48

const Actions = ({ id }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const history = useHistory()
  const dispatch = useDispatch()
  const rows = useSelector((state) => state.reservation.rows)

  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    dispatch(setRows(rows.filter((r) => r.id.toString() !== id.toString())))
    setAnchorEl(null)
  }

  const redirectEdit = () => {
    history.push(`/harris/editar/${id}`)
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={redirectEdit}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          Editar
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <RemoveIcon />
          </ListItemIcon>
          Remover
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Actions
