import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ProtectedRoutes from "./utils/ProtectedRoutes.tsx";
import AddAgentPage from "./Pages/Agents/AddAgentPage.tsx";
import DashboardLayout from "./Components/DashboardLayout.tsx";
import UpdateAgentPage from "./Pages/Agents/UpdateAgentPage.tsx";
import DeleteAgentPages from "./Pages/Agents/DeleteAgentPages.tsx";
import ViewAgentsPage from "./Pages/Agents/ViewAgentsPage.tsx";
import AddAreaPage from "./Pages/Locations/Area/AddAreaPage.tsx";
import ViewAreasPage from "./Pages/Locations/Area/ViewAreasPage.tsx";
import DeleteAreaPage from "./Pages/Locations/Area/DeleteAreaPage.tsx";
import UpdateAreaPage from "./Pages/Locations/Area/UpdateAreaPage.tsx";
import AddCountryPage from "./Pages/Locations/Country/AddCountryPage.tsx";
import ViewCountriesPage from "./Pages/Locations/Country/ViewCountriesPage.tsx";
import AddMainLocationPage from "./Pages/Locations/MainLocation/AddMainLocationPage.tsx";
import UpdateMainLocationPage from "./Pages/Locations/MainLocation/UpdateMainLocationPage.tsx";
import DeleteMainLocationPage from "./Pages/Locations/MainLocation/DeleteMainLocationPage.tsx";
import ViewMainLocationsPage from "./Pages/Locations/MainLocation/ViewMainLocationsPage.tsx";
import AddSubLocationPage from "./Pages/Locations/SubLocation/AddSubLocationPage.tsx";
import UpdateSubLocationPage from "./Pages/Locations/SubLocation/UpdateSubLocationPage.tsx";
import DeleteSubLocationPage from "./Pages/Locations/SubLocation/DeleteSubLocationPage.tsx";
import ViewSubLocationsPage from "./Pages/Locations/SubLocation/ViewSubLocationsPage.tsx";

const App = () => {

    return (
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>} />

                    <Route element={<ProtectedRoutes/>}>
                        <Route path='/' element={<DashboardLayout />}>
                            <Route path="/" element={<Home/>}  />
                            <Route path="/agents/create" element={<AddAgentPage />} />
                            <Route path="/agent/:id/update" element={<UpdateAgentPage />} />
                            <Route path="/agent/:id/delete" element={<DeleteAgentPages />} />
                            <Route path="/agents/view" element={<ViewAgentsPage />} />
                            <Route path="/areas/create" element={<AddAreaPage />} />
                            <Route path="/area/:id/update" element={<UpdateAreaPage />} />
                            <Route path="/area/:id/delete" element={<DeleteAreaPage />} />
                            <Route path="/areas/view" element={<ViewAreasPage />} />
                            <Route path="/countries/create" element={<AddCountryPage />} />
                            <Route path="/countries/view" element={<ViewCountriesPage />} />
                            <Route path="/main-locations/create" element={<AddMainLocationPage />} />
                            <Route path="/main-location/:id/update" element={<UpdateMainLocationPage />} />
                            <Route path="/main-location/:id/delete" element={<DeleteMainLocationPage />} />
                            <Route path="/main-locations/view" element={<ViewMainLocationsPage />} />
                            <Route path="/sub-locations/create" element={<AddSubLocationPage />} />
                            <Route path="/sub-location/:id/update" element={<UpdateSubLocationPage />} />
                            <Route path="/sub-location/:id/delete" element={<DeleteSubLocationPage />} />
                            <Route path="/sub-locations/view" element={<ViewSubLocationsPage />} />
                        </Route>
                    </Route>
                </Routes>
        </Router>
    );
};

export default App;






























