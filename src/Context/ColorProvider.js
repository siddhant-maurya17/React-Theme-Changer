import React,{useState} from "react";
import ColorContext from "./ColorContext";


let defaultStyle={
    color:"black",
    backgroundColor:"white",
    border:"1px solid red",
    textAlign:"left"
}
const ColorProvider=(props)=>{
    let [style,setStyle]=useState(defaultStyle)
    
    return (
        <ColorContext.Provider value={
            {style:style,
             
             whiteMode:()=>setStyle(defaultStyle),
             blackMode:()=>setStyle({...style,
             color:"white",backgroundColor:"black",border:"1px solid white",textAlign:"right"
            }),
             blueMode:()=>setStyle({...style,
                color:"green",backgroundColor:"lightblue",border:"1px solid green",textAlign:"center"
            }),

            }
            }>
            {props.children}
        </ColorContext.Provider>
    )
}

export default ColorProvider;