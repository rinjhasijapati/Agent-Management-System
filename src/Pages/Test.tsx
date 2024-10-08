import {useState} from "react";
import {alpha, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputBase, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import {useSearchParams} from "react-router-dom";
import {useGetCountriesQuery, useDeleteCountryMutation} from "../../../redux/country/countryApi.ts";
import CustomPagination from "../../../Components/CustomPagination.tsx";

function ViewCountriesPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const page = +(searchParams.get('page') || '1')

    const perPage = +(searchParams.get('page_size') || '10')

    const searchQueryTerm = searchParams.get('search_term');

    const [searchTerm, setSearchTerm] = useState(searchParams.get('search_term'));

    const {data, isLoading, error} = useGetCountriesQuery({
        page,
        per_page: perPage,
        searchTerm: searchQueryTerm,
    });

    const [deleteCountry] = useDeleteCountryMutation();
    const [open, setOpen] = useState(false);
    const [selectedCountryId, setSelectedCountryId] = useState<number | null>(null);

    const handleClickOpen = (id: number) => {
        setSelectedCountryId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCountryId(null);
    };

    const handleChangePage = (newPage: number) => {
        setSearchParams({page: newPage, per_page: perPage, search_term: searchQueryTerm})
    };

    const handleDelete = async () => {
        if (selectedCountryId) {
            await deleteCountry(selectedCountryId);
        }
        handleClose();
    };

    // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchTerm(event.target.value);
    // }
    //
    // const handleSearch = () => {
    //     setSearchParams({page: 1, per_page: perPage, search_term: searchTerm})
    // }

    const onSearchSubmit = (data: {searchTerm: string}) => {
        setSearchParams({page: 1, per_page: perPage, search_term: data.searchTerm});
    };


    // const Search = styled('div')(({theme}) => ({
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: alpha(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //         backgroundColor: alpha(theme.palette.common.white, 0.25),
    //     },
    //     marginLeft: 0,
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //         marginLeft: theme.spacing(1),
    //         width: 'auto',
    //     },
    // }));
    //
    // const SearchIconWrapper = styled('div')(({theme}) => ({
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // }));
    //
    // const StyledInputBase = styled(InputBase)(({theme}) => ({
    //     color: 'inherit',
    //     width: '50%',
    //     '& .MuiInputBase-input': {
    //         padding: theme.spacing(1, 1, 1, 0),
    //         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //         transition: theme.transitions.create('width'),
    //         [theme.breakpoints.up('sm')]: {
    //             width: '20ch',
    //             '&:focus': {
    //                 width: '20ch',
    //             },
    //         },
    //     },
    // }));


    if (isLoading) return <CircularProgress/>;
    if (error) return <p>Error loading data</p>;

    const countryList = data?.data || [];
    const totalCount = data?.meta?.total ?? 0;
    const totalPages = Math.ceil(totalCount / perPage);

    return (
        <Box>
            {/*<Box sx={{padding: 3}}>*/}
            {/*    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>*/}
            {/*        <Search sx={{flexGrow: 0.1}}>*/}
            {/*            <SearchIconWrapper>*/}
            {/*                <SearchIcon/>*/}
            {/*            </SearchIconWrapper>*/}
            {/*            <StyledInputBase*/}
            {/*                placeholder="Search Country"*/}
            {/*                inputProps={{'aria-label': 'search'}}*/}
            {/*                value={searchTerm}*/}
            {/*                onChange={handleSearchChange}*/}
            {/*            />*/}
            {/*        </Search>*/}
            {/*        <Button*/}
            {/*            variant="contained"*/}
            {/*            onClick={handleSearch}*/}
            {/*        >*/}
            {/*            Search*/}
            {/*        </Button>*/}
            {/*    </Box>*/}
            {/*</Box>*/}
            <Box sx={{ padding: 3 }}>
                <form onSubmit={handleSubmit(onSearchSubmit)} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box sx={{ position: 'relative', flexGrow: 1 }}>
                        <SearchIcon sx={{ position: 'absolute', left: 8, top: 8 }} />
                        <input
                            {...register("searchTerm")}
                            placeholder="Search Country"
                            style={{ padding: '8px 40px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </Box>
                    <Button variant="contained" type="submit" sx={{ marginLeft: 2 }}>
                        Search
                    </Button>
                </form>
            </Box>

            <Box sx={{padding: 1.5}}>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="country table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Country Name</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {countryList.map((country) => (
                                <TableRow key={country.id}>
                                    <TableCell component="th" scope="row">
                                        {country.country_name}
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="error"
                                                onClick={() => handleClickOpen(country.id)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box display="flex" justifyContent="center" sx={{mt: 2}}>
                    <CustomPagination
                        page={page}
                        count={totalPages}
                        onPageChange={handleChangePage}
                    />
                </Box>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>
                        Delete Country
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: 'black',
                            }}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            Are you sure you want to delete this country?
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleDelete} color="error">Yes</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
}

export default ViewCountriesPage;
