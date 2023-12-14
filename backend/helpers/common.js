var mongoose = require('mongoose')

function generateMongoId(input1, input2) {
    try{
        let string = input1.toUpperCase().toString()+input2.toUpperCase().toString()
        let uuid = new mongoose.Types.ObjectId()
        return uuid
    }catch(e){
        console.log(e)
        throw new Error(e)
    }

}

module.exports = {
    generateMongoId
  };
  