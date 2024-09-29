import { useState } from "react";
import "./Voluntariados.css";

function Voluntariados() {
    let listaVoluntariados = [
        {
            id: 1,
            name: 'Limpieza de basura',
            image: 'https://previews.123rf.com/images/dolgachov/dolgachov1609/dolgachov160903644/62353809-el-voluntariado-la-caridad-la-limpieza-la-gente-y-el-concepto-de-ecolog%C3%ADa-grupo-de-voluntarios.jpg',
            horario: 'Sábado 10:00 - 12:00',
        },
        {
            id: 2,
            name: 'Cuidado de perros',
            image: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__medium/public/media/2019/07/22/voluntarios_animales.jpg',
            horario: '16:00 - 18:00',
        },
        {
            id: 3,
            name: 'Plantar árboles',
            image: 'https://plus.unsplash.com/premium_photo-1681140560906-4610ee700d1b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Vm9sdW50YXJpb3MlMjBwbGFudGFuJTIwJUMzJUExcmJvbGVzJTIwZW4lMjBsYSUyMG5hdHVyYWxlemF8ZW58MHx8MHx8fDA%3D',
            horario: 'Domingo 08:00 - 10:00',
        },
    ];

    //Crear un estado llamado volunt e inicializar el array con los listaVoluntariados
    const [volunt, setVolunt] = useState(listaVoluntariados);

    return(
        <div className="cart">
            <h3 className='title'>Inscripción a voluntariados</h3>
            <div className='cart-container'>
                <section className="cart-items">
                {
                    volunt.map((voluntariado, index) => {
                        return (
                            <div className="item-container">
                                <img height='150px' width='150px' src={voluntariado.image} alt={voluntariado.name}/>
                                <p>Voluntariado {voluntariado.id}</p>
                                <p>{voluntariado.name}</p>
                                <p>{voluntariado.horario}</p>
                                <div className="quantity-controls">
                                    
                                </div>
                                <button className="sign-button" onClick={() => {}}>Registrarme</button>
                            
                            </div>
                        );
                    })
                }
                </section>
            </div>
        </div>
    )


}

export default Voluntariados;
