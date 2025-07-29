import Header from "./Components/Header";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";


function App(){
  return(
    <>
    <Provider store={appStore}>
    <Header/>
    <Nav/>
    <Outlet/>
    </Provider>
    </>
  )
}

export default App;