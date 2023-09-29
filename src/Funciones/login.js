import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { conseguirTipoDeCuenta } from "./consultas";

export const signIn = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Estás intentando iniciar sesión");
      const cuenta = await conseguirTipoDeCuenta(email);
      resolve(cuenta);
    } catch (error) {
      console.log(error);
      console.log("Cuenta incorrecta");
      resolve({ id: "-1", accType: -1 });
    }
  });
};
export const currentUser = async () => {
  try {
    const auth = getAuth();
    console.log(auth.currentUser);
  } catch (error) {
    console.log(error);
  }
};
