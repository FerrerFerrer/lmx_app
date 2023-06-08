
import { IonRow } from '@ionic/react';
import './textCarousel.css';
import { useEffect, useState } from 'react';

const getbanner = async () => {
  let url = `https://ventasletrimex.com.mx/letrimex_v2/public/getBanner`;
  const req = await fetch(url);

  if (req.ok) {
    const data = await req.json();
    return data
  }

  return 'nada'
}

const TextCarousel: React.FC = () => {

  let [banner, setbanner] = useState('');
  useEffect(() => {
    const get1 = async() => {
      setbanner(await getbanner())
       
    }
    get1()
  }, [] )

  return (
    <div className='carousel'>
      <IonRow>
        <div className='marquee'>
          <ul className='marquee__content'>
            <li className='marquee__item'>- - - - - {banner}</li>
          </ul>          
        </div>
      </IonRow>
    </div>
  );
};
export default TextCarousel;

