const Planet = require('../data')
;
module.exports = async (req, res) => {
    console.log('is inside')
    try{
        const planets = await Planet.list();
        res.status(200).json(planets);
    } catch (error){
        console.log(error)
        restart.status(500).send(error)
    }
    
}