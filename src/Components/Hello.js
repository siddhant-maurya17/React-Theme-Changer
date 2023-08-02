import React, { useContext } from "react";
import ColorContext from "../Context/ColorContext";


const Hello = () => {
   let { style,blackMode,blueMode,whiteMode} = useContext(ColorContext)

   return (
   <div>
      <div style={{
         color:style.color,
         backgroundColor:style.backgroundColor,
         border:style.border,
         textAlign:style.textAlign,
         }}>
         <h1>Hey, How are you doing!</h1>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ad fugiat est distinctio doloribus iusto minus eum eius iure id, 
            reiciendis animi quibusdam labore libero voluptas ipsum corrupti 
            amet optio sapiente tempore. Quod consequatur fuga nemo aspernatur 
            possimus molestias eaque! In maiores illo, quam harum quisquam 
            voluptate veritatis vel. Nihil, nostrum.
         </p>
      </div>
      <button onClick={whiteMode}>White Mode</button>
      <button onClick={blackMode}>Dark Mode</button>
      <button onClick={blueMode}>Blue Mode</button>
   </div>
   )
}

export default Hello;