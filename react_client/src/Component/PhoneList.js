import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class ProductList extends Component{
    constructor(props){
        super(props);
        this.state={
            item: props.item
        }
    }
    render(){
        return(
          <div className="container" >

      <table className="highlight" >
          <tr className="center">
            <td> <Link to ={`/Phones/${this.state.item.id}`}> {this.state.item.name}</Link> </td>
            <td>$  {this.state.item.price}</td>
          </tr>

      </table>
          </div>

        )
    }
}
export default ProductList;
