import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Items from "./components/items";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул Серый',
          img: 'chair-grey.jpeg',
          desc: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
          category: 'chairs',
          price: '39.99',
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
          category: 'chairs',
          price: '20.99',
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
          category: 'chairs',
          price: '32.20',
        },
        {
          id: 4,
          title: 'Стул Белый',
          img: 'chair-white.jpeg',
          desc: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
          category: 'chairs',
          price: '32.20',
        },
        {
          id: 5,
          title: 'Настенные Светильники',
          img: 'wall-light.jpeg',
          desc: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
          category: 'chairs',
          price: '32.20',
        },
      ]
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />

      </div>
    );
  }
}

export default App; 