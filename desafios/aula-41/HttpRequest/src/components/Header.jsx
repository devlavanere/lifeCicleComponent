import Logo from '../assets/react.svg'
import './Header.css'

function Header() {
    return (
        <div className='container'>
            <div className='header'>
                <img src={Logo} alt="Imgem Logo" />
                <p>React Js</p>
            </div>
            <h1 className='title'>Requisões HTTP com Axios - Aula 41</h1>
        </div>
    )
}

export default Header