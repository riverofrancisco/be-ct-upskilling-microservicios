const Film = require('../data')
;
module.exports = async (req, res) => {
    console.log('is inside')
    try{
        const films = await Film.list();
        res.status(200).json(films);
    } catch (error){
        console.log(error)
        restart.status(500).send(error)
    }
    
}