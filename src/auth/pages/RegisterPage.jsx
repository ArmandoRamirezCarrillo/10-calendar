import { Button, Grid2, TextField } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { CreateOutlined, Password } from '@mui/icons-material'
import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const registerFormFields = {
  registerName: '',
  registerEmail: '',
  registerPassword: '',
  registerPassword2: ''
}

export const RegisterPage = () => {

  const {startRegister, errorMessage} = useAuthStore();

  const {registerName, registerEmail, registerPassword, registerPassword2, onInputChange} = useForm(registerFormFields);

  const onSubmit = (event) => {
    event.preventDefault();
    if(registerPassword !== registerPassword2){
      Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
      return;
    }
    startRegister({name: registerName, email: registerEmail, password: registerPassword});
  }

  useEffect(() => {
    if(errorMessage !== undefined){
      Swal.fire('Errror en la autenticacion', errorMessage, 'error');
    }
  }, [errorMessage])

  return (
    <AuthLayout title="Registro">
      <form onSubmit={onSubmit}>
        <Grid2 container alignItems='center' justifyContent='center'>
          <Grid2 xs={12} sx={{mt:2}}>
            <TextField label='nombre' type='text' placeholder='Escribe tu nombre completo' fullWidth name='registerName' value={registerName} onChange={onInputChange}/>
          </Grid2>
          <Grid2 xs={12} sx={{mt:2}}>
            <TextField label='correo' type='email' placeholder='correo@dominio.com' fullWidth name='registerEmail' value={registerEmail} onChange={onInputChange}/>
          </Grid2>
          <Grid2 xs={12} sx={{mt:2}}>
            <TextField label='password' type='password' placeholder='Escribe tu password' fullWidth name='registerPassword' value={registerPassword} onChange={onInputChange}/>
          </Grid2>
          <Grid2 xs={12} sx={{mt:2}}>
            <TextField label='passwordConfirm' type='password' placeholder='Confirma tu contraseña' fullWidth name='registerPassword2' value={registerPassword2} onChange={onInputChange}/>
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