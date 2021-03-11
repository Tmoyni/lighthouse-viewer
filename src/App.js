import './App.css';
import Report from './components/Report'

//pull in all json files from a folder and add to allReports as an object
const context = require.context('./report/03-11-21', true, /.json$/);
const allReports = {};
context.keys().forEach((key) => {
  const fileName = key.replace('./', '');
  const resource = require(`./report/03-11-21/${fileName}`);
  const namespace = fileName.replace('.json', '');
  allReports[namespace] = JSON.parse(JSON.stringify(resource));
});

//pull in all json files from a folder and add to allReports as an object
const contextSrc = require.context('./report/srcset-test', true, /.json$/);
const allReportsSrc = {};
contextSrc.keys().forEach((key) => {
  const fileNameSrc = key.replace('./', '');
  const resourceSrc = require(`./report/srcset-test/${fileNameSrc}`);
  const namespaceSrc = fileNameSrc.replace('.json', '');
  allReportsSrc[namespaceSrc] = JSON.parse(JSON.stringify(resourceSrc));
});

let reports = Object.entries(allReports).map(([key,value],i) => {
  if (key !== "summary") {
    return <Report key={i} name={key} info={value} secondReport={allReportsSrc[key]}/>
  } else return ""
})


function App() {

  return (
    <div className="App">
      <div className="container">

          {reports}

      </div>
    </div>
  );
}

export default App;
