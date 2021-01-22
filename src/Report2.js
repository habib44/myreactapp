import React from "react";
import "./App.css";
import { Viewer } from "@grapecity/activereports-react";
import { Core } from "@grapecity/activereports";
import {BrowserRouter as Router,Route, Link,Switch} from "react-router-dom";

function Report2() {

  

  return (


   


    <div id="viewer-host">
   

      <Viewer report={{ Uri: 'report2.rdlx-json' }} />
    </div>



  
  );
}

export default Report2;