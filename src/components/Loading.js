import React from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/core/styles'

import { Avatar } from 'components'
import logo from 'assets/images/logo.png'

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const Loading = ({ open, ...props }) => {
  const classes = useStyles(props)
  return (
    <Modal
      className={classes.modal}
      disableAutoFocus
      disableEnforceFocus
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div>
          <Avatar
            size={120}
            style={{
              marginBottom: '20px',
              padding: 8,
              animation: 'spin 2s linear infinite',
              backgroundColor: 'transparent',
            }}
            src={logo}
          />
        </div>
      </Fade>
    </Modal>
  )
}

export default Loading
