import mongoose from 'mongoose';

const cakeSchema=mongoose.Schema({
    name:{
        type : String
        
    },
    varients:{
        type:[]
    },
    prices:{
        type:[]
    },
    image:{
        type:String
        
    },
    description:{
        type:String
      
    }
},{
    timestamps:true
}
)

const cakeModel=mongoose.model('CakeData',cakeSchema);
export default cakeModel;