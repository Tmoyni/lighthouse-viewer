import '../App.css';
import ImageReport from './ImageReport'
import ReportViewer from 'react-lighthouse-viewer';
import React from 'react';

// let jsonReport = this.props.allJsonOld[Object.keys(allJsonOld)[0]];
// console.log(jsonReport)
class ReportsContainer extends React.Component {
  
  render() {
    let imageReports = Object.entries(this.props.allJsonOld).map(([key,value],i) => {
      console.log(key)
      if (key !== "summary") {
        return <ImageReport key={i} name={key} info={value} secondReport={this.props.allJsonNew[key]}/>
      } else return ""
    })

    return (
      <div className="container">
        {imageReports}
      </div>
    );
  }
}

export default ReportsContainer;
