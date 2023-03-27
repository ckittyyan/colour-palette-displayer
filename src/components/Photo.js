/* 
Component for a photo
*/

export const Photo = (props) => {

    return (
        <div key={props.id} className="photo-item">
            
            <img src={props.url} alt={props.title} loading="lazy"/>
            <div className="photo-title"> {props.title} </div>
            
        </div>
    )
}