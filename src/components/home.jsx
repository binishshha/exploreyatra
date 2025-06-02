import { NavLink, Routes, Route } from "react-router";
import './home.css'

export default function Home() {
    return(
        <>
       <div
        className="home"
        style={{
          backgroundImage:
            'url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/36/photo4jpg.jpg?w=1200&h=700&s=1")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width:'100%',
          height:'40vw',
        }}
      >
</div>
        <div className="hero">
            <NavLink to="/tour">TOUR</NavLink>
            <NavLink to="/trek">TREk</NavLink>
       </div>
        </>
    )
}