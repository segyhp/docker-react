import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import  {setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField,
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
       onSeachChange: (event) => dispatch(setSearchField(event.target.value))
   }
}

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    render() {
        const {robots}  = this.state;
        const  { searchField, onSeachChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (!robots.length) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>Robo Friends</h1>
                    <SearchBox 
                        searchChange={onSeachChange} 
                        searchField = {searchField}
                    />
                    <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                    </Scroll> 
                </div>
            );
        }
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);