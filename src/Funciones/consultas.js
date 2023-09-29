import {
  getFirestore,
  updateDoc,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  addDoc,
  orderBy,
  Timestamp,
} from "firebase/firestore";

export const obtenerReportesAdministrador = async (
  administradorId,
  estado,
  selectedItem
) => {
  try {
    const db = getFirestore();
    const referenciaAdministrador = doc(db, "administradores", administradorId);
    const proyectosCollection = collection(db, "proyectos");
    const reportesCollection = collection(db, "reportes");
    const proyectosFiltrados = query(
      proyectosCollection,
      where("administrador", "==", referenciaAdministrador)
    );
    const proyectoRefs = [];
    const proyectosQuerySnapshot = await getDocs(proyectosFiltrados);
    proyectosQuerySnapshot.forEach((doc) => {
      proyectoRefs.push(doc.ref);
    });

    let reportesFiltrados;
    if (selectedItem === 1) {
      reportesFiltrados = query(
        reportesCollection,
        where("proyecto", "in", proyectoRefs),
        where("estado", "==", estado),
        orderBy("fechaEmision")
      );
    } else if (selectedItem === 2) {
      reportesFiltrados = query(
        reportesCollection,
        where("proyecto", "in", proyectoRefs),
        where("estado", "==", estado),
        orderBy("prioridad")
      );
    } else if (selectedItem === 3) {
      reportesFiltrados = query(
        reportesCollection,
        where("proyecto", "in", proyectoRefs),
        where("estado", "==", estado),
        orderBy("fechaEstimadaTermino")
      );
    } else {
      reportesFiltrados = query(
        reportesCollection,
        where("proyecto", "in", proyectoRefs),
        where("estado", "==", estado)
      );
    }

    const reportesQuerySnapshot = await getDocs(reportesFiltrados);
    const reportes = [];
    reportesQuerySnapshot.forEach((doc) => {
      reportes.push({ ...doc.data(), id: doc.id });
    });

    if (selectedItem === 1) return reportes;
    else if (selectedItem === 2) reportes.reverse();
    return reportes;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Función asíncrona para obtener los datos de un administrador específico.
export const obtenerDatosAdministrador = async (administradorId) => {
  try {
    console.log("obtenerDatosAdministrador");
    // Crea una instancia de Firestore.
    const db = getFirestore();

    // Crea una referencia al documento del administrador en la colección "administradores" utilizando el ID proporcionado.
    const referenciaAdministrador = doc(db, "administradores", administradorId);

    // Obtiene el documento del administrador utilizando la referencia creada previamente.
    const administradorSnapshot = await getDoc(referenciaAdministrador);

    // Verifica si el documento existe en Firestore.
    if (administradorSnapshot.exists()) {
      // Si el documento existe, retorna un objeto con los datos del administrador y su ID.
      return { ...administradorSnapshot.data(), id: administradorId };
    } else {
      // Si el documento no existe, retorna un objeto vacío.
      return {};
    }
  } catch (error) {
    // Captura cualquier error que pueda ocurrir durante la ejecución.
    console.log(error); // Muestra el error en la consola.
    return {}; // Retorna un objeto vacío en caso de error.
  }
};

// Función asíncrona para obtener los datos de un administrador específico.
export const obtenerUsuario = async (usuarioId) => {
  try {
    console.log("obtenerUsuario");
    // Crea una instancia de Firestore.
    const db = getFirestore();

    // Crea una referencia al documento del usuario en la colección "usuarios" utilizando el ID proporcionado.
    const referenciaUsuario = doc(db, "usuarios", usuarioId);

    // Obtiene el documento del usuario utilizando la referencia creada previamente.
    const usuarioSnapshot = await getDoc(referenciaUsuario);

    // Verifica si el documento existe en Firestore.
    if (usuarioSnapshot.exists()) {
      // Si el documento existe, retorna un objeto con los datos del usuario y su Id
      return { ...usuarioSnapshot.data(), id: usuarioId };
    } else {
      // Si el documento no existe, retorna un objeto vacío.
      return {};
    }
  } catch (error) {
    // Captura cualquier error que pueda ocurrir durante la ejecución.
    console.log(error); // Muestra el error en la consola.
    return {}; // Retorna un objeto vacío en caso de error.
  }
};

// funcion para mostrar todos los reportes del usuario con el proyecto correspondiente
export const getReportesUsuario = async (usuarioId) => {
  try {
    console.log("getReportesUsuario");
    // Crea una instancia de Firestore.
    const db = getFirestore();

    const proyectosCollection = collection(db, "proyectos");
    const reportesCollection = collection(db, "reportes");

    const referenciaUsuario = doc(db, "usuarios", usuarioId);

    //obtenemos los proyectos que pertenecen al usuario
    const proyectosFiltrados = query(
      proyectosCollection,
      where("usuario", "==", referenciaUsuario)
    );

    //se crea una lista donde se guardaran los proyectos
    const proyectoRefs = [];
    const proyectosQuerySnapshot = await getDocs(proyectosFiltrados);

    proyectosQuerySnapshot.forEach((doc) => {
      proyectoRefs.push(doc.ref);
    });

    //se recuperan los reportes que pertenezcan a alguno de los proyectos
    const reportesFiltrados = query(
      reportesCollection,
      where("proyecto", "in", proyectoRefs),
      orderBy("fechaEmision")
    );
    //se recuperan los documentos filtrados
    const reportesQuerySnapshot = await getDocs(reportesFiltrados);
    const reportesPromises = reportesQuerySnapshot.docs.map(async (doc) => {
      const nombre = await getNombreProyecto(doc.data().proyecto);
      const data = doc.data();
      data.nombreProyecto = nombre;
      return { ...data, id: doc.id };
    });

    const reportes = await Promise.all(reportesPromises);
    return reportes.reverse();
  } catch (error) {
    console.log(error);
  }
};
// obtener proyectos correspondientes a un usuario
export const getProyectosUsuario = async (usuarioId) => {
  try {
    console.log("getproyectoUsuario");
    const db = getFirestore();

    const referenciaUsuario = doc(db, "usuarios", usuarioId);

    const proyectosQuery = query(
      collection(db, "proyectos"),
      where("usuario", "==", referenciaUsuario)
    );
    const proyectosQuerySnapshot = await getDocs(proyectosQuery);
    const proyectos = [];
    proyectosQuerySnapshot.forEach((doc) => {
      proyectos.push({ ...doc.data(), id: doc.id });
    });

    return proyectos;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const enviarReporteUsuario = async (datosReporte) => {
  try {
    console.log("enviarReporteUsuario");
    const db = getFirestore();

    const referenciaProyecto = doc(db, "proyectos", datosReporte.proyecto);

    const reporteData = {
      asunto: datosReporte.titulo,
      depurador: "",
      descripcionAdministrador: "",
      descripcionUsuario: datosReporte.descripcion,
      estado: 1,
      fechaEmision: serverTimestamp(),
      proyecto: referenciaProyecto,
      reasignacion: false,
    };
    await addDoc(collection(db, "reportes"), reporteData);
    return true;
    //alert("reporte enviado con éxito!");
  } catch (error) {
    console.log(error);
    return false;
    //alert("error en enviar el reporte");
  }
};

// obtener datos reporte dado un id
export const obtenerDatosReporte = async (reporteId) => {
  try {
    console.log("obtenerDatosReporte");
    const db = getFirestore();

    const referenciaReporte = doc(db, "reportes", reporteId);

    const reporteSnapshot = await getDoc(referenciaReporte);

    if (reporteSnapshot.exists()) {
      // Si el documento existe, retorna un objeto con los datos del administrador y su ID.
      return { id: reporteSnapshot.id, ...reporteSnapshot.data() };
    } else {
      // Si el documento no existe, retorna un objeto vacío.
      return {};
    }
  } catch (error) {
    // Captura cualquier error que pueda ocurrir durante la ejecución.
    console.log(error); // Muestra el error en la consola.
    return {}; // Retorna un objeto vacío en caso de error.
  }
};

// Función asíncrona para obtener la información del proyecto y su identificador a partir del id de un reporte.
export const obtenerInfoProyectoDesdeReporte = async (reporteId) => {
  try {
    console.log("obtenerInfoProyectoDesdeReporte");
    // Crea una instancia de Firestore.
    const db = getFirestore();

    // Crea una referencia al documento del reporte en la colección "reportes" utilizando el ID proporcionado.
    const referenciaReporte = doc(db, "reportes", reporteId);

    // Obtiene el documento del reporte utilizando la referencia creada previamente.
    const reporteSnapshot = await getDoc(referenciaReporte);

    // Verifica si el documento existe en Firestore.
    if (reporteSnapshot.exists()) {
      // Si el documento existe, obtiene la referencia del proyecto.
      const referenciaProyecto = reporteSnapshot.data().proyecto;

      // Obtiene el documento del proyecto utilizando la referencia del proyecto.
      const proyectoSnapshot = await getDoc(referenciaProyecto);

      // Verifica si el documento existe en Firestore.
      if (proyectoSnapshot.exists()) {
        // Si el documento existe, retorna un objeto con los datos del proyecto y su ID.
        return { ...proyectoSnapshot.data(), id: proyectoSnapshot.id };
      } else {
        // Si el documento del proyecto no existe, retorna un objeto vacío.
        return {};
      }
    } else {
      // Si el documento del reporte no existe, retorna un objeto vacío.
      return {};
    }
  } catch (error) {
    // Captura cualquier error que pueda ocurrir durante la ejecución.
    console.log(error); // Muestra el error en la consola.
    return {}; // Retorna un objeto vacío en caso de error.
  }
};

export const obtenerDepurador = async (depuradorId) => {
  try {
    console.log("obtenerDepurador");
    // Crea una instancia de Firestore.
    const db = getFirestore();

    // Crea una referencia al documento del depurador en la colección "depurador" utilizando el ID proporcionado.
    const referenciaUsuario = doc(db, "depuradores", depuradorId);

    // Obtiene el documento del depurador utilizando la referencia creada previamente.
    const usuarioSnapshot = await getDoc(referenciaUsuario);

    // Verifica si el documento existe en Firestore.
    if (usuarioSnapshot.exists()) {
      // Si el documento existe, retorna un objeto con los datos del usuario y su Id
      return { ...usuarioSnapshot.data(), id: depuradorId };
    } else {
      // Si el documento no existe, retorna un objeto vacío.
      return {};
    }
  } catch (error) {
    // Captura cualquier error que pueda ocurrir durante la ejecución.
    console.log(error); // Muestra el error en la consola.
    return {}; // Retorna un objeto vacío en caso de error.
  }
};

// funcion para mostrar todos los docs
export const getReportesDepurador = async (depuradorId, estado) => {
  try {
    console.log("getReportesDepurador");
    // Crea una instancia de Firestore.
    const db = getFirestore();

    const proyectosCollection = collection(db, "proyectos");
    const reportesCollection = collection(db, "reportes");
    const referenciaDepurador = doc(db, "depuradores", depuradorId);
    //obtenemos los proyectos que pertenecen al depurador

    const proyectosFiltrados = query(
      proyectosCollection,
      where("depuradores", "array-contains", referenciaDepurador)
    );

    //se crea una lista donde se guardaran los proyectos
    const proyectoRefs = [];
    const proyectosQuerySnapshot = await getDocs(proyectosFiltrados);
    proyectosQuerySnapshot.forEach((doc) => {
      proyectoRefs.push(doc.ref);
    });
    //se recuperan los reportes que pertenezcan a alguno de los proyectos
    const reportesFiltrados = query(
      reportesCollection,
      where("proyecto", "in", proyectoRefs),
      where("depurador", "==", referenciaDepurador),
      where("estado", "==", estado),
      orderBy("fechaEmision")
    );
    //se recuperan los documentos filtrados
    const reportesQuerySnapshot = await getDocs(reportesFiltrados);

    const reportesPromises = reportesQuerySnapshot.docs.map(async (doc) => {
      const nombre = await getNombreProyecto(doc.data().proyecto);
      const data = doc.data();
      data.nombreProyecto = nombre;
      return { ...data, id: doc.id };
    });

    const reportes = await Promise.all(reportesPromises);
    return reportes.reverse();
  } catch (error) {
    console.log(error);
  }
};

export const getNombreProyecto = async (referenciaReporte) => {
  try {
    console.log("getNombreProyecto");
    // Crea una instancia de Firestore.
    //const db = getFirestore();

    // Crea una referencia al documento del reporte en la colección "reportes" utilizando el ID proporcionado.
    //const referenciaReporte = doc(db, 'reportes', reporteId);

    // Obtiene el documento del reporte utilizando la referencia creada previamente.
    const reporteSnapshot = await getDoc(referenciaReporte);

    // Verifica si el documento existe en Firestore.
    if (reporteSnapshot.exists()) {
      // Si el documento existe, obtiene la referencia del proyecto.
      const nombreProyecto = reporteSnapshot.data().nombre;
      return nombreProyecto;
    } else {
      // Si el documento del reporte no existe, retorna un objeto vacío.
      return {};
    }
  } catch (error) {
    // Captura cualquier error que pueda ocurrir durante la ejecución.
    console.log(error); // Muestra el error en la consola.
    return {}; // Retorna un objeto vacío en caso de error.
  }
};

export const obtenerDepuradoresDesdeProyecto = async (proyectoId) => {
  try {
    // Crea una instancia de Firestore.
    const db = getFirestore();

    // Crea una referencia al documento del proyecto en la colección "proyectos" utilizando el ID proporcionado.
    const referenciaProyecto = doc(db, "proyectos", proyectoId);

    // Obtiene el documento del proyecto utilizando la referencia creada previamente.
    const proyectoSnapshot = await getDoc(referenciaProyecto);

    // Verifica si el documento existe en Firestore.
    if (proyectoSnapshot.exists()) {
      // Obtiene la lista de depuradores asociados al proyecto.
      const depuradores = proyectoSnapshot.data().depuradores || [];

      // Crea un array para almacenar los depuradores con su información.
      const depuradoresInfo = [];

      // Itera sobre los depuradores y obtiene su información.
      for (const depuradorRef of depuradores) {
        // Obtiene el documento del depurador utilizando la referencia del depurador.
        const depuradorSnapshot = await getDoc(depuradorRef);

        // Verifica si el documento del depurador existe en Firestore.
        if (depuradorSnapshot.exists()) {
          // Obtiene los datos del depurador y agrega un objeto con su información al array.
          depuradoresInfo.push({
            ...depuradorSnapshot.data(),
            id: depuradorSnapshot.id,
          });
        }
      }

      // Retorna el array de depuradores con su información.
      return depuradoresInfo;
    } else {
      // Si el documento del proyecto no existe, retorna un arreglo vacío.
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const actualizarReporte = async (
  reporteId,
  depuradorId,
  descripcionAdministrador,
  fechaEstimadaTermino,
  prioridad
) => {
  try {
    // Obtener una referencia al documento del reporte en Firestore
    const db = getFirestore();
    const reporteRef = doc(db, "reportes", reporteId);

    // Obtener una referencia al documento del depurador en Firestore
    const depuradorRef = doc(db, "depuradores", depuradorId);

    // Actualizar los campos del reporte
    const updateData = {
      depurador: depuradorRef,
      descripcionAdministrador: descripcionAdministrador,
      fechaEstimadaTermino: fechaEstimadaTermino,
      prioridad: prioridad,
      estado: 2,
    };

    await updateDoc(reporteRef, updateData);

    return true;
  } catch (error) {
    console.log("Error al actualizar el reporte:", error);
    return false;
  }
};

export const obtenerInformacionUsuario = async (proyectoId) => {
  try {
    // Obtener una instancia de Firestore
    const db = getFirestore();

    // Obtener la referencia del proyecto
    const proyectoRef = doc(db, "proyectos", proyectoId);

    // Obtener el documento del proyecto
    const proyectoSnapshot = await getDoc(proyectoRef);

    // Verificar si el documento existe
    if (proyectoSnapshot.exists()) {
      // Obtener la referencia del usuario asociado al proyecto
      const usuarioRef = proyectoSnapshot.data().usuario;

      // Obtener el documento del usuario
      const usuarioSnapshot = await getDoc(usuarioRef);

      // Verificar si el documento del usuario existe
      if (usuarioSnapshot.exists()) {
        // Obtener los datos del usuario
        const usuarioData = usuarioSnapshot.data();

        // Retornar los datos del usuario
        return usuarioData;
      }
    }

    // Si el proyecto o el usuario no existen, retornar null
    return null;
  } catch (error) {
    console.log("Error al obtener la información del usuario:", error);
    return null;
  }
};

export const aceptarBug = async (reporteId) => {
  try {
    const db = getFirestore();

    const reporteRef = doc(db, "reportes", reporteId);

    const nuevoEstado = { estado: 3 };

    await updateDoc(reporteRef, nuevoEstado);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const solicitarReasignacion = async (reporteId, comentario) => {
  try {
    const db = getFirestore();

    const reporteRef = doc(db, "reportes", reporteId);
    const nuevoMensaje = {
      mensaje: comentario,
      reasignacion: true,
    };
    await updateDoc(reporteRef, nuevoMensaje);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const enviarReporteFinal = async (reporteId, comentario) => {
  try {
    const db = getFirestore();

    const reporteRef = doc(db, "reportes", reporteId);
    const reporteFinal = {
      comentarioFinal: comentario,
      estado: 4,
    };
    await updateDoc(reporteRef, reporteFinal);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const enviarReporteParcial = async (reporteId, comentario) => {
  try {
    const db = getFirestore();
    const reporteRef = doc(db, "reportes", reporteId);
    const reporteParcial = {
      fechaReporte: serverTimestamp(),
      comentario: comentario,
      reporte: reporteRef,
    };
    await addDoc(collection(db, "reportesParciales"), reporteParcial);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getReportesParciales = async (reporteId) => {
  try {
    console.log("getReportesParciales");
    const db = getFirestore();
    console.log("muero aqui?1");
    const reporteRef = doc(db, "reportes", reporteId);

    const reportesParcialesQuery = query(
      collection(db, "reportesParciales"),
      where("reporte", "==", reporteRef),
      orderBy("fechaReporte")
    );

    const reportesParcialesQuerySnapshot = await getDocs(
      reportesParcialesQuery
    );
    const reportesParciales = [];
    reportesParcialesQuerySnapshot.forEach((doc) => {
      reportesParciales.push({ ...doc.data(), id: doc.id });
    });
    console.log(reportesParciales);
    return reportesParciales.reverse();
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getDepurador = async (depuradorRef) => {
  try {
    console.log("getDepurador");
    const documentSnapshot = await getDoc(depuradorRef);

    if (documentSnapshot.exists()) {
      const data = documentSnapshot.data();
      return data;
    } else {
      console.log("El documento no existe");
      return {};
    }
  } catch (error) {
    console.log("Error al obtener el documento:", error);
    return {};
  }
};

export const rechazarReporteUsuario = async (reporteId, comentario) => {
  try {
    console.log("rechazarReporteUsuario");
    const db = getFirestore();
    const reporteRef = doc(db, "reportes", reporteId);

    const cambioEstado = {
      estado: -1,
      comentarioRechazo: comentario,
    };
    await updateDoc(reporteRef, cambioEstado);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const aceptarBugFinal = async (reporteId) => {
  try {
    console.log("aceptarBugFinal");
    const db = getFirestore();
    const reporteRef = doc(db, "reportes", reporteId);

    const cambioEstado = {
      estado: 5,
    };
    await updateDoc(reporteRef, cambioEstado);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const rechazarReporteFinal = async (reporteId) => {
  try {
    console.log("aceptarBugFinal");
    const db = getFirestore();
    const reporteRef = doc(db, "reportes", reporteId);

    const cambioEstado = {
      estado: 3,
    };
    await updateDoc(reporteRef, cambioEstado);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const rechazarReasignacion = async (reporteId) => {
  try {
    console.log("aceptarBugFinal");
    const db = getFirestore();
    const reporteRef = doc(db, "reportes", reporteId);

    const cambioEstado = {
      estado: 3,
      reasignacion: false,
    };
    await updateDoc(reporteRef, cambioEstado);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const reasignarDepurador = async (depuradorSeleccionado, reporte) => {
  try {
    console.log("reasignarDepurador");
    const db = getFirestore();
    const reporteRef = doc(db, "reportes", reporte);
    const depuradorRef = doc(db, "depuradores", depuradorSeleccionado);
    const nuevoDepurador = {
      depurador: depuradorRef,
      reasignacion: false,
    };

    await updateDoc(reporteRef, nuevoDepurador);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const reasignarDepuradorOtroMomento = async (reporteId) => {
  try {
    console.log("reasignarDepuradorOtroMomento");
    const db = getFirestore();
    const reporteRef = doc(db, "reportes", reporteId);

    const cambioEstado = {
      estado: 1,
      depurador: null,
      fechaEstimadaTermino: null,
      prioridad: null,
      descripcionAdministrador: null,
      mensaje: null,
      reasignacion: false,
    };
    await updateDoc(reporteRef, cambioEstado);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const obtenerUsuariosPorAdministrador = async (administradorId) => {
  try {
    const db = getFirestore();
    const administradorRef = doc(db, "administradores", administradorId);
    const proyectosCollection = collection(db, "proyectos");
    const usuariosCollection = collection(db, "usuarios");

    const proyectosQuerySnapshot = await getDocs(
      query(proyectosCollection, where("administrador", "==", administradorRef))
    );

    const usuarios = [];

    for (const proyectoDoc of proyectosQuerySnapshot.docs) {
      const proyectoData = proyectoDoc.data();
      const usuarioRef = proyectoData.usuario;
      const usuarioDoc = await getDoc(usuarioRef);

      if (usuarioDoc.exists()) {
        const usuarioData = usuarioDoc.data();
        usuarios.push({ ...usuarioData, id: usuarioDoc.id });
      }
    }

    console.log(usuarios);
    return usuarios;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const conseguirTipoDeCuenta = async (email) => {
  // se busca en cada colección al usuario, y dependiendo de la colección a la que pertenezca
  // se le asigna su tipo de cuenta
  // usuarios == 1
  // administradores == 2
  // depuradores == 3
  // ninguno == -1
  try {
    const db = getFirestore();

    const usuariosRef = collection(db, "usuarios");

    let q = query(usuariosRef, where("cuenta.correo", "==", email));

    let querySnaspshot = await getDocs(q);

    if (querySnaspshot.size > 0) {
      console.log("el usuario es usuario");
      const id = querySnaspshot.docs[0].id;
      return { id: id, accType: 1 };
    }

    const administradoresRef = collection(db, "administradores");

    q = query(administradoresRef, where("cuenta.correo", "==", email));

    querySnaspshot = await getDocs(q);

    if (querySnaspshot.size > 0) {
      console.log("el usuario es administrador");
      const id = querySnaspshot.docs[0].id;
      return { id: id, accType: 2 };
    }

    const depuradoresRef = collection(db, "depuradores");

    q = query(depuradoresRef, where("cuenta.correo", "==", email));

    querySnaspshot = await getDocs(q);

    if (querySnaspshot.size > 0) {
      console.log("el usuario es depurador");
      const id = querySnaspshot.docs[0].id;
      return { id: id, accType: 3 };
    }

    console.log("el usuario no es nada xd");
    return { id: "-1", accType: -1 };
  } catch (error) {
    console.log(error);
    console.log("no se pudo encontrar en la base de datos");
    return { id: "-1", accType: -1 };
  }
};
