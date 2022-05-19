
import Show from "../module/showsModule";
import ApiFeatures from "../utils/apiFeature";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middleware/catchAsyncError";

//Get All the shows
export const getAllShows = catchAsyncErrors(async(req, res) =>{
      
    const apiFeature =new  ApiFeatures(Show.find(), req.query).search().filter();

    const shows =  await  apiFeature.query;
        res.status(200).json({   success: true, shows });
    }
)

//Post the Shows
export const createShows = catchAsyncErrors(async (req,res,next) =>{
   
    const show = await Show.create(req.body);

    res.status(201).json({ success: true, show })
    }
);

//Update the Shows
export const updateShow = catchAsyncErrors(
    async (req,res,next) =>{
        let show =await Show.findById(req.params.id);
    
        if (!show) {
            return next(new ErrorHandler("Show not found", 404))
        }
    
        show = await Show.findByIdAndUpdate(req.params.id, req.body, {new: true, renValidators:true, useFindModify: false});
    
        res.status(200).json({
            success: true, show
        })
    }
)

//Delete the show

export const deleteShow = catchAsyncErrors(
    async(req,res, next) =>{
        const show = await Show.findById(req.params.id);
    
        if(!show){
            return next(new ErrorHandler("Product not found", 404))
        }
    
        await show.remove();
    
        res.status(200).json({
            success: true, message: "Show deleted"
        })
    }
)
