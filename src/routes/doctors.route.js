import {Router} from 'express'
import {createDoctor,getAllDoctors} from '../controllers/doctors.controller.js'




const router = Router()
router.get('/',getAllDoctors)
router.post('/newDoctor', createDoctor)
export default router