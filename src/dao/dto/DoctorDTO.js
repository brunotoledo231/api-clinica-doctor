export default class doctorDTO {
    constructor(doctor){
        this.doctor_id = doctor.doctor_id || null
        this.user_id = doctor.user_id
        this.specialty_id = doctor.specialty_id
        
    }
}
 