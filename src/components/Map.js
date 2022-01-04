import '../App.css';

const Map =({location}) => {

    if(!location) return <p>Loading...</p>

    return (
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe
                    className='map'
                    id="gmap_canvas"
                    src={`https://maps.google.com/maps?q=${location.lat},${location.lon}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0">
                </iframe>
            </div>
        </div>
    )
}

export default Map;