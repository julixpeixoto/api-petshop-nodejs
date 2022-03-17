const NotAcceptTypeException = require("./exception/NotAcceptTypeException");

class Serializer{
    json(data){
        return JSON.stringify(data)
    }

    serialize(data){
        if(this.contentType == 'application/json'){
            return this.json(data)
        }

        throw new NotAcceptTypeException(this.contentType);
    }
}

module.exports = {
    Serializer: Serializer,
    acceptTypes: ['application/json']
}