import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Admin from '../Components/Admin/Admin';
import Employee from '../Components/Employee/Employee';
import CustomAuth from '../Components/CustomAuth/Auth';
import PrintAdminReport from '../Components/Print/Expample';
import PrintEmployeeReport from "../Components/Employee/Print/Expample";
import Driver from "../Components/Driver/Driver"

class Routes extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component ={CustomAuth}/>
                    <Route exact path="/admin" component ={Admin}/>
                    <Route exact path="/employee" component ={Employee}/>
                    <Route exact path="/driver" component ={Driver}/>
                    <Route exact path="/print/admin/report" component ={PrintAdminReport}/>
                    <Route exact path="/print/eployee/report" component ={PrintEmployeeReport}/>
                    
                </Switch>
                </Router>
        )
    }
}
export default Routes;
