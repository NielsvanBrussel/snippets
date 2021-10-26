const router = require ('express').Router()
const Snippet = require ('../models/Snippet')


// get all snippets

router.get('/all', async (req, res) => {
    try { 
        
        const allSnippets = await Snippet.find()
        res.send(allSnippets)
        
    } catch (err) { 
        res.send(err)
        }
    
})

// create a snippet

router.post('/create', async (req, res) => {

    try {
        
        await Snippet.create(req.body)        
        res.send("Snippet saved!")
       
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }

})

// update a snippet

router.post('/update/:id', async (req, res) => {
    
    try {
        const updatedSnippet = await Snippet.findByIdAndUpdate(req.params.id, req.body, {new: true});        
        res.send(updatedSnippet)
        console.log(updatedSnippet)
       
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }

})

// delete a snippet

router.delete('/delete/:id', async (req, res) => {

     try {
        const snippetDeleted = await Snippet.findById(req.params.id);
        if(!snippetDeleted) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            })
        }
        await snippetDeleted.remove()
        

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        }) 
    } 

})

module.exports = router