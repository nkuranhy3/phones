import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

class AddPhone extends Component{
  addPhone(newPhone){
      console.log(newPhone);
    axios.request({
      method: "post",
      url: 'http://localhost:3000/api/Phones',
      data: newPhone
    }).then(response=>{
      this.props.history.push('/');
    }).catch(err=>{
      console.log(err)
    })
  }

  onSubmit(e){
    e.preventDefault()
    const newPhone= {
      name: this.refs.name.value,
      brand: this.refs.brand.value,
      company: this.refs.company.value,
      rating: this.refs.rating.value,
      price: this.refs.price.value,
      picture: this.refs.picture.value,
      color: this.refs.color.value
    }
    this.addPhone(newPhone);
  }
    render(){

        return(
            <div>
              <h1>Add Phone</h1>
                <form onSubmit= {this.onSubmit.bind(this)} >
                    <div className ='input-field'>
                      <input type="text" name="name" ref="name" />
                      <label htmlFor="name" >Name</label>
                    </div>
                    <div className ='input-field'>
                      <input type="text" name="brand" ref="brand" />
                      <label htmlFor="brand" >Brand Name</label>
                    </div>
                    <div className ='input-field'>
                      <input type="text" name="company" ref="company" />
                      <label htmlFor="company" >Company Name</label>
                    </div>
                    <div className ='input-field'>
                      <input type="number" name="rating" ref="rating" />
                      <label htmlFor="rating" >Rating</label>
                    </div>
                    <div className ='input-field'>
                      <input type="number" name="price" ref="price" />
                      <label htmlFor="price" >Price Per Phone</label>
                    </div>
                    <div className ='input-field'>
                      <input type="text" name="picture" ref="picture" />
                      <label htmlFor="picture" >Image Url</label>
                    </div>
                    <div className ='input-field'>
                      <input type="text" name="color" ref="color" />
                      <label htmlFor="color" >Phone Color</label>
                    </div>
                    <button className='btn red' > Add Phone </button>
                </form>
                <br/>
                <br/>
                <br/>
             <Link to ='/' className='btn blue' > Back</Link>
            </div>
        )
    }
}
export default AddPhone;
