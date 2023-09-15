const Character = require('../data')
;
module.exports = async (req, res) => {

    try{
        const characters = await Character.list();
        res.status(200).json(characters);
    } catch (error){
        console.log(error)
        restart.status(500).send(error)
    }
    
}