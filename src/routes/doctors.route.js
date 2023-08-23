import {Router} from 'express'
import {createDoctor} from '../controllers/doctors.controller.js'



const router = Router()
router.get('/',getAllDoctor)
router.post('/newDoctor', createDoctor)
export default router