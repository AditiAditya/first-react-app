// import logo from './logo.svg';
import './App.css';
import Blockcard from './blockcard';
import React from 'react';



function App() {
  const blockArr = [
    {
      id: 1,
      title: "Blog Title 1",
      descriptation: "Lorem Ipsum3 Lorem Ipsum3 Lorem Ipsum3 Lorem Ipsum3"
    },

    {
      id: 2,
      title: "Blog Title 2",
      descriptation: "Lorem Ipsum3 Lorem Ipsum3 Lorem Ipsum3 Lorem Ipsum3"
    },

    {
      id: 3,
      title: "Blog Title 3",
      descriptation: "Lorem Ipsum3 Lorem Ipsum3 Lorem Ipsum3 Lorem Ipsum3"
    }
  ]

  const Blockcards = blockArr.map((item, pos) => {
    console.log(item);
  
    return (
      <Blockcard key={position}  title = "Test Title" />
  
     )

  })

        return (
        <div className="App">
          {Blockcards}
        </div>
        );
}

        export default App;
