import React, { Component} from 'react';
import PhoneList from './PhoneList';
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
            <h1>Phones Page</h1>
            <ul className="collection">
              {phoneList }
            </ul>
        </div>
    )
}
}

export default Phones;

