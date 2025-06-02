import './home.css'

export default function Dest() {
    return(
        <>

        <h1 style={{
                justifySelf: 'center',
    alignSelf: 'center',
    margin: '20px',
    fontStyle: 'italic'
        }}>POPULAR DESTINATIONS</h1>
<div className="places">
<div className="Kathmandu">
    <img
    src="https://i.guim.co.uk/img/media/f399717f6fb80a54f8c8e8191e5ae94c8f2c80fc/0_100_3487_2092/master/3487.jpg?width=700&quality=85&auto=format&fit=max&s=0d4b88c7abe3c0011bb03f64203fa336"
    alt="ktm"
    />
    </div>

    <div className="Pokhara">
    <img 
    src="https://lp-cms-production.imgix.net/2019-06/53693064.jpg"
    alt="pkr"
    />
    </div>

    <div className="dhorpatan">
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGteVTnrGk5Y9rkCliX1vTxisYyU75282Cg&s"
        alt="dhor"
        />
    </div>
    </div>
           
        </>
    )
}