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

let fakeDB = [{ id: 3, task: 'coding', hr: 5, type: 'entry' },
  { id: 2, task: 'cooking', hr: 2, type: 'entry' },
  { id: 1, task: 'Gym', hr: 1, type: 'entry' }];

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
router.patch("/", (req, res, next) => {

    const {id, type} = req.body;
    fakeDB = fakeDB.map((item) => {
        if(item.id === id) {
            item.type = type;
            return item;
        }else {
            return item;
        }
    } );
    // do your code here
    res.json({
        status: "success",
        message: "your task has been updated successfully",
    });
});
router.delete("/:id", (req, res, next) => {
    // do your code here

    const {id} = req.params;
    fakeDB = fakeDB.filter(item => item.id !== +id);

    console.log(id);
    res.json({
        status: "success",
        message: "your task has been deleted successfully",
    });
});

export default router