class MiClase {
    constructor(p1, p2) {
        this.prop = p1
        this.prop2 = p2
    }
    metodo() {

    }
}

const instancia = new MiClase(4, 6)
console.log(instancia)

// Example use

Object.prototype.log = function () {
    console.log(this)
}

const x = { a: 1 }

console.log(x.log())

if (!String.prototype.trim) {
    String.prototype.trim = () => {
        try {
            return this.replace(/^\s+|\s+$/g, "")
        } catch (ex) {
            return this
        }
    }
}

console.log("      Hello ".trim())


