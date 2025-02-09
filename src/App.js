import Description from './components/description';
import Name from './components/name'
import Price from './components/price';
import Image from './components/image';
import './style.css'


const firstName = "Omar Tounsi";


function App() {
  return (
    <div className="container">
      <div className='card'>
        <Image />
        <Name />
        <Price />
        <Description />
      </div>
      <div className="name">
        <p>Hello {firstName ? firstName : "there."} </p>
        {firstName && (
          <img id='cat' src='https://media.tenor.com/mNj1Gs5Kp-kAAAAM/cat-funny.gif' alt='cat'></img>
        )}
      </div>
    </div>
  );
  
}
export default App;
