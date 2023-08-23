import { validationResult } from 'express-validator';
import {UserService} from '../repository/index.js'
import { PersonService } from '../repository/index.js';
import { comparePassword, hashPassword } from '../utils/hashedPass.js';
import { DoctorService } from '../repository/index.js';

export const createDoctor = async(req,res,next) => { 
    const {errors} = validationResult(req)
    if (errors.length > 0) {
        return res.status(400).json({
            status: 'failed',
            payload: errors
        })
    }
    const personInfo = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birth_date: req.body.birth_date,
        address: req.body.address,
        phone_number: req.body.phone_number,
        dni: req.body.dni,
        gender_id: req.body.gender_id
    }
    const userInfo = {
        email: req.body.email,
        password: req.body.password,
        role_id: req.body.role_id,
        person_id: null
    }
    try {
        const { insertId: personId } = await PersonService.createPerson(personInfo);
        const hashedPass = hashPassword(userInfo.password);
        userInfo.person_id = personId;
        userInfo.password = hashedPass;
        const { insertId: userId } = await UserService.createUser(userInfo);

        if (req.body.role_id === 'PROFESIONAL') {
            // If the new user is a doctor, create a doctor entry.
            const doctorInfo = {
                doctor_id: null, // Assuming it's autoincremental
                user_id: userId,
                specialty_id: req.body.specialty_id // Assuming you get this from the request
            };
            await DoctorService.createDoctor(doctorInfo);
        }

        return res.json({
            status: 'OK',
            payload: { user_id: userId }
        });
    } catch (error) {
        // ... (error handling)
    }
 }


