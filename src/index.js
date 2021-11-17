import React from "react";
import reactDom from "react-dom";
import App from './App'

reactDom.render(
<App/>, 
document.getElementById('root')
);




//import Button from "./components/Button";

//componente funcional

// const handleAlert = ()=>{
//   alert('Hola...!!!')
// }

// const Saludar = (props) => {
//   return (
//     <div>
//       <h1>{props.children}</h1>
//     </div>
//   );
// };

// //componente de clase
// class Layout extends React.Component {
//   render() {
//     return (
//       <div className="layout">
//         <header>
//           <Button handleAlert={handleAlert}>Alerta</Button>
//         </header>

//         <main>{this.props.children}</main>
//       </div>
//     );
//   }
// }

// reactDom.render(
//   <Layout>
//     <Saludar>Hola, Germán 😁</Saludar>
//   </Layout>,
//   document.getElementById("root")
// );
