export const Photo = (props) => {
    return (
        <div key={props.id} className="photo-item">
            
            <img src={props.url} alt={props.title} />
            <div className="photo-title"> {props.alt} </div>
            
        </div>
    )
}