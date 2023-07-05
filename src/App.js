import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ChildrensHousePage from "./pages/ChildrensHouse";
import SocialHousingPage from "./pages/SocialHousing";
import HousingComplexPage from "./pages/HousingComplex";
import ElderlyPeopleHousingPage from "./pages/ElderlyPeopleHousing";
import ClimbingCenterPage from "./pages/ClimbingCenter";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/childrenshouse", element: <ChildrensHousePage /> },
  { path: "/socialhousing", element: <SocialHousingPage /> },
  { path: "/housingcomplex", element: <HousingComplexPage /> },
  { path: "/elederlypeoplehousing", element: <ElderlyPeopleHousingPage /> },
  { path: "/climbingcenter", element: <ClimbingCenterPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
