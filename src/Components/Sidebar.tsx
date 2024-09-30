import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {Collapse} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

export default function Sidebar() {
const [openAgents, setOpenAgents] = useState(false);
const [openLocations, setOpenLocations] = useState(false);
const [openCountry, setOpenCountry] = useState(false);
const [openArea, setOpenArea] = useState(false);
const [openMain, setOpenMain] = useState(false);
const [openSub, setOpenSub] = useState(false);

const handleAgentsClick = () => {
    setOpenAgents(!openAgents);
};

    const handleLocationsClick = () => {
        setOpenLocations(!openLocations);
    };

    const handleCountryClick = () => {
        setOpenCountry(!openCountry);
    };

    const handleAreaClick = () => {
        setOpenArea(!openArea);
    };

    const handleMainLocationClick = () => {
        setOpenMain(!openMain);
    };

    const handleSubLocationClick = () => {
        setOpenSub(!openSub);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >

            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                        <ListItem disablePadding>
                            <ListItemButton component={RouterLink} to="/">
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleAgentsClick}>
                            <ListItemText primary="Agents" />
                            {openAgents ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>

                    <Collapse in={openAgents} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component={RouterLink} to="/view-agents" sx={{ pl: 4 }}>
                                <ListItemText primary="View All" />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/add-agent" sx={{ pl: 4 }}>
                                <ListItemText primary="Add" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                <Divider />
                <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={handleLocationsClick}>
                                <ListItemText primary="Locations" />
                                {openLocations ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>

                    <Collapse in={openLocations} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            <ListItemButton sx={{ pl: 4 }} onClick={handleCountryClick}>
                                <ListItemText primary="Country" />
                                {openCountry ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={openCountry} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton component={RouterLink} to="/" sx={{ pl: 8 }}>
                                        <ListItemText primary="View All" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Add" />
                                    </ListItemButton>
                                </List>
                            </Collapse>

                            <ListItemButton sx={{ pl: 4 }} onClick={handleAreaClick}>
                                <ListItemText primary="Area" />
                                {openArea ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={openArea} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton component={RouterLink} to="/add-area" sx={{ pl: 8 }}>
                                        <ListItemText primary="Add" />
                                    </ListItemButton>
                                    <ListItemButton component={RouterLink} to="/update-area/:id" sx={{ pl: 8 }}>
                                        <ListItemText primary="Update" />
                                    </ListItemButton>
                                    <ListItemButton component={RouterLink} to="/delete-area/:id" sx={{ pl: 8 }}>
                                        <ListItemText primary="Delete" />
                                    </ListItemButton>
                                    <ListItemButton component={RouterLink} to="/view-area" sx={{ pl: 8 }}>
                                        <ListItemText primary="View All" />
                                    </ListItemButton>
                                </List>
                            </Collapse>

                            <ListItemButton sx={{ pl: 4 }} onClick={handleMainLocationClick}>
                                <ListItemText primary="Main Location" />
                                {openMain ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={openMain} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Add" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Update" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Delete" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="View All" />
                                    </ListItemButton>
                                </List>
                            </Collapse>

                            <ListItemButton sx={{ pl: 4 }} onClick={handleSubLocationClick}>
                                <ListItemText primary="Sub Location" />
                                {openSub ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={openSub} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Add" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Update" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Delete" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="View All" />
                                    </ListItemButton>
                                </List>
                            </Collapse>

                        </List>
                    </Collapse>
                </List>
            </Drawer>
        </Box>
    );
}


