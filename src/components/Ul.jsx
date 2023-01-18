
import List from "./List";
const Ul=({text})=>{
    return(
        <>
            {text.map((item,i)=><List key={i}>{item}</List>)}
        </>
            
    )
}
export default Ul