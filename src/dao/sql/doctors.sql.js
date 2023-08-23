import pool from "../../utils/db.js"

class Doctor {
    constructor(){}
    createDoctor = async (doctorInfo) => {
        const { user_id, specialty_id } = doctorInfo;
        const query = 'INSERT INTO Doctors (user_id, specialty_id) VALUES (?, ?)';
        try {
            const result = await pool.query(query, [user_id, specialty_id]);
            return result;
        } catch (error) {
            throw error;
        }
    };
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