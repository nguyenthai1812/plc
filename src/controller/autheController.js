export const checkLogin = (req,res,next) => {
    let{userName,passWord} = req.body;
    if(userName == 'admin'&& passWord == 'admin') {
        res.json({message:'Login Success'})
        return next()       
    }else{
        res.json({message:'Login Fail'})
    }
}