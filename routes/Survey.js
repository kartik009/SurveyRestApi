const express = require('express');
const router = express.Router();

var bodyparser = require('body-parser');

//models
let survey = [];

// let Questions = [];

// let Answers =[];

// let Result =[];


// router.get('/Survey/:id', (req, res)=>{

//     const su = survey.find(c=>c.sid === parseInt(req.params.id))
//     res.send(su);

// });


router.get('/Result/:id', (req, res) => {

    const su = survey.find(c => c.sid === parseInt(req.params.id))
    res.status(200).send({ data: su, message: "Succesfull" });

});


router.get('/Survey', (req, res) => {

    res.status(200).send({ data: survey, message: "Succesfull" });

});


router.post('/AddSurvey', (req, res) => {

    const s = req.body;

    if (!s) res.status(400).send({ message: "Invalid data" });

    survey.push(s);

    res.status(200).send({ data: s, message: "Succesfull" });

});


// 1st total 1 , yes 1 no 0
router.post('/Answers', (req, res) => {

    const a = req.body;

    if (!a) res.status(400).send({ message: "Invalid data" });

    getresult(a);
    res.status(200).send({ message: "Survey Completed" });

});

var getresult = function (a) {

    var len = survey.length
    for (let c of survey) {
        if (c.sid === a.sid) {
            const ans1 = a.answers;



            ans1.forEach(element => {
                for (let a of c.Questions) {
                    if (element.qid === a.qid) {
                        if (element.ans == true) {
                            a.yes++;
                            a.total++;

                        }
                        else if (element.ans == false) {
                            a.no++;
                            a.total++;

                        }
                        else {
                            a.total++;
                        }
                    }
                }
            });


        };
    }

}

module.exports = router