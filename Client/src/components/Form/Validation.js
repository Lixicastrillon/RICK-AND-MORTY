export default (data) => {
    let errors = {}

    if(!data.email.includes("@")) {
        errors.ema1 = "Email no es valido"
    }
    if(!data.email){
        errors.ema2="Ingrese Email"
    }
    if(data.email.length>35){
        errors.ema3="menos de 35 caracteres"
    }
    if(!/\d/.test(data.password)){
        errors.pass1="Al menos debe tener un número"
    }
    if(data.password.length <6 || data.password.length >10){
        errors.pass2= "la contraseña debe tener entre 6 a 10 caracteres"
    }
    return errors
}