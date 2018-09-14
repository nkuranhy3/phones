import React from 'react';
import { Switch, Route } from 'react-router';
import Phones from './Phones';
import PhoneDetails from './PhoneDetails';
import About from './About';
import AddPhone from './AddPhone'

const Main =() =>(
    <main>
        <Switch>
            <Route exact path="/" component={Phones}/>

            <Route path="/about" component={About}/>
            <Route path="/Phones/add" component={AddPhone}/>
            <Route path="/Phones/:id" component={PhoneDetails} />
        </Switch>
    </main>

)
export default Main;
