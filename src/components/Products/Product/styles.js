import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    minHeight: '100%',
  },
  media: {
    backgroundColor: '#e0e0e0',
    height: 0,
    paddingTop: '56.25%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
