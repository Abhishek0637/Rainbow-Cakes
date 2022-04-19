import cakeModel from '../model/cakeModel.js';

export const getCakes=async(req,res)=>{
    try{ 
    const allRequest = await cakeModel.find({});
    
     res.status(200).send(allRequest);
    }catch(error){
        res.status(409).json({ message: error.message });
    
    }
    };
export const addCake=async(req,res)=>{
  try{
    console.log("trigered");
    console.log(req.body);
const newRequest=await cakeModel.create(req.body);

res.status(201).json({status:"success",request : newRequest});

  }catch(error){
    res.status(409).json({ message: error.message });
  }
};
