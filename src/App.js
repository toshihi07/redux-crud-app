import React from "react";


//クラスコンポーネント
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input
//           type="text"
//           onClick={() => {
//             console.log("a");
//           }}
//         />
//       </React.Fragment>
//     );
//   }
// }


const App = () =>{
  return (
    <div>
      <Cat />
      <Cat />
      <Dog />
      <Dog />
    </div>  )
}

const Dog = () =>{
  return <div>わんわん</div>
}

const Cat = () =>{
  return <div>にゃー</div>
}

export default App;
