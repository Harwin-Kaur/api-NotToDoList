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
    const TaskCollection = mongoose.model("Task", taskSchema);