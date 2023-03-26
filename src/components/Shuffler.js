export const Shuffler = ({photos, setPhotos}) => {

    const shuffle = () => {
        
      console.log("i'm in shuffle");
      console.log(photos.length);
      const newlist = shuffling(photos);
      console.log(newlist);
      console.log("left shuffling");
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


        // if (array.length <= 1) {
        //     return array;
        // }

        // randomIndex = Math.floor(Math.random() * length);
        // length--;

        // [array[]]

    }
    
    return (
        <button onClick={shuffle}>hello</button>
    )
}