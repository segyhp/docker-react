 import React, {Component} from 'react';
 import './Hello.css';

 class Hello extends Component {
     render() {
         return (
             <div className="f1 tc">
                <h1>{this.props.greeting}</h1>
             </div>
        );
     }
 }
 
 export default Hello;
