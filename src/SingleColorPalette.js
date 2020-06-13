import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import {withStyles} from '@material-ui/styles';
import styles from "./styles/PaletteStyle";


class SingleColorPalette extends Component{
    constructor(props){
        super(props);
       
        this._shades = this.gatherShade(this.props.palette,this.props.colorId);
        //set state to handle format
        this.state = {format:"hex"};
        this.changeFormat = this.changeFormat.bind(this);
        // this.gatherShade = this.gatherShade.bind(this);
    }

    gatherShade(palette, colortoFilterBy){
        let shades = [];
        let allColors = palette.colors;
        
        for(let key in allColors){
            shades = shades.concat(allColors[key].filter((color)=>color.id === colortoFilterBy)
        )
        }

        return shades.slice(1);


    }

    // change format rgb
	changeFormat(va){
		this.setState({format: va })

	}
    render(){
        const {emoji, paletteName,id} = this.props.palette
        const {classes} = this.props;
        const {format} = this.state
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
            key={color.name} 
            name={color.name} 
            background={color[format]}
            showingFullPalette={false}
            />
        ))
        return(
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
              
                <div className={classes.colors}>{colorBoxes}</div>
                <div className={classes.goBack}>
                    <Link  to={`/palette/${id}`} >Go Back</Link>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);
