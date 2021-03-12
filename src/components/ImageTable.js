import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'url', headerName: 'Url', flex: .5 },
  { field: 'totalBytes', headerName: 'Total Bytes', type: 'number', flex: 1 },
  { field: 'wastedBytes', headerName: 'Wasted Bytes', type: 'number', flex: 1 },
  { field: 'wastedPercent', headerName: 'Wasted Percent', type: 'number', flex: 1 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
];




const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function ImageTable(props) {
  console.log(props.images)
  
  const imageArray = props.images.map((img, i) => {
    let thumbnail = <img src={img.url} />
    let wasted = Math.floor(img.wastedPercent)
    return {id: i, url: thumbnail, totalBytes: img.totalBytes, wastedBytes: img.wastedBytes, wastedPercent: wasted}
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={imageArray} columns={columns} />
    </div>
  );
}
