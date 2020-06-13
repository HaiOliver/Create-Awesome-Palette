import React, { Component } from 'react';

import styles from "./styles/ColorBoxStyles";
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';

import { CopyToClipboard } from 'react-copy-to-clipboard';



class ColorBox extends Component {
	constructor(props){
		super(props);
		this.state = {copied: false};
		this.changeCopyState = this.changeCopyState.bind(this);
	}

	// CHange copy state
	changeCopyState(){
		this.setState({copied: true}, ()=>{
			setTimeout(() => this.setState({copied: false}), 1500);
		})
	}
	render() {
		const { name, background ,paletteId, id, showingFullPalette, classes} = this.props;
		const {copied} = this.state;
		
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background }} className={classes.ColorBox}>
					{/* Set change background here */}
					<div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay }`} 
					/>
					{/* set copied msg */}
					<div className={`${classes.copyMessage} ${copied && classes.showCopyMessage }`}>
						<h1>copied!</h1>
						{/* Use function css */}
						<p className={classes.copyText}>{background}</p>
					</div>
					<div className="copy-container">
						<div className={classes.BoxContent}>
							<span className={classes.colorName}>{name}</span>
							
						</div>
						<button className={classes.copyButton}>Copy</button>
					</div> 
					{showingFullPalette && 
					<Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
					<span className={classes.seeMore}>MORE</span>
					</Link>
					}
					
				</div>
			</CopyToClipboard>
		);
	}
}



export default withStyles(styles)(ColorBox);
