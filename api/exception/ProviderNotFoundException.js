class ProviderNotFoundException extends Error{
    constructor(){
        super('Fornecedor não encontrado')
        this.name='ProviderNotFoundException'
        this.id=0
    }
}

module.exports = ProviderNotFoundException