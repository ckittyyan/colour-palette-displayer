export const Photo = (props) => {
    return (
        <section>
            <img src={props.url} alt={props.title} />
        </section>
    )
}