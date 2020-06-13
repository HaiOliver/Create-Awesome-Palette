export default {
	Palette:{
		height: "100vh",
    	display: "flex",
    	flexDirection: "column",
	},
	colors:{
		height: "90%"
    },
    goBack:{
        width: "20%",
		height: "50%",
		margin: "0 auto",
		marginBottom:"-3.5px",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
        opacity: 1,
        backgroundColor: "black",
        "& a":{
            width: "100px",
            height:"30px",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-15px",
            marginLeft: "-50px",
            display: "inline-block",
            textAlign: "center",
            outline: "none",
            color:  "white",
            background: "rgba(255,255,255,0.3)",
            fontSize:"1rem",
            textTransform: "uppercase",
            border:"none",
           textDecoration: "none",
           
           
            
        }
       
        // alignItem: "flex-end"
		
    }

}