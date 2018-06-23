const swag = require('../models/swag')
 
module.exports = {
    search: (req,res,next)=> {
        const {category} = req.query
        if(!category){
            res.status(200).send(sway)
        }else{
            const filteredSwag = swag.filter(swag=> swag.category === category)
            res.status(200).send(filteredSwag)
        }
        
    }
}