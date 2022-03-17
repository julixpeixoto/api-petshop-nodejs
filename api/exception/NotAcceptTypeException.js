class NotAcceptTypeException extends Error{
    constructor(contentType){
        super(`Formato não aceito: ${this.contentType}`)
        this.name='NotAcceptTypeException'
        this.id=0        
    }
}

module.exports = NotAcceptTypeException