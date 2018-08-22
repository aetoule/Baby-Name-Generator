import React, { Component } from 'react';
//import './App.css';
import axios from 'axios';
//import individual css

class AddToFaves extends Component {

    constructor(props) {
      super(props);
      this.state = {
        names: [],
        id: 0,
        // name:'',
        // gender: '',
        // region:'',
        // surname:'',
        faveNames: [],
        showFavesList: false,
        inputText: ''
      };
      //bind
      this.addNewNameToFavorites = this.addNewNameToFavorites.bind( this );
      // this.theRealShowFavesList = this.theRealShowFavesList.bind( this );
    }
  
    componentDidMount() {
      axios.get("http://uinames.com/api/").then(res => {
        // console.log('res.data', res.data)
        this.setState({
          names: res.data
        })
      });
    }

    // add the name (postNewName) to favorites list
    addNewNameToFavorites = () => {
      const { apiName } = this.props
      console.log('apiName', apiName)
      axios.post('/api/names', {apiName}).then(res => {
        console.log('resss', res);
        this.setState({
          faveNames: res.data
        })
      })
      console.log('does this.props work?', this.props.apiName.name);
      console.log('hiAddToFaves', this.state.faveNames);
    }

    // load the favorites list when u click show faves list
    theRealShowFavesList = (boo1) => {
      this.setState({
        showFavesList: boo1
      });
    }

     showFavorites = () => {
      axios.get('/api/favoriteNames').then(res => {
        this.setState({
          faveNames: res.data
        })
      })
      console.log('AddToFavorites, is res.data working?' + this.state.faveNames)
    }

    // to update the input box to edit the favename information
    updateText(input) {
      this.setState({ inputText: input });
    }

    // delete a favorited name
    handleDelete =(id) => {
    console.log('id: ', id);
    axios.delete(`/api/names/${ id }`).then(res => {
      console.log('res: ', res.data);
      this.setState({
        faveNames: res.data
      })
      console.log(this.state.faveNames)
    })
  }


    render() {
      console.log('this.props------', this.props.fave)
      console.log('faveNamezz', this.state.faveNames);
      console.log('this.props------', this.props)
      const anotherVariable = this.state.faveNames;
      const faveNames1 = anotherVariable.map((name, index) => {
        console.log('name', name);
        return (<div className="Favorite_info" key={index}>
            <input className="input_box" 
            placeholder= {name.name}
            onChange={(e) => this.updateText (e.target.value)}/>
            <br></br>
            <p>Gender: {name.gender}</p>
            <p>Region:  {name.region}</p>
            
            <button className="UpdateDeleteButton" onClick={() => this.props.handleUpdate(name.id, this.state.inputText)}>Update</button>
            <button className="UpdateDeleteButton" onClick={() => this.handleDelete(name.id)}>Delete</button>
        </div>)
      })

      return (
        <div className="AddToFaves">
          <header className="App-header2">
            <h2 className="Favorites_List_Title">Favorites List</h2>
          </header>
          <div className= "favoritesList">
            <br></br>
            <button className="Add_To_Favorites_Button" onClick={this.addNewNameToFavorites}>Add to Favorites</button>
          </div>
          {console.log('HIIIIII', faveNames1)}
          <button className="ShowFavesListButton" onClick={this.theRealShowFavesList.bind(null, true)}>Show List</button>
          {this.state.showFavesList && (
          <div>
            {faveNames1}
          </div>
          )} 
        </div>
      );
    };
}
export default AddToFaves;