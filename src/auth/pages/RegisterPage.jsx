import { Button, Grid2, TextField } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { CreateOutlined } from '@mui/icons-material'

const onSubmit = (event) => {
  event.preventDefault();
  console.log('Btn Crear cuenta');
}

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <form onSubmit={onSubmit}>
        <Grid2 container alignItems='center' justifyContent='center'>
          <Grid2 xs={12} sx={{mt:2}}>
            <TextField label='nombre' type='text' placeholder='Escribe tu nombre completo' fullWidth name='nombre' value=''/>
          </Grid2>
          <Grid2 xs={12} sx={{mt:2}}>
            <TextField label='correo' type='email' placeholder='correo@dominio.com' fullWidth name='correo' value=''/>
          </Grid2>
          <Grid2 xs={12} sx={{mt:2}}>
            <TextField label='password' type='password' placeholder='Escribe tu password' fullWidth name='password' value=''/>
          </Grid2>
          <Grid2 xs={12} sx={{mt:2}}>
            <TextField label='passwordConfirm' type='password' placeholder='Confirma tu contraseña' fullWidth name='passwordConfirm' value=''/>
          </Grid2>
        </Grid2>
        <Grid2 container alignItems='center' justifyContent='center' spacing={2} sx={{mb:2, mt:2}}>
          <Button type='submit' variant='contained'>
            <CreateOutlined/>
            Crear cuenta
          </Button>
        </Grid2>
      </form>
    </AuthLayout>
  )
}