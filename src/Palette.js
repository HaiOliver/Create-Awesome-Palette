import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from "./PaletteFooter";
import {withStyles} from '@material-ui/styles';
import styles from "./styles/PaletteStyle";


class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500 ,format: "hex"};
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
		console.log(level);
	}
	// change format rgb
	changeFormat(va){
		this.setState({format: va })

	}

	
	render() {
		const {colors, paletteName, emoji, id} = this.props.palette;
		const {level,format} = this.state;
		const {classes} = this.props;
		const colorBoxes = colors[this.state.level].map((color) => {
			return <ColorBox 
			background={color[format]} 
			name={color.name} 
			key={color.id} 
			id={color.id}
			paletteId ={id}
			showingFullPalette = {true}
			/>;
		});
		return (
			<div className={classes.Palette}>
				{/* Navbar go here  */}
				<Navbar level={level} 
				changeLevel= {this.changeLevel}
				handleChange = {this.changeFormat}
				showingAllColors
				
				/>
				{/* a lot of boxes  */}
				<div className={classes.colors}>{colorBoxes}</div>
				{/* footer */}
				<PaletteFooter paletteName={paletteName}
					emoji={emoji}/>
					
					

				
			</div>
		);
	}
}


export default withStyles(styles)(Palette);
