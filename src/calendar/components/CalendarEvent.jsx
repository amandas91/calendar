export const CalendarEvent = ({event}) => {

    const { title, user } = event;

    return (
        <>
            <strong>{title}</strong>
            <samp> - { user.name }</samp>
            
        </>
    )
}