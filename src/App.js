import React, { Component} from 'react';
import CardList from './CardList';
//import { robots } from './robots'
import SearchBox from './SearchBox';
//import { robots } from './robots';



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots :[],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots : users}));
    }
    onSearchChange = (event) => {
            //console.log(event.target.value);
            this.setState({ searchfield: event.target.value});         
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // if (this.state.robots.length === 0){
        //     return <h1>Loading!</h1>
        // } else {
            return (
            <div>
                <h1>RoboFreinds</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {filteredRobots}/>  
            </div>
            
            )
        //}
        
    }
    
}
export default App;