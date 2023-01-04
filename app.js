const  expresso  =  requer ( 'expresso' ) ;
 aplicativo  const =  expresso ( ) ;

var  rota  =  require ( './rota' ) ;
app . use ( '/' ,  rota ) ;

app . ouvir ( 3333 ,  ( )  =>  {
    console . log ( 'Servidor iniciado na porta 3333: http://localhost:3333/' ) ;
} ) ;
