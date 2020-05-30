import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';



export default class Palette extends Component {
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
		const {colors, paletteName, emoji} = this.props.palette;
		const {level,format} = this.state;
		const colorBoxes = colors[this.state.level].map((color) => {
			return <ColorBox background={color[format]} name={color.name} key={color.id}/>;
		});
		return (
			<div className="Palette">
				{/* Navbar go here  */}
				<Navbar level={level} 
				changeLevel= {this.changeLevel}
				handleChange = {this.changeFormat}
				/>
				{/* a lot of boxes  */}
				<div className="Palette-colors">{colorBoxes}</div>
				{/* footer */}
				<footer className="Palette-footer">
					{paletteName}
					
					<span id="emoji">{emoji}</span>

				</footer>
			</div>
		);
	}
}
