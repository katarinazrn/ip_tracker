import '../App.css';
import { useEffect, useState } from "react";

const IP = props => {

    const [ip, setIp] = useState('');

    useEffect(() => {
        if (props.ip) {
            setIp(props.ip);
        }
    }, [props]);

    const handleSubmit = e => {
        e.preventDefault();
        props.setIp(ip);
    }

    return (
        <form onSubmit={handleSubmit} className="ip">
            <div className='input'>
                <input onChange={e => setIp(e.target.value)} type='text' value={ip} />
                <span onClick={props.setCurrent} className="material-icons">
                    place
                </span>
            </div>
            <button type="submit">change</button>
        </form>
    )
}

export default IP;