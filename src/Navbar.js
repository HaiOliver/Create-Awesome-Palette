import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import Slider, { Range } from 'rc-slider';
import './Navbar.css';

export default class Narbar extends Component {
	constructor(props) {
		super(props);
        this.state = { format: 'hex' , open: false};
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
	}

	handleFormatChange(e) {
		this.setState({ format: e.target.value, open:true });
		this.props.handleChange(e.target.value);
    }
    

    closeSnackBar(){
        this.setState({open: false})
    }
	render() {
		const { level, changeLevel} = this.props;
		const { format } = this.state;
		return (
			<header className="NavBar">
				<div className="logo">
					<Link to="/">
					React Color Picker
					</Link>
				
				</div>
				<div className="slider-container">
					<span>Level:{level}</span>
					<div className="slider">
						<Slider
							defaultValue={level}
							min={100}
							max={900}
							step={100}
							onAfterChange={changeLevel}
						/>
					</div>
				</div>
                {/* // change format rgb */}
				<div className="select-container">
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">rgba(255,255,255,0.1)</MenuItem>
					</Select>
				</div>
                {/* //Snackbar */}
                <Snackbar anchorOrigin={{vertical:"bottom", horizontal:"left"}} 
                open={this.state.open}
                autoHideDuration={2000}
        message={<span id="message-id">Format Changed to <strong>{format.toUpperCase()}</strong> !</span>}   
                ContentProps={{
                    "aria-describedly":"message-id"
                }}     
                onClose = {this.closeSnackBar}
                action ={[
                    <IconButton onClick={this.closeSnackBar} color="inherit" key="close" 
                    aria-label='close'>
                        <CloseIcon/>
                    </IconButton>
                ]}
                />

			</header>
		);
	}
}
