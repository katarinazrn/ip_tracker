import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import IP from './components/IP';
import Location from './components/Location';
import Map from './components/Map';

const App = () => {
  const [ip, setIp] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(false);

  const setCurrent = () => {
    fetch('https://api.ipify.org/?format=json')
      .then(res => res.json())
      .then(data => setIp(data.ip))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    setCurrent();
  }, [])

  useEffect(() => {
    if (ip) {
      fetch(`http://ip-api.com/json/${ip}`)
        .then(res => res.json())
        .then(data => {
          if (data.status === 'fail') {
            setError(true);
          }
          else {
            setError(false);
            setLocation(data)
          }
        })
        .catch(err => console.log(err))
    }
  }, [ip])

  return (
    <div>
      <div className='container'>
        <div className='content'>
          <Header />
          <IP setCurrent={setCurrent} setIp={setIp} ip={ip} />
          {error && <p className='error'>Invalid ip address</p>}
          {!error && <Location location={location} />}
        </div>
      </div>
      {!error && <Map location={location} />}
    </div>
  );
}

export default App;
