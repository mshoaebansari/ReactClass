import { ProCard } from "./ProCard"
import './MyStyles.css'
export const Container=({cardTitle})=>{

    console.log(cardTitle)
    return(
        <div className="container">
        <ProCard procardName={cardTitle[0].name}/>
        <ProCard procardName={cardTitle[1].name}/>
        <ProCard procardName={cardTitle[2].name}/>
        </div>
    )
}