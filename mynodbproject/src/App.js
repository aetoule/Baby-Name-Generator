import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import './AddToFaves';
import AddToFaves from './AddToFaves';
import Header from './Header/Header';
import Footer from './Header/Footer';


class App extends Component {

  constructor() {
    super();

    this.state = {
      names:[],
      name:'',
      region:'',
      surname:'',
      gender: '',
      faveNames: [],
      displayGeneratedName: false
    };

    this.postNewName = this.postNewName.bind( this );
    this.handleGenerateNewRandomName = this.handleGenerateNewRandomName.bind(this);
  }

  componentDidMount() {
    axios.get("http://uinames.com/api/").then(res => {
      console.log('res.data', res.data)
      this.setState({
        names: res.data
      })
    });
  }

  displayTheGeneratedName = (boo1) => {
    this.setState({
      displayGeneratedName: boo1
    });
  }

  // handles generating a new name
  handleGenerateNewRandomName = () => {
    axios.get("http://uinames.com/api/").then(res => {
      console.log('res.data', res.data)
      this.setState({
        names: res.data
      })
    });
  }

  // handles generating a new name
  handleFemaleFilter = () => {
    axios.get("http://uinames.com/api/?gender=female").then(res => {
      console.log('res.data', res.data)
      this.setState({
        names: res.data
      })
    });
  }

  // handles generating a new name
  handleMaleFilter = () => {
    axios.get("http://uinames.com/api/?gender=male").then(res => {
      console.log('res.data', res.data)
      this.setState({
        names: res.data
      })
    });
  }

  // posts a newly generated name onto page. 
  postNewName = () => {
      let newName = {
        name: this.state.name || this.state.names.name,
        gender: this.state.gender || this.state.names.gender,
        region: this.state.region || this.state.names.region,
      }
    axios.post('/api/names', newName)
  }

  // handles name update
  handleUpdate = (id, name) => {
    console.log('id: ', id);
    axios.put(`/api/names/${id}`, {name}).then(res => {
      this.setState({
        faveNames: res.data
      })
    })
  }

  render() {
    
    console.log('favename----', this.state.faveNames)
    
    return (
      <div className="App">
        <Header />
        <section className="App_content">

          <div className="Generate_Names_Based_On_Filter">
            <h2>Generate Name</h2>
            {/* gender filter */}
            <button id="Filter" 
              className="Filter_Button"
              onClick={ this.handleFemaleFilter } >Female Names</button> 
              <button id="Filter" 
              className="Filter_Button"
              onClick={ this.handleMaleFilter }>Male Names</button>
              <br></br>
              <h4 className="BigName">{' ' + this.state.names.name + ' '}</h4>
            
              <p>{'Gender:  ' + this.state.names.gender + ' '}</p> 
              <p>{'Region: ' + this.state.names.region+ ' '}</p>  
          </div>
          <div className="App_AddToFavorites">
            <AddToFaves apiName={this.state.names} faveNames2={this.state.faveNames} handleUpdate={this.handleUpdate}/>
          </div>
          </section>
          <footer className="footer">
          <Footer />
          </footer>
      </div>
    );
  };
};

export default App;
