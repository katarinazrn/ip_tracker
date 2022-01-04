import gif from '../loading.gif';
import '../App.css';

const Loading = () => {

    return (
        <div id='loading'>
            <img src={gif} alt='Loading...' />
        </div>
    )
}

export default Loading;