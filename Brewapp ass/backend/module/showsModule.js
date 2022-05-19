import mongoose from "mongoose";
const Schema = mongoose.Schema;

const showSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "#show" 
    },
    image: {
        type: String,
        required: true
    },
    category:[
        {
            type: String,
            required: [ true, "Please Enter Product category"],
        }
    ]
});
   
export default mongoose.model("Show",showSchema);



