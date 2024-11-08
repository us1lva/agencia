import style from './css/Home.module.css'

function Home(){

    return(
        <section className={style.corpo_home}>
            <div className={style.image_lado}>
            </div>
            <div className={style.texto_lado}>
                <h1>Encontre aqui a viagem dos seus sonhos!!!</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae doloremque, deleniti nostrum animi, odio, perspiciatis quis quas repudiandae nulla eum delectus necessitatibus voluptas porro amet? Labore sed molestiae dolorum nobis.</p>
            </div>
        </section>

    )
}

export default Home