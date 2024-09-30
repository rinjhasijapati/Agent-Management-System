// const NAVIGATION: Navigation = [
//     {
//         segment: 'dashboard',
//         title: 'Dashboard',
//     },
//     {
//                     segment: 'agents',
//                     title: 'Agents',
//                     // icon: <FolderIcon />,
//                     children: [
//                         {
//                             segment: 'add-agents',
//                             title: 'Add New Agents',
//                         },
//                         {
//                             segment: 'update-agents',
//                             title: 'Update Agents',
//                         },
//                         {
//                             segment: 'delete-agents',
//                             title: 'Delete Agents',
//                         },
//                         {
//                             segment: 'view-agents',
//                             title: 'View Agents',
//                         },
//                     ],
//                 },
//                 {
//                     segment: 'locations',
//                     title: 'Locations',
//                     children: [
//                         {
//                             segment: 'country',
//                             title: 'Country',
//                             children: [
//                                 {
//                                     segment: 'add-country',
//                                     title: 'Add',
//                                 },
//                                 {
//                                     segment: 'update-country',
//                                     title: 'Update',
//                                 },
//                                 {
//                                     segment: 'delete-country',
//                                     title: 'Delete',
//                                 },
//                                 {
//                                     segment: 'view-country',
//                                     title: 'View',
//                                 },
//                             ],
//                         },
//                         {
//                             segment: 'area',
//                             title: 'Area',
//                             children: [
//                                 {
//                                     segment: 'add-area',
//                                     title: 'Add',
//                                 },
//                                 {
//                                     segment: 'update-area',
//                                     title: 'Update',
//                                 },
//                                 {
//                                     segment: 'delete-area',
//                                     title: 'Delete',
//                                 },
//                                 {
//                                     segment: 'view-area',
//                                     title: 'View',
//                                 },
//                             ],
//                         },
//                         {
//                             segment: 'main-location',
//                             title: 'Main Location',
//                             children: [
//                                 {
//                                     segment: 'add-main-location',
//                                     title: 'Add',
//                                 },
//                                 {
//                                     segment: 'update-main-location',
//                                     title: 'Update',
//                                 },
//                                 {
//                                     segment: 'delete-main-location',
//                                     title: 'Delete',
//                                 },
//                                 {
//                                     segment: 'view-main-location',
//                                     title: 'View',
//                                 },
//                             ],
//                         },
//                         {
//                             segment: 'sub-location',
//                             title: 'Sub Location',
//                             children: [
//                                 {
//                                     segment: 'add-sub-location',
//                                     title: 'Add',
//                                 },
//                                 {
//                                     segment: 'update-sub-location',
//                                     title: 'Update',
//                                 },
//                                 {
//                                     segment: 'delete-sub-location',
//                                     title: 'Delete',
//                                 },
//                                 {
//                                     segment: 'view-sub-location',
//                                     title: 'View',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
// ];
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from '../Components/Navbar.tsx';
import Sidebar from '../Components/Sidebar.tsx';

function DashboardLayout() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Navbar />
                <Outlet />
            </Box>
        </Box>
    )
}

export default DashboardLayout;