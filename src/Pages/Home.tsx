import { useSelector, useDispatch } from 'react-redux';
import {Box, Typography} from '@mui/material';
import {useDisplayUserQuery} from "../redux/authApi";
import { useEffect } from "react";
import { RootState } from '../redux/store';
import {setUser} from "../redux/authSlice";

const Home = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const { data: userFromApi } = useDisplayUserQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            dispatch(setUser(JSON.parse(storedUser)));
        }
    }, [dispatch]);




    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
            }}
        >
            {user?.name || userFromApi?.name ? (
                <>
                    <Typography variant="h5">Welcome, {user?.name || userFromApi?.name}</Typography>
                    <Typography variant="subtitle1">Email: {user?.email || userFromApi?.email}</Typography>
                </>
            ) : (
                <Typography variant="h6">No user logged in. Please log in.</Typography>
            )}
        </Box>
    );
};

export default Home;
