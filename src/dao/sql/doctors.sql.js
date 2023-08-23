import pool from "../../utils/db.js"

class Doctor {
    constructor(){}    
    create = async(doctor) => {
        const data = await pool.query('INSERT INTO Doctors (user_id, specialty_id) VALUES (?, ?)', [doctor.user_id, doctor.specialty_id]) 
        return data[0]
    }



    getAll = async() => {
        const data = await pool.query('SELECT * FROM Doctors')
        return data
    }

    

    getOneById = async(id) => {
        const data = await pool.query('SELECT * FROM Doctors WHERE id =?', [id])
        return data[0]
    }
    getOneByName = async(name) => {
        const data = await pool.query('SELECT D.* FROM Doctors D JOIN Users U ON D.user_id = U.id JOIN Persons P ON U.person_id = P.id WHERE P.last_name = ? LIMIT 1;', [name])
        return data[0]
    }
    
}

export const doctor = new Doctor()