
import { IonRow } from '@ionic/react';
import './textCarousel.css';

const TextCarousel: React.FC = () => {
  return (
    <div className='carousel'>
      <IonRow>
        <p className="titleCarousel">saludo :</p><p>hola</p>
      </IonRow>
    </div>
  );
};
export default TextCarousel;
