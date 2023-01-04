var  expresso  =  requer ( 'expresso' ) ;
var  rota  =  expresso . Roteador ( ) ;

rota . get ( '/' ,  função  ( req ,  res ) {
    res . enviar ( 'Olá Mundo' ) ;
} ) ;

módulo . exporta  =  rota ;
