const express = require('express');
const passwords = require("random-passwords-generator")
router = express.Router();

router.get('/', (req, res)=>{
    options ={
        LENGTH: 10,
        ALLOW_ALPHABETHS_LOWERCASE: true,
        ALLOW_ALPHABETHS_UPPERCASE: true,
        ALLOW_NUMBERS: true,
        ALLOW_SPECIAL_CHARACTERS: false,
        MIN_ALPHABETHS_LOWERCASE: 2,
        MIN_ALPHABETHS_UPPERCASE: 2,
        MIN_NUMBER: 2,
       

    }
    password = passwords(options);
    res.render('index', {password});
    
    console.log(password);
})






module.exports = router;