import doctorDTO from '../dao/dto/DoctorDTO.js'


export default class DoctorRepository {
    constructor(doctor) {
        this.doctor = doctor
    }
    getAllDoctors = async() => {
        return await this.doctor.getAll()
    }
    createDoctor = async(doctor) => {
        const newDoctor = new doctorDTO(doctor)
        return await this.doctor.create(newDoctor)
    }
    getDoctorByName = async(name) => {
        return await this.doctor.getDoctorByName(name)
    }
    getDoctorById = async(id) => {
        return await this.doctor.getDoctorById(id)
    }
}
