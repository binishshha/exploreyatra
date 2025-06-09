import {content} from './content.js';
import Footer from "../Footer";

export default function Tour() {
  return (
    <>
    <div className="container">
      {content.map((place) => (
        <div key={place.id} className="card"
        style={{
          padding: '25px 0px'
        }}>
          <img src={place.image} alt={place.name} />
          <h2>{place.name}</h2>
          <p>{place.description}</p>
        </div>
      ))}
    </div>
    <Footer />
    </>
  );
}
