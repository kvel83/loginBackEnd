const { getUserByEmail } = require('../models/User');

const getUser = async(req,res) => {
    try {
        const data = await getUserByEmail(req.body.email);
        if (data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message: "datos del usuario no encontrados"});
        }

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports= {getUser};