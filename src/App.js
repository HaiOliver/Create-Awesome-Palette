import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
import {Route, Switch} from 'react-router-dom';
import {generatePalette} from './colorHelpers';

class App extends Component {

  findPalette(id){
    
    // return (seedColors.find(palette => palette.id === id))
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }
  render(){
    
    return (
      <Switch>
        <Route exact path="/" render={(routeProps) =>
           <PaletteList palettes={seedColors} {...routeProps}/>}>

           </Route>
        <Route exact
         path='/palette/:id'
         render={(routeProps) => <Palette palette={generatePalette(
           this.findPalette(routeProps.match.params.id))}/>
         }></Route>
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[2])}/>
      // </div>
    );
  }
  
}

export default App;
