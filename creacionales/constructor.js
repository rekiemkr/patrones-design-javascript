// con azucar sintactica
class MiClase {
    constructor(initProp) {
        this.propiedad = initProp
        this.metodo = () => {

        }
    }
}
const instancia = new MiClase(4)
console.log(instancia)


// sin azucar sintactica
function MiClaseF(initProp) {
    this.propiedad = initProp
    this.metodo = () => {

    }
}
const instancia2 = new MiClaseF(initProp)
console.log(instancia2)