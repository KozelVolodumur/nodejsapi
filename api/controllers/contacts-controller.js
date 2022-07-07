const Contact = require('../models/contact-model');

class ContactsController {
    getAll = () => {
        return (req, res, next) => {
            res.status(200).json({
                sucess: true,
                data: [
                    {fname: "Tony", lname: "Pagt", phone: "555-111-1234"},
                    {fname: "Ben", lname: "Rfgh", phone: "555-111-7867"}
                ]
            })
        }
    }

    create = () => {
        return(req, res, next) =>{
            console.log(req);
            const obj = {fname: req.body.fname, lname: req.body.lname, email: req.body.email}
            res.status(200).json({success:true, method: "create", contact: obj});
        }
    }

    findById = () => {
        return (req, res, next) => {
            //console.log(req.query);
            res.status(200).json({success:true, method: "findById", contactId: req.params.id});
        }
    }

    update = () => {
        return (req, res, next) => {
            res.status(200).json({success:true, method: "update"});
        }
    }

    delete = () => {
        return (req,res,next) => {
            res.status(200).json({success:true, method: "delete"});
        }
    }
}

module.exports = new ContactsController();