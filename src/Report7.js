import React, { useState } from "react";
import "./App.css";
import { Viewer } from "@grapecity/activereports-react";
import { Core } from "@grapecity/activereports";
import {BrowserRouter as Router,Route, Link,Switch} from "react-router-dom";
import moment from 'moment'
import DatePicker from 'react-date-picker';

async function loadData(inputparam) {
  // Use the Fetch Api to pull the data https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const headers = new Headers();
  let param="https://epmcore.practiceehr.com/cptutilization"+inputparam
  const dataRequest = new Request(
    param,
    {
      headers: headers,
    }
  );

  const response = await fetch(dataRequest);
  const data = await response.json();
  return data;
}

async function loadReport() {
  // load report definition from the file
  const reportResponse = await fetch(
    "CPTutilization.rdlx-json"
  );
  const report = await reportResponse.json();
  return report;
}

 function Report7() {
   
  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState(new Date());

  

  const viewerRef = React.useRef();

   async function onclickload(){

    let input="?param="+moment(value).format("DD-MM-YYYY")+","+moment(value1).format("DD-MM-YYYY");
    
 
    const data = await loadData(input);
      
    const report = await loadReport();
    report.DataSources[0].ConnectionProperties.ConnectString =
      "jsondata=" + JSON.stringify(data);
    viewerRef.current.Viewer.open(report);
  

   }
  
  
  

  return (


   
    

    <div id="viewer-host">
    
      <DatePicker
        onChange={onChange}
        value={value}
        format="dd-MM-yyyy"
      />
       <DatePicker
        onChange={onChange1}
        value={value1}
        format="dd-MM-yyyy"
      />
     <button onClick={onclickload}>Load  Report</button>

   <Viewer ref={viewerRef} />
    </div>



  
  );
}

export default Report7;