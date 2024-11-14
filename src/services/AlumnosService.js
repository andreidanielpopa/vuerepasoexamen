import axios from "axios";
import Global from "./../Global";

export default class AlumnosService {
    getToken(logIn) {
        return new Promise(function (resolve) {
            let request = 'api/auth/login';
            let url = Global.urlApiAlumnos + request;
            axios.post(url, logIn).then(response => {
                resolve(response.data.response);
            })
        })
    }

    getListaAlumnos() {
        return new Promise(function (resolve) {
            let request = 'api/Alumnos/FiltrarCurso/2024';
            let url = Global.urlApiAlumnos + request;
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + Global.token,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                resolve(response.data);
            })
        })
    }

    getPerfilAlumno(id) {
        return new Promise(function (resolve) {
            let request = 'api/Alumnos/FindAlumnoToken/' + id;
            let url = Global.urlApiAlumnos + request;
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + Global.token,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                resolve(response.data);
            })
        })
    }

    createAlumno(alumno) {
        return new Promise(function (resolve) {
            let request = 'api/Alumnos/InsertAlumnoToken';
            let url = Global.urlApiAlumnos + request;
            axios.post(url, alumno, {
                headers: {
                    'Authorization': 'Bearer ' + Global.token,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                resolve(response.data);
            })
        })
    }

    deleteAlumno(id) {
        return new Promise(function (resolve) {
            let request = 'api/Alumnos/DeleteAlumnoToken/' + id;
            let url = Global.urlApiAlumnos + request;
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + Global.token,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                resolve(response.data);
            })
        })
    }
}
