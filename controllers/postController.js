//INDEX//
function index (req,res){
    res.send('Lista dei post')
};

//SHOW//
function show (req,res){
        res.send('Dettagli del post' + req.params.id);
};

//STORE//
function store (req,res){
        res.send('Creazione nuovo post')
};

//UPDATE//
function update (req,res){
        res.send('Modifica integrale del post' + req.params.id);
};

//MODIFY//
function modify (req,res){
        res.send('Modifica parziale del post' + req.params.id);
};

//DESTROY//
function destroy (req,res){
    res.send('Eliminazione del post' + req.params.id);
}; 

module.exports ={index, show, store, update, modify, destroy}