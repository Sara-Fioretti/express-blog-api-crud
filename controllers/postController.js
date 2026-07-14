const posts = require('../data/posts')

//INDEX: Deve restituire la lista dei post in formato Json//
function index(req, res) {
        res.json(posts)
};

//SHOW: Deve restituire un singolo post in formato Json//
function show(req, res) {
        const postId = req.params.id
        const postCercato = posts.find(post => post.id == postId)
        res.json(postCercato);
};

//DESTROY: eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, 
// e rispondere con uno stato 204 e nessun contenuto//
function destroy(req, res) {
        const postId = req.params.id
        const postCercato = posts.find(post => post.id == postId)
        const postAggiornati = posts.splice(posts.indexOf(postCercato), 1)
        console.log(postAggiornati)
        res.sendStatus(204)
};

//BONUS INDEX:implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
function index(req, res) {
        const tag = req.query.tag;
        if (tag) {
                const filteredPost = posts.filter(post => {
                        return post.tags.includes(tag)
                })
                res.json(filteredPost)
        }else{
                res.json(posts)
        }

};

//BONUS SHOW:controllare se il parametro si riferisce ad un post esistente, in caso contrario, 
//rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
function show(req, res) {
        const postId = req.params.id
        const postCercato = posts.find(post => post.id == postId)
        if (!postCercato) {
                res.status(404)
                return res.json({
                        error: "Not Found",
                        message: "Post non trovato"
                })
        }
        res.json(postCercato);
};


// BONUS DESTROY: controllare se il parametro si riferisce ad un post esistente, in caso contrario, 
// rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
function destroy(req, res) {
        const postId = req.params.id
        const postCercato = posts.find(post => post.id == postId)
        const postAggiornati = posts.splice(posts.indexOf(postCercato), 1)
        if (!postAggiornati) {
                res.status(404)
                return res.json({
                        error: "Not Found",
                        message: "Post non trovato"
                })
        }
        console.log(postAggiornati)
        res.sendStatus(204)
};


module.exports = { index, show, destroy }