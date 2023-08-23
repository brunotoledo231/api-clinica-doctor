import express from 'express'
import doctorsRoute from './routes/doctors.route.js'
import cors from 'cors'

const app = express();


app.use(cors('*'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))




app.use('/api/doctors', doctorsRoute)
app.use('/', (req, res) => {
    res.json({
        title: 'Proyecto hospital',
        routes: {
            doctors: {
                get: {
                    getAllDoctors: '/api/doctors'
                    },
                post: {
                    createDoctor: '/api/doctors'
                }
    }   }   }
    )
})


// app.use('/api/users', usersRoute)
// app.use('/', (req, res) => {
//     res.json({
//         title: 'Proyecto hospital',
//         routes: {
//             users: {
//                 get: {
//                     getAllUsers: '/api/users',
//                     },
//                 post: {
//                     createUser: '/api/users',
//                     login: '/api/users/login',
//                 }
//     }}}
//     )
// })

const port = 8000

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})