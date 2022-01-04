import '../App.css';

const Location = ({ location }) => {
    if (!location) return <p>Loading...</p>

    return (
        <div className="location">
            {location.country_name && <span>country: &nbsp;<b>{location.country_name}</b></span>}
            {location.region && <span>region:&nbsp;<b>{location.region}</b> </span>}
            {location.city && <span>city:&nbsp;<b>{location.city}</b></span>}
            {location.org && <span>org:&nbsp;<b>{location.org}</b></span>}
        </div>
    )
}

export default Location;