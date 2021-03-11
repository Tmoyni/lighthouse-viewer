import '../App.css';
import ImageReport from './ImageReport'
import ReportViewer from 'react-lighthouse-viewer';
import React from 'react';


class ReportsList extends React.Component {
  state = {
    jsonReport: null,
    jsonClicked: false
  }

  componentDidMount() {
    if (Object.keys(this.props.allJsonOld).length !== 0) {
      let value = this.props.allJsonOld[Object.keys(this.props.allJsonOld)[0]]

      this.setState(state => ({
        jsonClicked: true,
        jsonReport: value 
      }));
    }
    
  }

  handleClick(value) {
    console.log("clicked", this.state)
    this.setState(state => ({
      jsonClicked: true,
      jsonReport: value
    }));
  }


  render() {
    let oldList = Object.entries(this.props.allJsonOld).map(([key,value],i) => {
      let name
      if (key !== 'summary') {
        if (key === 'snowehome_com.report') {
          name = 'home'
        } else {
          let name1 = key.split('snowehome_com_')[1]
          name = name1.split('.report')[0].split('_').join('/')
        }
        return <li key={i} onClick={() => this.handleClick(value)}>{name}</li>
      } else return ""

    })
    let newList = Object.entries(this.props.allJsonNew).map(([key,value],i) => {
      let name
      if (key !== 'summary') {
        if (key === 'snowehome_com.report') {
          name = 'home'
        } else {
          let name1 = key.split('snowehome_com_')[1]
          name = name1.split('.report')[0].split('_').join('/')
        }
        return <li key={i} onClick={() => this.handleClick(value)}>{name}</li>
      } else return ""    
    })

    // let newList = 

    // let jsonReport = this.props.allJsonOld[Object.keys(this.props.allJsonOld)[0]];
    // console.log(jsonReport)

    return (
      <div className='list-report'>
        <ul className="list">
          <h4>Reports from 03/11/21</h4>
          {oldList}
          <br></br>
          <h4>Srcset Test</h4>
          {newList}
        </ul>
        <div className='lighthouse-report'>
          {this.state.jsonClicked 
            ? <ReportViewer json={this.state.jsonReport} />
            : ""
          }
        </div>
      </div>
    );
  }
}

export default ReportsList;
