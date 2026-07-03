import express from 'express';
const router = express.Router();
// import mongoose from 'mongoose'; // we don't need to import mongoose here because we are importing it into a seperate file taskschema.js

// router.all("/", (req, res, next) => {
//     // do your code here

//     res.json({
//         status: "success",
//         message: "response from all",
//     });

//     next();
// });

//database table selecting

//to refactor the code, we can move the schema code below to separate file and import it here

// const taskSchema = new mongoose.Schema({

//     task:{
//         type: String,
//         required: true,
//     },    
//     hr: {
//         type: Number,
//         required: true, //validation
//         min: 1, //validation

//         max: [100, "are you sure, it seems too much hours"], //validation
//     },
//     type: {
//         type: String, 
//         enum: ["entry", "bad"], //validation - this will only allow these two values to be inserted in the database
//             },

// },
//     {
//         timestamps: true,
//     }); // this will allow us to crate schema
// const TaskCollection = mongoose.model("Task", taskSchema);

router.post("/", async (req, res, next) => {

try{
    
    //do your code
console.log(req.body, "------");
//insert task

const result = await TaskCollection(req.body).save();
console.log(result);
res.json({
    status: "success",
    message: "New task has been added successfully",
  });

} catch(error){
    console.log(error.message);
    res.json({
    status: "error",
    message: error.message,
  });
}


});
router.get("/", async (req, res, next) => {

    // do your code here
    
    //db.c.find()

    const tasks = await TaskCollection.find();

    res.json({
        status: "success",
        message: "Here are the lists of tasks",
        tasks,
    });
});
router.patch("/", async(req, res, next) => {

    // const {id, type} = req.body;
    const { _id, ...rest} = req.body;


    console.log(req.body);

    const result = await TaskCollection.findByIdAndUpdate(_id, rest, {new: true});


    // fakeDB = fakeDB.map((item) => {
    //     if(item.id === id) {
    //         item.type = type;
    //         return item;
    //     }else {
    //         return item;
    //     }
    // } );
    // do your code here
    res.json({
        status: "success",
        message: "your task has been updated successfully",
        result,
    });
});
router.delete ("/:_id", async(req, res, next) => {
    // do your code here

    const {_id} = req.params;
    // fakeDB = fakeDB.filter(item => item.id !== +id);

const result = await TaskCollection.findByIdAndDelete(_id);

    console.log(_id);
    res.json({
        status: "success",
        message: "your task has been deleted successfully",
        result,
    });
});

export default router