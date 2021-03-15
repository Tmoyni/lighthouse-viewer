import './App.css';
import React from 'react';
import ReportsContainer from './components/ReportsContainer'
import ReportsList from './components/ReportsList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// let jsonReport = allReports[Object.keys(allReports)[0]];
// console.log(jsonReport)

//pull in all json files from a folder and add to allJsonOld as an object
const context = require.context('./report/03-11-21', true, /.json$/);
const allJsonOld = {};
context.keys().forEach((key) => {
  const fileName = key.replace('./', '');
  const resource = require(`./report/03-11-21/${fileName}`);
  const namespace = fileName.replace('.json', '');
  allJsonOld[namespace] = JSON.parse(JSON.stringify(resource));

});

// pull in all json files from a folder and add to allJson as an object
const contextNew = require.context('./report/03-15-21', true, /.json$/);
const allJsonNew = {};
contextNew.keys().forEach((key) => {
  const fileNameNew = key.replace('./', '');
  const resourceNew = require(`./report/03-15-21/${fileNameNew}`);
  const namespaceNew = fileNameNew.replace('.json', '');
  allJsonNew[namespaceNew] = JSON.parse(JSON.stringify(resourceNew));
});
class App extends React.Component {

  render() {
    return (
      <div className="App">
        {/* <div className="container">
          <button>Image Reports</button>
          <button>Lighthouse Reports List</button>
          <div>{this.state.date}</div>

        </div> */}

        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/report-list">Report List</Link>
                </li>
                <li>
                  <Link to="/image-report">Image Report</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/report-list">
                <ReportsList allJsonNew={allJsonNew} allJsonOld={allJsonOld}/>
              </Route>
              <Route path="/image-report">
                <ReportsContainer allJsonNew={allJsonNew} allJsonOld={allJsonOld}/>
              </Route>
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
