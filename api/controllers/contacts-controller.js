

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
            res.status(200).json({success:true, method: "create"});
        }
    }

    findById = () => {
        return (req, res, next) => {
            res.status(200).json({success:true, method: "findById"});
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