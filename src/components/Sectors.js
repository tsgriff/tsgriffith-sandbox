// import React, { Component } from 'react'
// import _ from 'lodash';
// //
// import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Bar, ResponsiveContainer } from 'recharts';

// class Sectors extends Component {

//     render() {

//     const sectorDataObj = props.investmentData[1]
//     const sectorDataArr = [];
//     for (var key in sectorDataObj) {
//       sectorDataArr.push({ name: key, "% Change": parseFloat(sectorDataObj[key]), amt: parseFloat(sectorDataObj[key]) })
//     }
//     const sectorData = sectorDataArr;

//     return (
//       <section className="page-wrapper">
//         <div className="section-content">
//             <div>
//               <p className="segment-title">Sectors</p>
//               <div className="graph-desktop">
//                 <BarChart width={800} height={400} data={sectorData}
//                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                   <XAxis interval={0} tick={{ fontSize: 10, width: 2 }} dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <ReferenceLine y={0} stroke='#000' />
//                   <Bar dataKey="% Change" fill="#82ca9d" />
//                 </BarChart>
//               </div>
//               <div className="graph-mobile">
//                 <BarChart width={300} height={150} data={sectorData}
//                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                   <XAxis interval={0} style={{ display: 'none' }} dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <ReferenceLine y={0} stroke='#000' />
//                   <Bar dataKey="% Change" fill="#82ca9d" />
//                 </BarChart>
//               </div>
//             </div>
//         </div>
//       </section>
//     )
//   }
// }
