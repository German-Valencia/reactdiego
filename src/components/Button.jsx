//componente funcional

// function Button (props){
//     return(
//         <button>{props.children}</button>
//     );
// }

// export default Button;

var Button = (props) => {
  return (
    <button
      onClick={props.handleAlert}
    >
      {props.children}
    </button>
  );
};

export default Button;
