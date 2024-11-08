import style from './css/Rodape.module.css'
import insta from './image/insta.jpeg'
import face from './image/face.jpeg'
import ttk from './image/tiktok.png'
import whats from './image/whats.png'

function Rodape(){

    return(

        <footer className={style.corpo}>
            <h3>Acompanhe também em nossas redes</h3>
            <div className={style.icones}>
                <img src={insta} alt="insta" />
                <img src={face} alt="face" />
                <img src={ttk} alt="ttk" />
                <img src={whats} alt="whats" />
            </div>
            <h3>Telefone de contato - (11) 40028922</h3>
        </footer>

    )
}

export default Rodape