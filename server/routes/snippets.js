const router = require ('express').Router()
const Snippet = require ('../models/Snippet')




router.get('/all', async (req, res) => {
    try { 
        
        const allSnippets = await Snippet.find()
        res.send(allSnippets)
        
    } catch (err) { 
        res.send(err)
        }
    
})

router.post('/create', async (req, res) => {

    try {
        
        await Snippet.create(req.body)        
        res.send("Snippet saved!")
       
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }

})

module.exports = router