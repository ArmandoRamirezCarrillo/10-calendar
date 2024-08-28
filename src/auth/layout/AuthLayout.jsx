import { Grid2, Typography } from '@mui/material'

export const AuthLayout = ({children, title = ''}) => {
  return (
    <Grid2 container spacing={0} direction='column' alignItems='center' justifyContent='center' sx={{minHeight: '100vh', padding: 4}}>
        <Grid2 alignItems='center' className='box-shadow' xs={3} sx={{width: {md:450}, backgroundColor: 'white', padding:3, borderRadius:2}}>
            <Typography variant="h5" sx={{mb:1, ml:19}}>{title}</Typography>
            {children}
        </Grid2>
    </Grid2>
  )
}