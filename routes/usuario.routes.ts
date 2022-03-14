import { Router } from "express";
import { check } from "express-validator";
import {
  actualizarUsuario,
  crearUsuario,
  eliminarUsuario,
  getUsuario,
  getUsuarios,
} from "../controllers/usuario.controllers";
import validarCampos from "../middlewares/validar-campos";
import validarJWT from "../middlewares/validar-jwt";

const router = Router();

router.get("/", validarJWT, getUsuarios);
router.get("/:id", validarJWT, getUsuario);
router.post(
  "/",
  validarJWT,
  [
    check("primerNombre", "El primer nombre es obligatorio").not().isEmpty(),
    check("primerApellido", "El primer apellido es obligatorio")
      .not()
      .isEmpty(),
    check("nacionalidad", "La nacionalidad es obligatoria").not().isEmpty(),
    check("email", "El correo electrónico es obligatorio").isEmail(),
    check("numeroCelular", "El número de celular es obligatorio")
      .not()
      .isEmpty(),
    check("fechaNacimiento", "La fecha de nacimiento es obligatoria")
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
    check("nacionalidad", "La nacionalidad es obligatoria").not().isEmpty(),
    check("email", "El correo electrónico es obligatorio").isEmail(),
    check("numeroCelular", "El número de celular es obligatorio")
      .not()
      .isEmpty(),
    check("fechaNacimiento", "La fecha de nacimiento es obligatoria")
      .not()
      .isEmpty(),
    validarCampos,
  ],
  actualizarUsuario
);
router.delete("/:id", validarJWT, eliminarUsuario);

export default router;
