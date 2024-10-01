import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid2, Link, TextField } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import './LoginPage.css';
import { Create, Login } from '@mui/icons-material';
import { useAuthStore, useForm } from '../../hooks';

const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
}


export const LoginPage = () => {

    const {startLogin} = useAuthStore();

    const {loginEmail, loginPassword, onInputChange: onLoginInputChange} = useForm(loginFormFields);

    const loginSubmit = (event) =>{
        event.preventDefault();
        startLogin({email: loginEmail, password: loginPassword});
    }
    
    return (
        <AuthLayout title='Login'>
            <form onSubmit={loginSubmit}>
                <Grid2 container alignItems='center' justifyContent='center'>
                    <Grid2 xs={12} sx={{mt:2}}>
                        <TextField label='correo' type='email' placeholder='correo@dominio.com' fullWidth name='loginEmail' value={loginEmail} onChange={onLoginInputChange}/>
                    </Grid2>
                    <Grid2 xs={12} sx={{mt:2}}>
                        <TextField label='password' type='password' placeholder='Contraseña' fullWidth name='loginPassword' value={loginPassword} onChange={onLoginInputChange}/>
                    </Grid2>
                </Grid2>
                <Grid2 container alignItems='center' justifyContent='center' spacing={2} sx={{mb:2, mt:1}}>
                    <Grid2 xs={12} sx={{mt:2}}>
                        <Button type='submit' variant='contained' fullWidth>
                            <Login/>
                            Login
                        </Button>
                    </Grid2>
                    <Grid2 container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to='/auth/register'>
                            <Create/> Crear Cuenta
                        </Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    )
}