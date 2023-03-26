import {Photo} from './Photo';

export const PhotoContainer = (props) => {

    const displayPhotos = () => {
        return props.photos.map(photo => {
            return <Photo url={photo.url} />;
        });
    };
    return (
        <>
        <section>{displayPhotos()}</section>
        </>
    )
}
