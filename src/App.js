import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
import {Route, Switch} from 'react-router-dom';
import SingleColorPalette from './SingleColorPalette';
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
        {/* homepage */}
        <Route 
          exact path="/" render={(routeProps) =>
          <PaletteList palettes={seedColors} {...routeProps}/>}>

          </Route>
        {/* Go palette */}
        <Route 
          exact
         path='/palette/:id'
         render={(routeProps) => <Palette palette={generatePalette(
           this.findPalette(routeProps.match.params.id))}/>
         }></Route>
         {/* Single route Palette */}
         <Route 
         exact
         path="/palette/:paletteId/:colorId" 
         render={(routeProps)=> <SingleColorPalette 
          colorId={routeProps.match.params.colorId}
          palette={generatePalette(
           this.findPalette(routeProps.match.params.paletteId))}/>}/>

      
      </Switch>
      
    );
  }
  
}

export default App;
