import React, {Component} from 'react';
import CounterButton from './CounterButton';

class Header extends Component {

    //lifecycle if return false, dont rerender anything
    shouldComponentUpdate(nextProp, nextState){
        return false;
    }

    render() {
        console.log("Header");
        return (
            <div>
                <h1 className='f2'>Robo Friends</h1>
                <CounterButton color={'blue'} />
            </div>
        );
    }
}

export default Header;