import React from 'react';
import {withStyles} from "@material-ui/styles";
import styles from "./styles/PaletteFooter";


const PaletteFooter = (props) => {
    const {paletteName,emoji,classes} = props
    return(
        
        <footer className={classes.footer}>                          
            {paletteName}
        <span id={classes.emoji}>{emoji}</span>
        
        </footer>
        )

}


export default withStyles(styles)(PaletteFooter);