var express = require('express');
var router = express.Router();

//會員資料導入
const users = [];
//測試
const data = [
    {
        id:1,
        title: '讚ㄉ'
    }
]

/* GET localhost:3000/api. */
router.get('/products', function(req, res, next) {
  
    res.send({
   success: true,
   data 
  });
    res.end();

});

app.post('/register', (req, res) => {
    const {username, password, emaill} = req.body;
    //輸入帳號、密碼、email錯誤
    if(!username || !password || !emaill){
        return res.status(400).json({message:'會員資料錯誤，請重新嘗試!'});
    }

    if(users.some((user) => user.usernsme === username)){
        return res.status(400).json({message:'訊息確認'})
    }

    const user = {username, password, emaill};
    user.push(user);

    return res.status(400).json({message:'帳號確認'});
});

app.post('api/login',(req, res) => {
    const {username, password } = req.body;
    if(!username || !password){
        return res.status(400).json({message:'請確認帳號是否正確'});
    }

    const user = users.find((user) => user.username === username && user.password === password);
    if(!user){
        return res.status(401).json({ message:"輸入錯誤請重新輸入"});
    }

    return res.statu(200).json({ message:'登入成功!'});
});

app.listen(port, () => {
    console.log(`Member management API is running on http://localhost:${port}`);
  });
module.exports = router;
