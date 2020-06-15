export default {
	NavBar:{
		display:"flex",
		alignItems: "center",
		justifyContent:"flex-start",
		height: "10vh",
	},
	logo:{
		marginRight: "15px",
		padding: "0 10px",
		fontSize: "22px",
		display:"flex",
		alignItems: "center",
		backgroundColor: "hotpink",
		height: "100%",
        fontFamily: "Roboto",
        "& a":{
            textDecoration: "khaki",
            color:"black"
        }
	},
	
	slider :{
		width: "340px",
		margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track ":{
            backgroundColor: "transparent"
        },
        "& .rc-slider-rail":{
            height: "8px",
        },
        " & .rc-slider-handle ,.rc-slider-handle:active ,.rc-slider-handle:focus, .rc-slider-handle:hover ":{
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-2px",

        }
    },
    
    selectContainer:{
        marginLeft: "auto",
        /* margin-right: 30px; */
        paddingRight: "20px",
    }
}