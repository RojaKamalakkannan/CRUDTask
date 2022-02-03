import React, { useEffect,useState } from 'react';
import axios from 'axios';

function CrudComponent() {
  const [APIData, setAPIData] = useState([]);
  
  useEffect(() => {
    axios.get('http://api.countrylayer.com/v2/all?access_key=77b3fa2483e661dff46e5a397fda3b33')
        .then((response) => {
            setAPIData(response.data);
            console.log(response.data);
        })
}, [])
 

    return (
      <>
        <h3> Crud Component </h3>
        <table border="1">
          <thead>
            <tr>
              <td> <b>Name</b> </td>
              <td> <b>Capital </b></td>
              <td> <b>Region</b> </td>
            </tr>
          </thead>
          <tbody>
  {APIData.map(data => (
         <tr key={data.name}>
          <td>{data.name}</td>
           <td>{data.capital}</td>
           <td>{data.region}</td>
        </tr>
  ))}
</tbody>
        </table>
      </>
    );
            }


export default CrudComponent;





// import React from 'react';
// import axios from 'axios';

// class CrudComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       user: [],
//       name: '',
//       capital: '',
//       region: '',
      
//     };
//   }
//   async componentDidMount() {
//     var response = await axios.get(
//       'http://api.countrylayer.com/v2/all?access_key=5443fe2701a425058ec0b99eec169bc9'
//     );
//     this.setState({ user: response.data });
//     console.log(response.data)
//   }
//   handleSubmit = async (e) => {
//     e.preventDefault();
   
//   };
//   render() {
//     return (
//       <>
//         <h3> Crud Component </h3>
//         <table border="1">
//           <thead>
//             <tr>
//               <td> <b>Name</b> </td>
//               <td> <b>Capital </b></td>
//               <td> <b>Region</b> </td>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.user.map((data) => (
//               <tr key={data.name}>
//                 <td> {data.name} </td>
//                 <td> {data.capital} </td>
//                 <td> {data.region} </td>
//                 <td>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }


// export default CrudComponent;
