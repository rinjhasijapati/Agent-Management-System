import React, {useEffect, useState} from 'react';
import {Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Typography, IconButton} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {Controller, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useLazyDisplayUserQuery, useLoginUserMutation} from '../redux/authApi';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../redux/authSlice';
import {RootState} from "../redux/store.ts";

interface LoginForm {
    email: string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {control, handleSubmit, formState: {errors}, setError, clearErrors} = useForm<LoginForm>();
    const [showPassword, setShowPassword] = useState(false);
    const [loginUser, {isLoading}] = useLoginUserMutation();
    const [fetchUser] = useLazyDisplayUserQuery();

    // Retrieve user from Redux state
    const user = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        // If user is already logged in, redirect to home
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onSubmit = async (data: LoginForm) => {
        clearErrors()

        try {
            const {data: result, status} = await loginUser(data).unwrap();
            console.log(result);
            if (status === 200 || status === 204) {
                const userData = await fetchUser().unwrap();
                localStorage.setItem('user', JSON.stringify(userData));
                dispatch(setUser(userData));
                navigate('/home');
            }
        } catch (err) {
            const error = err as { status?: number; data?: { errors?: { email?: string[] } } };
            if (error.status === 422 && error.data?.errors?.email) {
                setError('email', {message: error.data?.errors?.email[0]});
            } else {
                setError('email', {message: "An unexpected error occurred. Please try again."});
            }
        }
    };


    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: 2
            }}
        >
            <Typography variant="h4" sx={{marginBottom: 2}}>Login</Typography>

            <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                    required: "Email is required",
                    pattern: {
                        value: /^[\w-]+@([\w-]+\.)+\w{2,4}$/,
                        message: "Invalid email address"
                    }
                }}
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Email"
                        variant="outlined"
                        sx={{marginBottom: 2, width: '300px'}}
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                    />
                )}
            />


            <FormControl variant="outlined" sx={{width: '300px'}} error={!!errors.password}>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    {...control.register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters long"
                        }
                    })}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>

            <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{margin: 4, width: '100px', height: '50px'}}
                disabled={isLoading}
            >
                {isLoading ? 'Loading...' : 'Login'}
            </Button>
        </Box>
    );
};

export default Login;
