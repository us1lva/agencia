
import logo from './image/viagens.jpg'
import Lupa from './image/lupa.png'
import style from './css/Header.module.css'

function Header(){

    return(

        <header className={style.content}>
            <img src={logo} alt="logo" className={style.logo} />
            <nav className={style.menu}>
                <ul>
                <li>Home</li>
                <li>Escócia</li>
                <li>Grand Canyon</li>
                <li>Muralha da China</li>
                <li>Aruba</li>
                </ul>
            </nav>

            <div className={style.login}><input type="search" /></div>

            <img src={Lupa} alt="Lupa" className={style.lupa} />
        </header>

    )
}

export default Header