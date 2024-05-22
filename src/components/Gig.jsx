import "../Gig.css";

const Gig = (props) => {
    return(
        <div className="gig">
        <h3 className="band-name">{props.bandName}</h3>
        <img className="band-image" src={props.src} alt="Band" />
        <p className="event-description">{props.eventDescription}</p>
        <p className="time-date">{props.timeDate}</p>
        <p className="event-location">{props.eventLocation}</p>
      </div>
    )
}
export default Gig;