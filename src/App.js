import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import IP from './components/IP';
import Loading from './components/Loading';
import Location from './components/Location';
import Map from './components/Map';

const App = () => {
  const [ip, setIp] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const setCurrent = () => {
    setLoading(true);
    fetch('https://api.ipify.org/?format=json')
      .then(res => res.json())
      .then(data => {
        setIp(data.ip);
      })
      .catch(err => {
        setError(true);
        setErrorMessage(err);
      });
  }

  useEffect(() => {
    setCurrent();
  }, [])

  useEffect(() => {
    if (ip) {
      fetch(`https://ipapi.co/${ip}/json`)
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            setError(true);
            setErrorMessage(data.reason);
          }
          else {
            setError(false);
            setLocation(data)
          }
          setLoading(false);
        })
    }
  }, [ip])


  return (
    <div>
      <div className='container'>
        <div className='content'>
          <Header />
          {loading && <Loading />}
          {!loading && <IP setCurrent={setCurrent} setIp={setIp} ip={ip} />}
          {error && <p className='error'>{errorMessage}</p>}
          {!error && !loading && <Location location={location} />}
        </div>
      </div>
      {!error && !loading && <Map location={location} />}
    </div>
  );
}

export default App;
