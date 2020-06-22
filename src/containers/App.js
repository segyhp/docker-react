import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import  {setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.pending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
       onSeachChange: (event) => dispatch(setSearchField(event.target.value)),
       onRequestRobots: () => dispatch(requestRobots())
   }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const  { searchField, onSeachChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (isPending) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <Header />
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