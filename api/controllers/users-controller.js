class UsersController{

    singup = () => {
        return(req, res, next) => {
            res.status(200).json({success: true, method: "singup"})
        }
    }

    update = () => {
        return (req, res, next) => {
            res.status(200).json({success: true, method: "update"})
        }
    }

    login = () => {
       return (req, res, next) => {
            res.status(200).json({success: true, method: "login"})
        }
    }

    loggedInUser = () => {
        return (req, res, next) => {
            res.status(200).json({success: true, method: "loggedInUser"})
        }
    }
}

module.exports = new UsersController();