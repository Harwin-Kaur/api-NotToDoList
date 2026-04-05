import express from 'express'
const router = express.Router()

// router.all("/", (req, res, next) => {
//     // do your code here

//     // res.json({
//     //     status: "success",
//     //     message: "response from all",
//     // });

//     next();
// });

let fakeDB = [];

router.post("/", (req, res, next) => {
    // do your code here
    // console.log(req.body);// received the data as object in the body
    fakeDB.push(req.body);
    console.log(fakeDB);
    res.json({
        status: "success", 
        message: "New task has been added successfully",
    });
});
router.get("/", (req, res, next) => {
    // do your code here
    res.json({
        status: "success",
        message: "Here are the lists of tasks",
        tasks: fakeDB,
    });
});
router.put("/", (req, res, next) => {
    // do your code here
    res.json({
        status: "success",
        message: "response from put",
    });
});
router.delete("/", (req, res, next) => {
    // do your code here
    res.json({
        status: "success",
        message: "response from delete",
    });
});

export default router