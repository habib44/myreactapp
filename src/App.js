import React from "react";
import "./App.css";
import { Viewer } from "@grapecity/activereports-react";
import { Core } from "@grapecity/activereports";
import {BrowserRouter as Router,Route, Link,Switch} from "react-router-dom";
import Report from "./Report";
import Report2 from "./Report2";
import Report3 from "./Report3";
import Report4 from "./Report4";
import Report5 from "./Report5";
import Report6 from "./Report6";
import Report7 from "./Report7";
function App() {

 // Core.setLicenseKey("192.168.100.206,E755952211643959#B0IUdRHR6pkeCtyQGV4L9ZUQtNDRMp4Yr2CTSpnSygDMPFlQZlWV7sERHtWVlF4SnRGNxRnQ4VmdYh7R6djUalXS7lnN5InQwtSbDFVUoNWaEJ6T0lVYq3STxhVUvQjMVZVV9t6VNdVTotiQSV7NTtyV9hUYMVzTY5UUxF6MXVVN8RHMBdjYvt4S4c7cIJzYwMGZBNmYlFTVJZ4cwxmbxl6KPJDUrVFdCZHR73SWBNWRUFnVKpHM6YUOBlVUiFGNwhGMld7KqdTWGFlVHFjQSNDavtCWZ56LIVWVxkje9k6QJhzcpNUM0JTNj5kQ694UENkN8VERRlnTXR5QiojITJCLigTQ8UENFJDNiojIIJCL8ETMzcTO5ETM0IicfJye#4Xfd5nIJZVQFJiOiMkIsIiMWByUKRncvBXZSVmdpR7YBJiOi8kI1tlOiQmcQJCLiYTN6QjNwASOyITMwIDMyIiOiQncDJCLigjMxATMyAjMiojIwhXRiwiI6AjMuADMx8CO6EjLykTMiojIz5GRiwiIoNWZUBCblVXclNlI0ISYONkIsUWdyRnOiwmdFJCLikTN9MDN6ETMyITN9UTN7IiOiQWSiwSflNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPnJVawM6VoFnWSFmW9lTOXl7YYFXbEJHe4B7bjNlUz2WS4UUR6EDM6EldnlVdrIFNsdUQw5GauhDUIFWNO9ESrR5VD3WeoRXRUx6RuBFNTJ5UUdUUoV4V7o1MNV");

 Core.setLicenseKey("Sequel Tech,E175478515393748#B0fauZ5bRV7QDFmNoFmY4hERUFnVw2WMW5GMYR6cy3WYIZWU4lVQppXOrV4MUlHSNl5KydnZrNzSH94SYp4L0NlSE96NalzNtp7ZIBFdaJ6T6ZHeipVSpZnNw9UN6FWQmF4NFFEOIhEaaJlUr8WdEVmb9lzStxmcrBFbmFGStVHNBdWQ6l6RrZnN6d6N4YTaIxEVTdUQsJTaVtCciF6VwFHZZtUcpJUcjh4ZzRUZqlXTidnWqhkZ9dFN8UTVMRUem34M98GWwZ4ND5UNiR6YHFmYaVmYZF5ThJXdWVlRxUTQ6IUMPN5dJhTWplzTOlkTiojITJCLiEzN9IjQFZ4NiojIIJCLxUzNygTMwUjN0IicfJye#4Xfd5nIJZVQFJiOiMkIsIiMWByUKRncvBXZSVmdpR7YBJiOi8kI1tlOiQmcQJCLicjMyADMxACOxEDMxIDMyIiOiQncDJCLicTMyATMyAjMiojIwhXRiwiIoNWZUBCblVXclNlI0ISYONkIsUWdyRnOiwmdFJCLigDN7MTOzUTM5gzN4UzNxIiOiQWSiwSflNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPnBTVJZkcu3ySlRTMjVVSMR6KExGM9R5N5hGOm9EU6FUSBFTZHFHWqlHaER6dEFERQhmQK3CePVHd426LGJVThhkeSZlRjl4MEJ6LSN4LBdzUj3mVzo6TNlFWl3kZ7hmTHJWWO5ZbuJ");

  
  return (


<>

    <Router>
            <ul id="sidemenu" className="box_style" style={{height: "57px"}}>
                    <li id="Report1">
                        <Link to="/Report" className="home_icon active"><strong>Detailed Report</strong></Link>
                        
                    </li>
                    <li id="Report2">
                        <Link to="/Report2" className="home_icon active"><strong>Group Report Response from server</strong></Link>
                        
                    </li>
                    <li id="Report3">
                        <Link to="/Report3" className="home_icon active"><strong>Charging list</strong></Link>
                        
                    </li>
                    <li id="Report4">
                        <Link to="/Report4" className="home_icon active"><strong>Charging list group by Rpt</strong></Link>
                        
                    </li>
                    <li id="Report5">
                        <Link to="/Report5" className="home_icon active"><strong>Charging list group by loc Rpt (Single entry)</strong></Link>
                        
                    </li>
                    <li id="Report6">
                        <Link to="/Report6" className="home_icon active"><strong>Charging list group by loc,plan and plan amount Rpt</strong></Link>
                        
                    </li>
                    <li id="Report7">
                        <Link to="/Report7" className="home_icon active"><strong>CPT Utilization</strong></Link>
                        
                    </li>
                    
                 </ul>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <Switch>
               
                  <Route path="/Report" component={Report}></Route>
                  <Route path="/Report2" component={Report2}></Route>
                  <Route path="/Report3" component={Report3}></Route>
                  <Route path="/Report4" component={Report4}></Route>
                  <Route path="/Report5" component={Report5}></Route>
                  <Route path="/Report6" component={Report6}></Route>
                  <Route path="/Report7" component={Report7}></Route>
              

                  </Switch>
                      
                
                

    </Router>


   

</>

  
  );
}

export default App;