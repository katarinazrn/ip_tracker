import '../App.css';

const Location=({location})=>{
    if(!location) return <p>Loading...</p>

    return(
        <div className="location">
            <span>country: &nbsp;<b>{location.country}</b></span> 
            <span>region:&nbsp;<b>{location.regionName}</b> </span> 
            <span>city:&nbsp;<b>{location.city}</b></span>
            <span>isp:&nbsp;<b>{location.isp}</b></span>
        </div>
    )
}

export default Location;