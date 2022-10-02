import { Route,Routes } from "react-router-dom";
import Index from "../Components/Index";
import NewAccount from "./NewAccount";
import SignIn from "./SignIn";
import Carrer from "./Carrer";
import PrivateRoute from "../Components/PrivateRoute";
export default function AllRoutes(){

    return(
        
            <Routes>
                <Route path='/' element={<Index></Index>}></Route>
                <Route path='/new' element={<PrivateRoute><NewAccount/></PrivateRoute>}></Route>
                <Route path='/signin' element={<PrivateRoute><SignIn/></PrivateRoute>}></Route>
                <Route path="/career" element={<Carrer></Carrer>}></Route>


            </Routes>


        
    )
}