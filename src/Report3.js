import React from "react";
import "./App.css";
import { Viewer } from "@grapecity/activereports-react";
import { Core } from "@grapecity/activereports";
import {BrowserRouter as Router,Route, Link,Switch} from "react-router-dom";

function Report3() {

  

  return (


   


    <div id="viewer-host">
   

      <Viewer report={{ Uri: 'charginglistRpt1.rdlx-json' }} />
    </div>



  
  );
}

export default Report3;