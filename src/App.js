import logo from "./logo.svg";
import "./App.css";
import Cards from "./Cards";
import Sdata from "./Sdata";

// function ncard(value) {
//   return (
//     <Cards
//       imgsrc={value.imgsrc}
//       title={value.title}
//       sname={value.sname}
//       link={value.link}
//     />
//   );
// }


function App() {
  
  return (
    <>
      <h1 className="heading_style">
        Top 5 Programming Languages of all times
      </h1>
      {/* {Sdata.map(ncard)} */}
      {Sdata.map((value, index, myArray) => {
        console.log("Value: ", value);
        console.log("Index: ", index);
        console.log("Array: ", myArray);
        return (
          <Cards
            imgsrc={value.imgsrc}
            title={value.title}
            sname={value.sname}
            link={value.link}
          />
        );
      })}

      {/* <Cards
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    /> */}
    </>
  );
}

export default App;
