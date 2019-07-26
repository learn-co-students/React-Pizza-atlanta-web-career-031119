import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input id={props.basePizza.topping} type="text" className="form-control" placeholder="Pizza Topping" value={
                props.basePizza.topping ? props.basePizza.topping : null
              }
              onChange={(e)=>props.handleToppingChange(e, props.basePizza)}/>
        </div>
        <div className="col">
        <select id={props.basePizza.size}
          onChange={(e) => props.handleSizeChange(e, props.basePizza)}
          value={props.basePizza.size ? props.basePizza.size : null} 
          className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={
              props.basePizza.vegetarian ? true : null
            }/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={
               (props.basePizza.vegetarian === false) ? true : null
                    
                
              
            }/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.updatePizza(props.basePizza)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
