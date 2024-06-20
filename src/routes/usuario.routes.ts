import { Router } from "express";
import { check } from "express-validator";
import {
  activarUsuario,
  actualizarPermisos,
  actualizarUsuario,
  buscarCelular,
  buscarCorreoElectronico,
  crearUsuario,
  eliminarUsuario,
  getTodosLosUsuarios,
  getUsuario,
  getUsuarios,
} from "../controllers/usuario.controllers";
import validarCampos from "../middlewares/validar-campos";
import validarJWT from "../middlewares/validar-jwt";

const router = Router();

router.get("/", validarJWT, getUsuarios);
router.get("/todos", validarJWT, getTodosLosUsuarios);
router.get("/:id", validarJWT, getUsuario);
router.get("/buscarCelular/:celular", validarJWT, buscarCelular);
router.post(
  "/",
  validarJWT,
  [
    check("primerNombre", "El primer nombre es obligatorio").not().isEmpty(),
    check("primerApellido", "El primer apellido es obligatorio")
      .not()
      .isEmpty(),
    check("fechaNacimiento", "La fecha de nacimiento es obligatoria")
      .not()
      .isEmpty(),
    check("nacionalidad_id", "La nacionalidad es obligatoria").not().isEmpty(),
    check("direccion", "La dirección de residencia es obligatoria")
      .not()
      .isEmpty(),
    check(
      "ciudadDireccion",
      "La ciudad de la dirección de residencia es obligatoria"
    )
      .not()
      .isEmpty(),
    check(
      "paisDireccion",
      "El país de la dirección de residencia es obligatorio"
    )
      .not()
      .isEmpty(),
    check("esJoven", "Selecciones si es o no joven").not().isEmpty(),
    check("genero_id", "El género es obligatorio").not().isEmpty(),
    check("estadoCivil_id", "El estado civil es obligatorio").not().isEmpty(),
    check("rolCasa_id", "El rol es obligatorio").not().isEmpty(),
    check("nacionalidad_id", "Selecciona una nacionalidad").not().isEmpty(),
    check("gradoAcademico_id", "Selecione un grado académico").not().isEmpty(),
    check("ocupacion", "El campo Ocupación es obligatorio").not().isEmpty(),
    check("tipoMiembro_id", "Seleccione un tipo de miembro (MN, MA, MNA, ME)")
      .not()
      .isEmpty(),
    check("congregacion", "Indique a que congregación pertenece")
      .not()
      .isEmpty(),
    validarCampos,
  ],
  crearUsuario
);
router.put(
  "/:id",
  validarJWT,
  [
    check("primerNombre", "El primer nombre es obligatorio").not().isEmpty(),
    check("primerApellido", "El primer apellido es obligatorio")
      .not()
      .isEmpty(),
    check("fechaNacimiento", "La fecha de nacimiento es obligatoria")
      .not()
      .isEmpty(),
    check("nacionalidad_id", "La nacionalidad es obligatoria").not().isEmpty(),
    check("esJoven", "Selecciones si es o no joven").not().isEmpty(),
    check("genero_id", "El género es obligatorio").not().isEmpty(),
    check("estadoCivil_id", "El estado civil es obligatorio").not().isEmpty(),
    check("rolCasa_id", "El rol es obligatorio").not().isEmpty(),
    check("gradoAcademico_id", "El grado academico es obligatorio")
      .not()
      .isEmpty(),
    check("tipoMiembro_id", "La tipo de miembro es obligatori").not().isEmpty(),
    validarCampos,
  ],
  actualizarUsuario
);
router.delete("/:id", validarJWT, eliminarUsuario);
router.put("/activar/:id", validarJWT, activarUsuario);
router.put("/actualizarpermisos/:id", validarJWT, actualizarPermisos);

export default router;
