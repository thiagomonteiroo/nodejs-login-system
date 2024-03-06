export const authLogin = (permissions) => {
    return (req, res, next) => {
        //const userRole = req.body.role
        const userRole = req.session.role
        if(permissions.includes(userRole)) {
            next()
        } else {
            return res.status(401).json("Usuario não tem permissão, nivel: "+userRole)
        }
    }
}