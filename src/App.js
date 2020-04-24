import React, {Component} from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots,
            searchField: '',
        };
    }

    onSeachChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox 
                    searchChange={this.onSeachChange} 
                    searchField = {this.state.searchField}
                />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;