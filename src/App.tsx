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
import UpdateCountryPage from "./Pages/Locations/Country/UpdateCountryPage.tsx";
import DeleteCountryPage from "./Pages/Locations/Country/DeleteCountryPage.tsx";
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
                            <Route path="/add-agent" element={<AddAgentPage />} />
                            <Route path="/update-agent/:id" element={<UpdateAgentPage />} />
                            <Route path="/delete-agent/:id" element={<DeleteAgentPages />} />
                            <Route path="/view-agents" element={<ViewAgentsPage />} />
                            <Route path="/add-area" element={<AddAreaPage />} />
                            <Route path="/update-area/:id" element={<UpdateAreaPage />} />
                            <Route path="/delete-area/:id" element={<DeleteAreaPage />} />
                            <Route path="/view-areas" element={<ViewAreasPage />} />
                            <Route path="/add-country" element={<AddCountryPage />} />
                            <Route path="/update-country/:id" element={<UpdateCountryPage />} />
                            <Route path="/delete-country/:id" element={<DeleteCountryPage />} />
                            <Route path="/view-countries" element={<ViewCountriesPage />} />
                            <Route path="/add-main-location" element={<AddMainLocationPage />} />
                            <Route path="/update-main-location/:id" element={<UpdateMainLocationPage />} />
                            <Route path="/delete-main-location/:id" element={<DeleteMainLocationPage />} />
                            <Route path="/view-main-locations" element={<ViewMainLocationsPage />} />
                            <Route path="/add-sub-location" element={<AddSubLocationPage />} />
                            <Route path="/update-sub-location/:id" element={<UpdateSubLocationPage />} />
                            <Route path="/delete-sub-location/:id" element={<DeleteSubLocationPage />} />
                            <Route path="/view-sub-locations" element={<ViewSubLocationsPage />} />
                        </Route>
                    </Route>
                </Routes>
        </Router>
    );
};

export default App;






























