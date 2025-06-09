import { content } from './contentt.js';
import Footer from "../Footer";

export default function Trek() {
    return(
        <>
        <div className="container">
                {content.map((place)=>(
                    <div key={place.id} className="card"
                     style={{
          padding: '50px 0px'
        }}>
                        <img src={place.image} alt={place.name}/>
                        <h1>{place.name}</h1>
                        <p>{place.description}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}