import React from "react";
import "./App.css";
import { Viewer } from "@grapecity/activereports-react";
import { Core } from "@grapecity/activereports";
import {BrowserRouter as Router,Route, Link,Switch} from "react-router-dom";

function Report4() {

  

  return (


   


    <div id="viewer-host">
   

      <Viewer report={{ Uri: 'charginglistRpt2grpby.rdlx-json' }} />
    </div>



  
  );
}

export default Report4;