
import chroma from 'chroma-js';
export default {
    ColorBox: {
        width: "20%",
        height: props => (props.showingFullPalette ? "25%" : "50%"),
        margin: "0 auto",
        marginTop: "-5px",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover button": {
            opacity: "1"
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    seeMore: {
        background: "rgba(255,255,255,0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
        width: "60px",
        height: "30px",
        lineHeight: "30px",
        textAlign: "center"
    },
    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: "-15px",
        marginLeft: "-50px",
        display: "inline-block",
        textAlign: "center",
        outline: "none",
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
        background: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: 0,
        marginBottom: "-3.5px",
    },
    BoxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transform: "scale(0.1)",
        transition: "transform 0.6s ease-in-out"
    },
    showOverlay: {
        opacity: "10",
        transform: "scale(50)",
        zIndex: " 10",
        position: "absolute",
    },
    copyMessage: {
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
    },
    showCopyMessage: {
        zIndex: "25",
        opacity: "1",
        transform: "scale(1)",
        transitionDelay: "0.3s",
        transition: "all 0.4s ease-in-out",

    }



}