import {Photo} from './Photo';

export const PhotoContainer = (props) => {

    const displayPhotos = () => {
        return props.photos.map(photo => {
            return <Photo key={photo.id} url={photo.url} alt={photo.title} />;
        });
    };
    return (
        <>
        <div className="photo-container">

        {displayPhotos()}
        
        </div>
        </>
    )
}
