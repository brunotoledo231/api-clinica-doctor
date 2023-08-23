import UserRepository from './users.respository.js'
import PersonRepository from './persons.repository.js'
import DoctorRepository from './doctor.repository.js'
import {user} from '../dao/sql/users.sql.js'
import {person} from '../dao/sql/persons.sql.js'
import {doctor} from '../dao/sql/doctors.js'

export const UserService = new UserRepository(user)
export const PersonService = new PersonRepository(person)
export const DoctorService = new DoctorRepository(doctor)
