import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor() {
    super()
    this.state = {
      pizzas: [],
      pizzaToEdit: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(allPizzas => this.setState({pizzas:allPizzas}))
  }

  editPizza = (pizza) => {
    this.setState({pizzaToEdit: pizza})
  }

  updatePizza = (pizza) => {
    fetch(`http://localhost:3000/${pizza.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pizza)
    })
    .then(res => res.json())
    .then(returnPizza => console.log('return', returnPizza))


  }

  handleToppingChange = (e, oldPizza) => {
    console.log('1', oldPizza)
    let newList = this.state.pizzas.map(pizza => {
      if (pizza.id === oldPizza.id) {
        pizza.topping = e.target.value
        return pizza
      }else{
        return pizza
      }})
      console.log('2', newList)
      this.setState({pizzas: newList})
    
  }

  handleSizeChange = (e, oldPizza) => {
    console.log('1', oldPizza)
    let newList = this.state.pizzas.map(pizza => {
      if (pizza.id === oldPizza.id) {
        pizza.size = e.target.value
        return pizza
      } else {
        return pizza
      }
    })
    console.log('2', newList)
    this.setState({ pizzas: newList })

  
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm basePizza={this.state.pizzaToEdit} handleToppingChange={this.handleToppingChange} handleSizeChange={this.handleSizeChange} updatePizza={this.updatePizza}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
