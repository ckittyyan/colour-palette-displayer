/* 
Component that shuffles a given list of photos (reorder recursively)
*/

export const Shuffler = ({photos, setPhotos}) => {

    const shuffle = () => {
      const newlist = shuffling(photos);
      setPhotos(newlist);
    };

    const shuffling = (array) => {
        if (array.length <= 1) {
            return array;
        }

        const randomIndex = Math.floor(Math.random() * array.length);
        const photoAtRandomIndex = array[randomIndex];
        const firstArrayHalf = array.splice(0, randomIndex);
        const secondArrayHalf = array.splice(1);
        const newArray = [...firstArrayHalf, ...secondArrayHalf];

        return [photoAtRandomIndex, ...shuffling(newArray)];

    }
    
    return (
        <div className="shuffle-button">
            <button onClick={shuffle}>Shuffle</button>
        </div>
    )
}