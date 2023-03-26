export const Shuffler = (props) => {

    const shuffle = () => {
        
      console.log(props.array.length);
      const newlist = shuffling(props.array);
      console.log(newlist);
      return;
    };

    const shuffling = (array) => {
        if (array.length <= 1) {
            return array;
        }

        const randomIndex = Math.random() * array.length;
        console.log(randomIndex);
        console.log(Math.floor(randomIndex));
        const photoAtRandomIndex = array[randomIndex];
        const firstArrayHalf = array.splice(0, randomIndex);
        console.log(firstArrayHalf);
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