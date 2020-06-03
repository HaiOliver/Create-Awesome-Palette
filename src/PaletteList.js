import React ,{Component} from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
export * from "react-router";

const styles = {
    root:{
        backgroundColor: "blue",
        height: "110vh",
        display:"flex",
        justifyContent: "center",
        alignItems:"flex-start"
    },
    container:{
        width:"50%",
        display:"flex",
        alignItems:"flex-start",
        flexDirection:"column",
        flexWrap:"wrap"
    },
    nav:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        color:"white"
    },
    palettes:{
        boxSizing:"border-box",
        width: "100%",
        gridGap: "5%",
        display: "grid",
        gridTemplateColumns:"repeat(3,30%)"
    }
}
class PaletteList extends Component{
    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }
    
    render(){
        const {palettes,classes} = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette=>(
                            <Link to={`/palette/${palette.id}`}>
                            <MiniPalette {...palette} handleClick = {()=>this.goToPalette(palette.id)}/>  
                            </Link>
                            
                    
                    
                ))}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);