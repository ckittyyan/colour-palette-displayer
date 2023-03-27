/* 
Component acting as the container for photos (iterates through a list of photos to display only relevant pieces of information
*/

import {Photo} from './Photo';

export const PhotoContainer = (props) => {

    const displayPhotos = () => {
        return props.photos.map(photo => {
            return <Photo url={photo.url} key={photo.id} title={photo.title}/>
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
