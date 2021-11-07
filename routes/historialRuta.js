import {
    Router
} from "express"
import {
    historialRutaNuevaRuta,
    historialRutaBuscarConductor,
    historialRutaRefrescarConductor,

    historialRutaListadoPasajeros,
    historialRutaPasajeroFeedback,
    historialRutaConductorFeedback,
    aceptarViajeidConductor,
    historialRutaBuscarPasajero,
    historialPasajero,
    historialConductor,
    historialViajePendiente
} from "../controllers/historialRuta.js";

const router = Router();
router.post('/nuevaruta', historialRutaNuevaRuta);
router.post('/buscarconductor/:id', historialRutaBuscarConductor);
router.post('/buscarpasajero', historialRutaListadoPasajeros);
router.post('/refrescarpasajero', historialRutaBuscarPasajero);
router.post('/refrescarconductor/:id', historialRutaRefrescarConductor);
router.post('/conductoraceptaviaje', aceptarViajeidConductor);
router.post('/pasajero/feedback', historialRutaPasajeroFeedback);
router.post('/conductor/feedback', historialRutaConductorFeedback);
router.post('/historialpasajero', historialPasajero);    
router.post('/historialconductor', historialConductor);    
router.post('/viajependiente', historialViajePendiente);

export default router;