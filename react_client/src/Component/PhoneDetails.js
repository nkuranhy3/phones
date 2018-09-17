import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css'

class PhoneDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            details: ''
        }
    }
    componentWillMount(){
        this.getPhoneDetails();
    }
    getPhoneDetails(){
        const PhoneId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/Phones/${PhoneId}`)
        .then(response=> {
            this.setState({details: response.data}, () =>{
                console.log(this.state)
            });
        });
    }
    onDelete(){
      let PhoneId =this.state.details.id;
      axios.delete(`http://localhost:3000/api/Phones/${PhoneId}`)
      .then(response =>{
        this.props.history.push('/')
      }).catch(error=>{
        console.log(error)
      })
    }

    render(){

        return(
            <div className="container">

                 <h1><b>{this.state.details.name}</b></h1>
                 <p>{this.state.details.brand}</p>
                 <p>{this.state.details.company}</p>
                 <p>{this.state.details.rating}</p>
                 <p>{this.state.details.color}</p>
                 <div id="gallery" className="section section-gallery scrollspy" >
              <img className="materialbox responsive-img" alt="phone" src = {this.state.details.picture}/>
              </div>
                <Link to ={`Phones/${this.state.details.id}`} className='btn pink' > Edit</Link>
                <button onClick={this.onDelete.bind(this)} className='btn red' > Delete </button>
                <br /><br />
                <Link to ='/' className='btn blue' > Back</Link>
            </div>
        )
    }
}
export default PhoneDetails;
