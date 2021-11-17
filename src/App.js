import Title from "./components/Title";

 const titles = undefined;
 //[
//   "Esta es nuestra primera app",
//   "Este es nuestro segundo título",
//   "Tercer",
// ];

function App() {
  return (
    <div>
      {titles?.map((title, i) => (
        <Title title={title} key={i} />
      ))}
      <Title title='hola...'/>
    </div>
  );
}

export default App;

/*     <Title title='Esta es nuestra primera app'/>
       <Title title='Este es nuestro segundo título'/>
       <Title title='Tercer'/> 
*/
