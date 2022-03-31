import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    minHeight: '100%',
  },
  media: {
    height: 256,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}))
