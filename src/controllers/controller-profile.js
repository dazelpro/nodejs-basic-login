module.exports ={
    profile(req,res){
        res.render("profile",{
            url: 'http://localhost:5050/',
            userName: req.session.username,
        });
    }
}