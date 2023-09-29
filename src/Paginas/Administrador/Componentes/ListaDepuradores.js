import React from "react";

import "../Estilos/ContextoLista.css";

const listaDepuradores = [
  {
    Depurador: "Nombre Depurador 1",
    Sobrecarga: 1,
    Contacto: "ejemplo1@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 2",

    Contacto: "ejemplo2@ejemplo.com",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
];

function ContextoListaDepuradores() {
  return (
    <div className="container d-flex">
      <div className="row">
        {listaDepuradores.map(
          ({ Depurador, Sobrecarga, Contacto, proyectos }) => (
            <div className="col-4 " key={Depurador}>
              <div className="card text-center mt-3">
                <div className="card-body ">
                  <h4 className="card-title ">
                    {" "}
                    {Depurador ? Depurador : "nuevo depurador"}{" "}
                  </h4>
                  <p className="card-title title-primary">
                    {" "}
                    Nivel de carga: {Sobrecarga ? Sobrecarga : "0"}{" "}
                  </p>
                  <p className="card-title title-primary">
                    Contacto: {Contacto ? Contacto : "ejemplo@ejemplo.com"}{" "}
                  </p>
                  <p className="card-title title-primary">
                    Proyectos:{" "}
                    {proyectos ? proyectos : "no ha tenido proyectos"}{" "}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default ContextoListaDepuradores;
