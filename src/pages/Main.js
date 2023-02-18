import { useState } from 'react';
import CountDisplay from '../components/CountDisplay';
import Controls from '../components/Controls';
import { Link } from 'react-router-dom';


function Main() {
  const [ count, setCount ] = useState(0);
  // TODO: change className
  return (
    <div className="Container">
      <CountDisplay count={count} /> 
      <Controls setCount={setCount} />
      <Link to="/about">Learn About Counter</Link>
      <br />
      <Link to="/pokemon">PokeGallery</Link>
    </div>
  );
}

export default Main;


