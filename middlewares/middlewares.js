export const authLogin = () => {
    return (req, res, next) => {
        if (req.session.email != null) {
            next()
        } else {
            res.redirect('/')
        }
    }
}

export const getRegisterAuth = (permissions) => {
    return (req, res, next) => {
        const userRole = req.session.role
        if(permissions.includes(userRole)) {
            next()
        } else {
            return res.status(401).json("Usuario não tem permissão, nivel: "+userRole)
        }
    }
}