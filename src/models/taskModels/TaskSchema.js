import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({

    task:{
        type: String,
        required: true,
    },    
    hr: {
        type: Number,
        required: true, //validation
        min: 1, //validation

        max: [100, "are you sure, it seems too much hours"], //validation
    },
    type: {
        type: String, 
        enum: ["entry", "bad"], //validation - this will only allow these two values to be inserted in the database
            },

},
    {
        timestamps: true,
    }); 

     // this will allow us to crate schema
    // const TaskCollection = mongoose.model("Task", taskSchema);

    // export default mongoose.model("Task", taskSchema); // so we need to export the task schema so that and we can import it with any name because we used dafault keyword

    const TaskCollection = mongoose.model("Task", taskSchema);

    export const insertTask = (taskObj)=>{
        return TaskCollection(taskObj).save();
    };
    export const getTasks = ()=>{
        // return TaskCollection.find();
    };
    export const updateTask = (_id, rest)=>{
        return TaskCollection.findByIdAndUpdate(_id, rest, {new: true});;
    };  
    export const deleteTask = (_id)=>{
        return TaskCollection.findByIdAndDelete(_id);
    };