import React, { Component} from 'react';
import PhoneList from './PhoneList';
import Slider from './Slider';
import axios from 'axios';



class Phones extends Component {
    constructor(){
        super();
        this.state={
            phones: []
        }
    }
    componentWillMount(){
        this.getPhones();
    }

    getPhones(){
        axios.get('http://localhost:3000/api/Phones')
        .then(response=> {
            this.setState({phones: response.data}, () =>{
                console.log(this.state)
            })

        }).catch(err=> {
            console.log(err)
        })
    }

render(){
    const phoneList = this.state.phones.map((phone)=> {
        return(
            <PhoneList key={phone.id} item ={phone} />
          )
    })
    return(
        <div>
          < Slider />
            <ul className='collection'>
              {phoneList }
            </ul>

       </div>
    )
  }
}

export default Phones;

