const ProviderNotFoundException = require('../../exception/ProviderNotFoundException')
const ModelProviders = require('./ModelProviders')

class Provider {
    constructor({id, company, email, category, created_at, updated_at}){
        this.id = id
        this.company = company
        this.email = email
        this.category = category
        this.created_at = created_at
        this.updated_at = updated_at
    }

    async create(){
        const result = await ModelProviders.insert({
            company: this.company,
            email: this.email,
            category: this.category
        })

        this.id = result.id
        this.created_at = result.created_at
        this.updated_at = result.updated_at
    }

    async load(id){
        const providerFound = await ModelProviders.findOne({
            where: {
                id: id
            }
        })

        if (!providerFound) throw new ProviderNotFoundException()
        
        this.company = providerFound.company
        this.category = providerFound.category
        this.created_at = providerFound.created_at       
        this.updated_at = providerFound.updated_at
    }

    async update(id, data){
        await this.load(id)

        const providerFound = await ModelProviders.update(
            data,
            {
                where: { id: id }
            }
        )        
        
        this.company = providerFound.company
        this.category = providerFound.category    
    }

    async delete(id){
        await this.load(id)

        await ModelProviders.destroy(            
            {
                where: { id: id }
        
            }
        )
    }
}

module.exports = Provider