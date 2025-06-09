import { NavLink } from "react-router";
import './style.css';
import Footer from './footer.jsx';

export default function Home() {
    return (
        <>
            <div
                className="home"
                style={{
                    backgroundImage:
                        'url("https://i.pinimg.com/736x/1b/2d/3d/1b2d3d24520481bdbd6f147cafa38ba6.jpg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '40vw',
                    opacity: '0.7'
                }}
            ></div>

     <div className="ques"
     style={{
        justifySelf: 'center',
        marginTop:'30px',
}}> <h1>Where do you wanna go?</h1>   
</div> 

<div className="note"
style={{
    padding:'40px',
    textAlign:'center',
    display: 'flex',
    justifyContent:'center'
}}>
    <p>Founded with a deep love for our homeland, we set out to create a travel planner that truly understands the heart of Nepal—from the soaring peaks of the Himalayas to the peaceful villages hidden in its valleys. Whether you're an adventure seeker or a peaceful wanderer, we’re here to guide you through the rich landscapes, diverse cultures, and untold stories that make Nepal unforgettable.</p>
</div>

<div className="choose">
              <div className="tour">
                <NavLink to="/tour">
                <div className="head1">
                    <h2>TOUR</h2>
                    </div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw378tKOCWReYS05fA6xQpTPkoEuLSDj8rGg&s"
                            alt="Tour"
                             style={{
                                width: '27.8vw',
                                opacity: '0.5',
                                minWidth: '300px'
                            }}
                        />
                </NavLink>
                </div>
            
            <div className="trek">
                <NavLink to="/trek">
                <div className="head2">
                    <h2>TREK</h2>
                    </div>
                        <img
                            src="https://himalayan-masters.com/wp-content/uploads/2023/10/Dhorpatan-Hunting-Reserve-Tour.webp"
                            alt="Trek"
                            style={{
                                width: '30vw',
                                 opacity: '0.5',
                                 minWidth: '300px'
                            }}
                        />
                </NavLink>
            </div>
</div>
<Footer />
        </>
    );
}
