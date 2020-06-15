
export default {
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
        color:"white",
        alignItems: "center",
        "& a":{
            color: "white",
            textDecoration:"none"
        }
    },
    palettes:{
        boxSizing:"border-box",
        width: "100%",
        gridGap: "5%",
        display: "grid",
        gridTemplateColumns:"repeat(3,30%)"
    }
}