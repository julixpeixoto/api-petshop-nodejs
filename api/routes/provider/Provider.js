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
}

module.exports = Provider