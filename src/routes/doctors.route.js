import {Router} from 'express'
import {createDoctor,getAllDoctors} from '../controllers/doctors.controller.js'
import { createDoctorValidator } from '../middlewares/reqValidation.js'




const router = Router()
router.get('/',getAllDoctors)
router.post('/',createDoctorValidator, createDoctor)
export default router