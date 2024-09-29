import { useState } from "react";
import "./Registro.css";

function Form() {
    const [formValues, setFormValues] = useState({
        nombre: "",
        apat: "",
        amat: "",
        correo: "",
        edad: "1",
        fecha: "",
        dia: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario adopte el comportamiento por defecto
        console.log(formValues); // Muestra los valores del formulario en la consola del navegador
        alert("Tu registró se completó correctamente")
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Formulario de registro</h2>
            <label for="name">Nombre: </label>
            <input
                type="text"
                name="nombre"
                value={formValues.nombre}
                onChange={handleChange}
                placeholder="Nombre"
            />
            <label for="apat">Apellido paterno: </label>
            <input
                type="text"
                name="apat"
                value={formValues.apat}
                onChange={handleChange}
                placeholder="Apellido paterno"
            />
            <label for="amat">Apellido materno: </label>
            <input
                type="text"
                name="amat"
                value={formValues.amat}
                onChange={handleChange}
                placeholder="Apellido materno"
            />
            <label for="correo">Correo electrónico: </label>
            <input
                type="text"
                name="correo"
                value={formValues.correo}
                onChange={handleChange}
                placeholder="Correo electrónico"
            />
            <label for="edad">Edad: </label>            
            <input
                type="number"
                name="edad"
                value={formValues.edad}
                onChange={handleChange}
                placeholder="Edad en años"
            />
            <label for="fecha">Seleccione un día para entrevistarse con el encargado del voluntariado: </label>  
            <input
                type="date"
                name="fecha"
                value={formValues.fecha}
                onChange={handleChange}
            />
            <label for="fecha">Seleccione el día de la semana que desa ayudar en el voluntariado: </label>  
            <select name="select" value={formValues.select} onChange={handleChange}>
                <option value="1">Lunes</option>
                <option value="2">Martes</option>
                <option value="3">Miércoles</option>
                <option value="1">Jueves</option>
                <option value="2">Viernes</option>
                <option value="3">Sábado</option>
                <option value="3">Domingo</option>
            </select>

            <button type="submit">Completar registro</button>
        </form>
    );
}

export default Form;