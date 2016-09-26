
 window.onload = function() {setTimeout(function(){document.body.style.opacity="100";},500);};


//Passando canvas para o stage
var stage = new createjs.Stage("myCanvas");
//Variável para medida das posições
var m = 20;
//Boolean que verifica se a semente entrou na mão
var dentro = false;

var animando = false;
var animando2 = false;
//Verifica se pode ir pro final
var final = false;
var txt = new createjs.Text();
createjs.Touch.enable(stage);    
stage.enableMouseOver(10);

//-----------------------------------------------------------------------------------------

//Vetores de bitmap
var pagina = [];
var pagina2 = [];
var pagina3 = [];
var paginafinal = [];

//Variáveis que contam em qual página está

var atual = 0;
var atual2 = 0;
var atual3 = 0;
var atualfinal = 0;

//Variável que armazena em qual capítulo o usuário se encontra
var capitulo = 0;


//Vetor de imagens do primeiro capítulo
var imagens = [
    'Imagens/Capítulo 1/c1p1.jpg',
    'Imagens/Capítulo 1/c1p2.jpg',
    'Imagens/Capítulo 1/c1p3.jpg',
    'Imagens/Capítulo 1/c1p4.jpg',
    'Imagens/Capítulo 1/c1p5.jpg',
    'Imagens/Capítulo 1/c1p6.jpg',
    'Imagens/Capítulo 1/c1p7.jpg',
    'Imagens/Capítulo 1/c1p8.jpg',
    'Imagens/Capítulo 1/c1p9.jpg',
    'Imagens/Capítulo 1/c1p10.jpg',
    'Imagens/Capítulo 1/c1p11.jpg',
    'Imagens/Capítulo 1/c1p12.jpg',
    'Imagens/Capítulo 1/c1p13.jpg',
    'Imagens/Capítulo 1/c1p14.jpg',
    'Imagens/Capítulo 1/c1p15.jpg',
    'Imagens/Capítulo 1/c1p16.jpg'
   
    
];

//Vetor de imagens do segundo capítulo
var imagens2 = [
    'Imagens/Capítulo 2/c2p1.jpg',
    'Imagens/Capítulo 2/c2p2.jpg',
    'Imagens/Capítulo 2/c2p3.jpg',
    'Imagens/Capítulo 2/c2p4.jpg',
    'Imagens/Capítulo 2/c2p5.jpg',
    'Imagens/Capítulo 2/c2p6.jpg',
    'Imagens/Capítulo 2/c2p7.jpg',
    'Imagens/Capítulo 2/c2p8.jpg',
    '                           '
    
];

//Vetor de imagens do terceiro capítulo
var imagens3 = [
    'Imagens/Capítulo 3/c3p1.jpg',
    'Imagens/Capítulo 3/c3p2.jpg',
    'Imagens/Capítulo 3/c3p3.jpg',
    'Imagens/Capítulo 3/c3p4.jpg',
    'Imagens/Capítulo 3/c3p5.jpg',
    'Imagens/Capítulo 3/c3p7.jpg',
    'Imagens/Capítulo 3/redacao.png',
    '                          '
];


//Vetor de imagens do quinto capítulo
var imagensfinal = [
    'Imagens/Capítulo final/c5p1.jpg',
    'Imagens/Capítulo final/c5p2.jpg',
    'Imagens/Capítulo final/c5p3.jpg',
    'Imagens/Capítulo final/c5p4.jpg',
    'Imagens/Capítulo final/c5p5.jpg',
    'Imagens/Capítulo final/c5p6.jpg',
    'Imagens/Capítulo final/menino.jpg',
    'Imagens/Capítulo final/c5p7.jpg',
    'Imagens/Capítulo final/menina.jpg',
    'Imagens/Capítulo final/c5p8.jpg',
    'Imagens/Capítulo final/c5p9.jpg'  
];


//---------------------------------------------------------------------------------------

//COLOCANDO AS IMAGENS NO VETOR DE BITMAPS

//Primeiro capítulo
for (var i = 0; i<imagens.length; i++){
    pagina[i] = new createjs.Bitmap(imagens[i]);
}

//Segundo capítulo
for (var i = 0; i<imagens2.length; i++){
    pagina2[i] = new createjs.Bitmap(imagens2[i]);
}

//Terceiro capítulo
for (var i = 0; i<imagens3.length; i++){
    pagina3[i] = new createjs.Bitmap(imagens3[i]);
}

//Capítulo final
for (var i = 0; i<imagensfinal.length; i++){
    paginafinal[i] = new createjs.Bitmap(imagensfinal[i]);
}


//----------------------------------------------------------------------------

//OBJETO QUE ARMAZENA TODOS OS BOTÕES E COISAS QUE USUÁRIO PODE INTERAGIR
var btn = {
    
     semente: new createjs.Bitmap("Imagens/Botoes/semente.png"),
     ant: new createjs.Bitmap("Imagens/Botoes/PREVIEW.png"),
     prox: new createjs.Bitmap("Imagens/Botoes/NEXT.png"),
     ant2: new createjs.Bitmap("Imagens/Botoes/PREVIEW.png"),
     prox2: new createjs.Bitmap("Imagens/Botoes/NEXT.png"),
     ant3: new createjs.Bitmap("Imagens/Botoes/PREVIEW.png"),
     prox3: new createjs.Bitmap("Imagens/Botoes/NEXT.png"),
     antfinal: new createjs.Bitmap("Imagens/Botoes/PREVIEW.png"),
     proxfinal: new createjs.Bitmap("Imagens/Botoes/NEXT.png"),
     cap2: new createjs.Bitmap("Imagens/Botoes/bt1.png"),
     cap3: new createjs.Bitmap("Imagens/Botoes/bt2.png"),
     play: new createjs.Bitmap("Imagens/Botoes/play.png"),
     capi: new createjs.Bitmap("Imagens/Botoes/btcapitulos.png"),
     doe: new createjs.Bitmap("Imagens/Botoes/doe.png"),
     escolhac1: new createjs.Bitmap("Imagens/Botoes/escolhac1.png"),
     escolhac2: new createjs.Bitmap("Imagens/Botoes/escolhac2.png"), 
     escolhac3: new createjs.Bitmap("Imagens/Botoes/escolhac3.png"),
     escolhac5: new createjs.Bitmap("Imagens/Botoes/escolhac5.png"),
     bloq1: new createjs.Bitmap("Imagens/Botoes/bloq1.png"),
     bloq2: new createjs.Bitmap("Imagens/Botoes/bloq2.png"),
     bloq3: new createjs.Bitmap("Imagens/Botoes/bloq3.png"),
     bloq5: new createjs.Bitmap("Imagens/Botoes/bloq5.png"),
     camc1: new createjs.Bitmap("Imagens/Botoes/cam.png"),
     camc2: new createjs.Bitmap("Imagens/Botoes/cam.png"),
     camc3: new createjs.Bitmap("Imagens/Botoes/cam.png"),
     camc4: new createjs.Bitmap("Imagens/Botoes/cam.png"),
     camc5: new createjs.Bitmap("Imagens/Botoes/cam.png"),
     esconde: new createjs.Bitmap("Imagens/Botoes/esconde.png"),
     esconde2:new createjs.Bitmap("Imagens/Botoes/esconde2.png"),
     home: new createjs.Bitmap("Imagens/Botoes/home.png"),
     seta: new createjs.Bitmap("Imagens/Botoes/seta.png"),
     seta2: new createjs.Bitmap("Imagens/Botoes/seta.png"),
     barra: new createjs.Bitmap("Imagens/Botoes/barra.png"),
     invi1: new createjs.Bitmap("Imagens/Botoes/invi.png"),
     invi2: new createjs.Bitmap("Imagens/Botoes/invi2.png"),
     invi3: new createjs.Bitmap("Imagens/Botoes/invi3.png"),
     invi4: new createjs.Bitmap("Imagens/Botoes/invi4.png"),
     invi5: new createjs.Bitmap("Imagens/Botoes/invi5.png"),
     invi6: new createjs.Bitmap("Imagens/Botoes/invi6.png"),
     invibanana: new createjs.Bitmap("Imagens/Botoes/escolhabanana.png"),
     invimaca: new createjs.Bitmap("Imagens/Botoes/escolhamaca.png"),
     invipera: new createjs.Bitmap("Imagens/Botoes/escolhapera.png"),
     lupa: new createjs.Bitmap("Imagens/Botoes/botaolupa.png")
    
}

//----------------------------------------------------------------------------------------------------------------


//POSICIONANDO TUDO QUE HÁ NA WEB COMIC

//BOTÃO ANTERIOR DO CAPÍTULO 1
btn.ant.x = 3 * m;
btn.ant.y = 78 + 2* m;


//BOTÃO PRÓXIMO DO CAPÍTULO 1
btn.prox.x = 1020 - 3 * m - 66;
btn.prox.y = 78 + 2* m;


//BOTÃO DE ANTERIOR DO CAPÍTULO 2
btn.ant2.x = 3 * m;
btn.ant2.y = 78 + 2 *m;


//BOTÃO DE PRÓXIMO DO CAPÍTULO 2
btn.prox2.x = 1020 - 3 * m - 66;
btn.prox2.y = 78 + 2 *m;


//BOTÃO DE ANTERIOR CAPÍTULO 3
btn.ant3.x = 3 * m;
btn.ant3.y = 78 + 2* m;


//BOTÃO DE PRÓXIMO CAPÍTULO 3
btn.prox3.x = 1020 - 3 * m - 66;
btn.prox3.y = 78 + 2*m;


//BOTÃO DE ANTERIOR CAPÍTULO 5
btn.antfinal.x = 3 * m;
btn.antfinal.y = 78 + 2*m;


//BOTÃO DE PRÓXIMO CAPÍTULO 5
btn.proxfinal.x = 1020 - 3 * m- 66;
btn.proxfinal.y = 78 + 2*m;


//BOTÃO DE ESCOLHA DE CAPÍTULO NO FINAL DO PRIMEIRO

//BOTÃO PARA ESCOLHER O SEGUNDO CAPÍTULO
btn.cap2.x = 160;
btn.cap2.y = 78 + 2 *m;


//BOTÃO PARA ESCOLHER O TERCEIRO CAPÍTULO
btn.cap3.x = 560;
btn.cap3.y = 78 + 2* m;



//BOTÕES DA ESCOLHA DE CAPÍTULO
btn.escolhac1.x = 510 - 150;
btn.escolhac1.y = 78 + 2*m;
btn.bloq1.x = 510 - 150;
btn.bloq1.y = 78 + 2*m;


btn.escolhac2.x =  510 - 300 - 145 + 100 ;
btn.escolhac2.y = 78 + 2 * m + 200 + 100;
btn.bloq2.x = 510 - 300 - 145 + 100;
btn.bloq2.y = 78 + 2 * m + 200 + 100;


btn.escolhac3.x = 1020 - 300 - 60 - 100;
btn.escolhac3.y = 78 + 2 * m + 200 + 100;
btn.bloq3.x = 1020 - 300 - 60 - 100;
btn.bloq3.y = 78 + 2 * m + 200 + 100;


btn.escolhac5.x = 510-150;    
btn.escolhac5.y = 78 + 2 * m + 200 + 100 + 200 + 100;
btn.bloq5.x = 510 - 150;
btn.bloq5.y = 78 + 2 * m + 200 + 100 + 200 + 100;



//BOTÃO PARA COMEÇAR A LER


//BOTÃO PARA ACESSAR OS CAPÍTULOS
btn.capi.x = 1020 - 60 + m - 194 - 183 ;
btn.capi.y = 9;

//BOTÃO PARA DOAR
btn.doe.x = 1020 - 223;
btn.doe.y = 9;

//BOTÃO PARA VOLTAR PARA A TELA INICIAL
btn.home.y = 6;


//POSIÇÃO DAS IMAGENS INICIALMENTE

pagina[atual].x = 3 * m;
pagina[atual].y = 78 + 2* m;

pagina2[atual2].x = 3 * m;
pagina2[atual2].y = 78 + 2* m;

pagina3[atual3].x = 3 * m;
pagina3[atual3].y = 78 + 2* m;

paginafinal[atualfinal].x = 3 * m;
paginafinal[atualfinal].y = 78 +2* m;


//POSIÇÃO DE TAMANHO DA CÂMERA DE FOTOS DO CAPÍTULO 1
btn.camc1.scaleX = 1/2;
btn.camc1.scaleY = 1/2;
btn.camc1.x = 570;
btn.camc1.y = 5 * m + 320;
btn.camc1.regX = 86;
btn.camc1.regY = 86;
    
//POSIÇÃO E TAMANHO DA CÂMERA DE FOTOS DO CAPÍTULO 2
btn.camc2.scaleX = 1/2;
btn.camc2.scaleY = 1/2;
btn.camc2.x = 290;
btn.camc2.y = 3 * m + 220+ 170;
btn.camc2.regX = 86;
btn.camc2.regY = 86;


//POSIÇÃO E TAMANHO DA PRIMEIRA CÂMERA DE FOTOS DO CAPÍTULO 3
btn.camc3.scaleX = 1/2;
btn.camc3.scaleY = 1/2;
btn.camc3.x = 325;
btn.camc3.y = 3 * m + 220+ 170;
btn.camc3.regX = 86;
btn.camc3.regY = 86;

//POSIÇÃO E TAMANHO DA SEGUNDA CÂMERA DE FOTOS DO CAPÍTULO 3
btn.camc4.scaleX = 1/2;
btn.camc4.scaleY = 1/2;
btn.camc4.x = 325;
btn.camc4.y = 3 * m + 220+ 170;
btn.camc4.regX = 86;
btn.camc4.regY = 86;

//POSIÇÃO E TAMANHO DA TERCEIRA CÂMERA DE FOTOS DO CAPÍTULO 3
btn.camc5.scaleX = 1/2;
btn.camc5.scaleY = 1/2;
btn.camc5.x = 325;
btn.camc5.y = 3 * m + 220+ 170;
btn.camc5.regX = 86;
btn.camc5.regY = 86;

//POSIÇÃO E PONTO DE CENTRO DA SEMENTE
btn.semente.x = 515;
btn.semente.y = 500 + 78 + 2*  m; 
btn.semente.regX = 14;
btn.semente.regY = 14;    
    
//POSIÇÃO DA CAIXA DE TEXTO
btn.esconde.x = 1020 - 60 - 45;
btn.esconde.y = 3 * m + 600 + 78 +  m;

//POSIÇÃO CAIXA DE TRADUÇÃO
btn.esconde2.x = 60; 
btn.esconde2.y = 3 * m + 600 + 78 +  m;
// POSIÇÃO DA CAIXA DE TRADUÇÃO
btn.barra.x = 3*m;
btn.barra.y = 600 + 3 * m + 78 + m; 

//POSIÇÃO DA VERIFICAÇÃO PALAVRA "SALÁM" DO SEGUNDO CAPÍTULO
btn.invi1.x = 656;
btn.invi1.y = 659;
//POSIÇÃO DA VERIFICAÇÃO PALAVRA "SALÁM DO TERCEIRO CAPÍTULO
btn.invi2.x = 97;
btn.invi2.y = 431;
//POSIÇÃO DA PALAVRA "CHÚ ISSMIC" DO TERCEIRO CAPÍTULO
btn.invi3.x = 326;
btn.invi3.y = 586;
//POSIÇÃO DA PALAVRA "ISSML" DO TERCEIRO CAPÍTULO
btn.invi4.x = 451;
btn.invi4.y = 606;
//POSIÇÃO DA ESCOLHA DE BANANA NO TERCEIRO CAPÍTULO
btn.invibanana.x = 552;
btn.invibanana.y = 632;
//POSIÇÃO DA ESCOLHA DE MAÇÃ NO TERCEIRO CAPÍTULO
btn.invimaca.x = 717 ;
btn.invimaca.y = 555;
//POSIÇÃO DA ESCOLHA DE PÊRA NO TERCEIRO CAPÚTLO
btn.invipera.x = 865 ;
btn.invipera.y = 631;

//POSIÇÃO INICIAL DO PLAY
btn.play.y =  118;

//POSIÇÃO DA LUPA NO TECEIRO CAPÍTULO
btn.lupa.x = 418;
btn.lupa.y = 415;


//----------------------------------------------------------------------------------------------------------------



//Atualização do stage
    createjs.Ticker.addEventListener("tick", handleTick);
    function handleTick(){
        stage.update();
        gira();
    
    
    
}

//----------------------------------------------------------------------------------------------------------------
// O que aparece no começo do progama

    stage.addChild(btn.play,btn.home); 

//----------------------------------------------------------------------------------------------------------------

//Interações com o botão de doar
    btn.doe.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });

//Evento de click que leva o usuário para a página do cartase
    btn.doe.addEventListener("click",function(){
        window.open("https://www.catarse.me/infanciarefugiada", "_blank" );  
   
    }); 

//---------------------------------------------------------------------------------------------------------------
//Interações com o botão de play

    btn.play.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });

//Botão de play no menu com função para ir para o primeiro capítulo    
    btn.play.addEventListener("click",playf);
    function playf(){
        
      
        stage.canvas.height = 820; 


        stage.removeAllChildren();
        stage.addChild(btn.capi); 
        stage.addChild(btn.doe);
        stage.addChild(pagina[atual]);
        stage.addChild(btn.ant);
        stage.addChild(btn.prox);
        stage.addChild(btn.home);
        stage.addChild(btn.barra);
        capitulo = 1;
        numpag();
        document.getElementById("rodape").style.visibility = "hidden";
        document.getElementById("rodape1").style.visibility = "hidden";
        }


 //---------------------------------------------------------------------------------------------------------------  

 //Botão de capítulo adicionando os capítulos que podem ser escolhidos 

    btn.capi.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });

    btn.capi.addEventListener("click",capif);
    function capif(){ 
      stage.canvas.height = 1020;     
    switch (capitulo){
       
    case 1:
    if(pagina[atual].alpha == 1){
        stage.removeAllChildren();
     stage.addChild(btn.escolhac1,btn.bloq2,btn.bloq3,btn.bloq5,btn.home);
        
    
    }
    break;

    case 2:
    if(pagina2[atual2].alpha == 1){ 
        stage.removeAllChildren();
        stage.addChild(btn.escolhac1,btn.escolhac2,btn.bloq3,btn.bloq5,btn.home);
        dentro = false; 
    }
    break;

    case 3:  
    if(pagina3[atual3].alpha == 1){  
        stage.removeAllChildren();
        stage.addChild(btn.escolhac1,btn.escolhac3,btn.bloq2,btn.bloq5,btn.home);

    }
    break;                                   

 
    case 5:
    if(paginafinal[atualfinal].alpha == 1){   
        stage.removeAllChildren();
        stage.addChild(btn.escolhac1,btn.escolhac2,btn.escolhac3,btn.escolhac5,btn.home);

    }
    break;
    }

    }

//-----------------------------------------------------------------------------------------------------------


//Botões da escolha de capítulos

    btn.escolhac1.addEventListener("click",escolhac1f);
    btn.escolhac1.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });

    btn.escolhac2.addEventListener("click",escolhac2f);
    btn.escolhac2.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });

    btn.escolhac3.addEventListener("click",escolhac3f);
    btn.escolhac3.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });
 
    btn.escolhac5.addEventListener("click",escolhac5f);
    btn.escolhac5.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });
    
//Funções quando é escolhido um dos 5 capítulos

    function escolhac1f(){
    //Verificação para "salvar" a página que estava enquanto ele está na web comic
    if(atual == 0){
    atual = 0;
    }
    if(atual < 10){
    atual = atual;
    }else{
    atual = atual - 1;  
    }    
    stage.removeAllChildren();
    stage.canvas.height = 820; 
    stage.addChild(btn.doe);
    stage.addChild(pagina[atual]);
    stage.addChild(btn.prox);
    stage.addChild(btn.ant);
    stage.addChild(btn.capi);
    stage.addChild(btn.home);
    stage.addChild(btn.barra);  
    capitulo = 1;
    numpag();
    dentro = false; 

    }

    function escolhac2f(){  
    if(atual2 == 0){     
    atual2 = 0;
   
    }
    if(atual2 < 5){
    atual2 = atual2;
    }else{
    atual2 = atual2 - 1;  
    } 
    capitulo = 2;
    stage.removeAllChildren();
    stage.canvas.height = 820; 
    stage.addChild(btn.doe);
    stage.addChild(pagina2[atual2]);
    stage.addChild(btn.prox2);
    stage.addChild(btn.ant2);
    stage.addChild(btn.capi);
    stage.addChild(btn.home);
    stage.addChild(btn.barra);
      
     
        //Adicionando a setinha do segundo capítulo na palavra "Salám"
    if(atual2 == 0 && capitulo == 2){
    stage.addChild(btn.seta2);
        btn.seta2.x = 670;
        btn.seta2.y = 600;
        
   createjs.Tween.get(btn.seta2,{loop:true})
        .to({y:630,}, 500,createjs.Ease.sinInOut)
        .to({y:615,}, 250,createjs.Ease.sinInOut)
        .to({y:600,}, 500,createjs.Ease.sinInOut)
    }
   
     //Adicionando a palavra "Salám" do segundo capítulo   
    if(atual2 == 0 && capitulo == 2){
    stage.addChild(btn.invi1);
    }
   
    numpag();
    dentro = false; 
    }
    
    //AJEITAR
    function escolhac3f(){
    if(atual3 == 0){
    atual3 = 0;
    }
    if(atual3 <= 5){
    atual3 = atual3;
    }else{
    atual3 = 0;
    }
    
    stage.removeAllChildren();
    stage.canvas.height = 820; 
    stage.addChild(btn.doe);
    stage.addChild(pagina3[atual3]);
    stage.addChild(btn.prox3);
    stage.addChild(btn.ant3);
    stage.addChild(btn.capi);
    stage.addChild(btn.home);
    stage.addChild(btn.barra);  
    capitulo = 3;
     //Adicionando a palavra "Salám" do terceiro capítulo  
    if(atual3 == 1 && capitulo == 3){
    stage.addChild(btn.invi2);
    }
    
     //Adicionando as palavras "Chú Issmic" e "Issml" do terceiro capítulo"   
    if(atual3 == 2 && capitulo == 3){
    stage.addChild(btn.invi3,btn.invi4);
    }
        
      //Adicionando as palavras "Chúcran" e "Afuã" do terceiro capítulo"   
    if(atual3 == 4 && capitulo == 3){
    stage.addChild(btn.invi5,btn.invi6);
    }
        
    // Adicionando as escolhas das frutas
    if(atual3 == 4 && capitulo == 3){
    stage.addChild(btn.invibanana,btn.invimaca,btn.invipera);
    }
    //Removendo o botão de próximo para começar as interações
    if(atual3 == 4 && capitulo == 3){
        stage.removeChild(btn.prox3);
    }
        
    numpag();
    dentro = false; 


    }
    
    
    
    function escolhac5f(){
    if(atualfinal == 0){
    atualfinal = 0;
    }
    if(atualfinal < 2){
    atualfinal = atualfinal;
    }else{
    atualfinal = atualfinal - 1;  
    }   
    stage.removeAllChildren();
    stage.canvas.height = 820; 
    stage.addChild(btn.doe);    
    stage.addChild(paginafinal[atualfinal]);
    stage.addChild(btn.proxfinal);
    stage.addChild(btn.antfinal);
    stage.addChild(btn.capi);
    stage.addChild(btn.home);
    stage.addChild(btn.barra);  
    capitulo = 5;
    numpag();
    dentro = false; 

    }



//------------------------------------------------------------------------------------------------------------
//Interações com o botão de voltar para o início do progama

    btn.home.addEventListener("mouseover",function(evt){
            evt.target.cursor = "pointer"; 
    });
    btn.home.addEventListener("click",function(){
  
        stage.canvas.height = 585; 
   
       switch (capitulo){
                case 0:
     
        stage.removeAllChildren();
        document.getElementById("rodape").style.visibility = "visible"; 
        document.getElementById("rodape1").style.visibility = "visible";
        stage.addChild(btn.home,btn.play);
       
               
                break;
                case 1:
               
        if(pagina[atual].alpha == 1){
            stage.removeAllChildren();        
            stage.addChild(btn.play);
            if(atual == 0){
            atual = 0;
            }
            if(atual < 10){
            atual = atual;
            }else{
            atual = atual - 1;  
            }    
            document.getElementById("rodape").style.visibility = "visible"; 
            document.getElementById("rodape1").style.visibility = "visible";
            stage.addChild(btn.home,btn.play);
        
    
         
        }
                break;
               
                case 2:
        if(pagina2[atual2].alpha == 1){
            stage.removeAllChildren();       
            stage.addChild(btn.play); 
            if(atual2 == 0){
            atual2 = 0;
            }
            if(atual2 < 5){
            atual2 = atual2;
            }else{
            atual2 = atual2 - 1;  
            }  
            document.getElementById("rodape").style.visibility = "visible"; 
            document.getElementById("rodape1").style.visibility = "visible";
            stage.addChild(btn.home,btn.play);
         
         
        }
                 break;
               
                 case 3:
        if(pagina3[atual3].alpha == 1){
            stage.removeAllChildren();
            stage.addChild(btn.play);        
            if(atual3 == 0){
            atual3 = 0;
            }
            if(atual3 < 4){
            atual3 = atual3;
            }else{
            atual3 = atual3 - 1;  
            }   
            document.getElementById("rodape").style.visibility = "visible"; 
            document.getElementById("rodape1").style.visibility = "visible";
            stage.addChild(btn.home,btn.play);
           
    
        }
                 break;
               
                
                case 5:
               
        if(paginafinal[atualfinal].alpha == 1){
            stage.removeAllChildren();
            stage.addChild(btn.play); 
            if(atualfinal == 0){
            atualfinal = 0;
            }else{
            atualfinal = atualfinal;
            }
            document.getElementById("rodape").style.visibility = "visible"; 
            document.getElementById("rodape1").style.visibility = "visible";
            stage.addChild(btn.home,btn.play);
         
            
                break;
                    
        }
   
 
        }

    });
       

 
//------------------------------------------------------------------------------------------------------------
//Objeto que armazena os textos e imagens dos créditos

var texto = {

    t1: new createjs.Text("Equipe", "30px Proza", "#e8e8e8"),
    t2: new createjs.Text("Bosco Junior - Narrativa", "22px 'Rubik', sans-serif", "#e8e8e8"),
    t3: new createjs.Text("Igor Rodrigues - Programação", "22px 'Rubik', sans-serif", "#e8e8e8"),
    t4: new createjs.Text("João Filipe - Comunicação Visual", "22px 'Rubik', sans-serif", "#e8e8e8"),
    t5: new createjs.Text("José Ventura - Desenhos", "22px 'Rubik', sans-serif", "#e8e8e8"),
    

    t6: new createjs.Text("Consultoria", "30px Proza", "#e8e8e8"),
    t7: new createjs.Text("Karine Garcês", "22px 'Rubik', sans-serif", "#e8e8e8"),
    

    t8: new createjs.Text("Orientação", "30px Proza", "#e8e8e8"),
    t9: new createjs.Text("Profa. Raquel Santiago", "22px 'Rubik', sans-serif", "#e8e8e8"),
    t10: new createjs.Text("Prof. José Aires", "22px 'Rubik', sans-serif", "#e8e8e8"),
    t11: new createjs.Text("Prof. Carlos Eduardo", "22px 'Rubik', sans-serif", "#e8e8e8"),
    t12: new createjs.Text("Prof. Ismael Bezerra", "22px 'Rubik', sans-serif", "#e8e8e8"),
    t13: new createjs.Text("Prof. Glaudiney Moreira", "22px 'Rubik', sans-serif", "#e8e8e8"),
    t14: new createjs.Text("Prof. Ricardo Brauner", "22px 'Rubik', sans-serif", "#e8e8e8"),
    t15: new createjs.Text("Bianca Melo", "22px 'Rubik', sans-serif", "#e8e8e8"),
    t16: new createjs.Text("Nery Filho Lima", "22px 'Rubik', sans-serif", "#e8e8e8"),
    
    t17: new createjs.Text("Licença", "30px Proza", "#e8e8e8"),
    
    
    cc: new createjs.Bitmap("Imagens/Botoes/cc.png"),
    logos: new createjs.Bitmap("Imagens/Botoes/Creditos.png"),
    
    voltar: new createjs.Bitmap("Imagens/Botoes/home.png")
}


texto.t17.addEventListener("click",function(){
window.open("http://creativecommons.org/licenses/by-nc-sa/4.0/", "_blank" );  
    
    
    
});

texto.t17.addEventListener("mouseover", function(evt){
    evt.target.cursor = "pointer"; 
       
    
});


texto.cc.addEventListener("click",function(){
window.open("http://creativecommons.org/licenses/by-nc-sa/4.0/", "_blank" );  
    
    
    
});

texto.cc.addEventListener("mouseover", function(evt){
    evt.target.cursor = "pointer"; 
       
    
});


texto.voltar.addEventListener("mouseover",function(evt){
evt.target.cursor = "pointer"; 
       
       
});


texto.voltar.addEventListener("click",function(){
stage.removeAllChildren();
 document.getElementById("rodape").style.visibility = "visible";
 stage.addChild(btn.play,btn.home);
     
        
        stage.canvas.height = 585;  
});

//Posição dos textos na parte de créditos
texto.t1.x = 60;
texto.t1.y = 120;

texto.t2.x = 60;
texto.t2.y = 180;

texto.t3.x = 60;
texto.t3.y = 220;

texto.t4.x = 60;
texto.t4.y = 260;

texto.t5.x = 60;
texto.t5.y = 300;


texto.t6.x = 1020 - 60 - 150;
texto.t6.y = 120;

texto.t7.x = 1020 - 60 - 150;
texto.t7.y = 180;


texto.t8.x = 510 - 20;
texto.t8.y = 120;

texto.t9.x = 510 - 20;
texto.t9.y = 180;

texto.t10.x = 510 - 20;
texto.t10.y = 220;

texto.t11.x = 510 - 20;
texto.t11.y = 260;

texto.t12.x = 510 - 20;
texto.t12.y = 300;

texto.t13.x = 510 - 20;
texto.t13.y = 340;

texto.t14.x = 510 - 20;
texto.t14.y = 380;

texto.t15.x = 510 - 20;
texto.t15.y = 420;

texto.t16.x = 510 - 20;
texto.t16.y = 460;

texto.t17.x = 1020 - 60 - 150;
texto.t17.y = 250;

texto.cc.x = 1020 - 60 - 150;
texto.cc.y = 300;

texto.logos.x = 110;
texto.logos.y = 740 - 150;

texto.voltar.y = 6;


//Função que leva o usuário a página de créditos


    function creditos(){
        stage.removeAllChildren();
        document.getElementById("rodape").style.visibility = "hidden";

  
        stage.canvas.height = 740; 
        
        stage.addChild(texto.t1,texto.t2,texto.t3,texto.t4,texto.t5);
        stage.addChild(texto.t6,texto.t7);
        stage.addChild(texto.t8,texto.t9,texto.t10,texto.t11,texto.t12,texto.t13,texto.t14,texto.t15,texto.t16);
        stage.addChild(texto.logos,texto.t17,texto.cc);
        stage.addChild(texto.voltar);
    
  
}





//---------------------------------------------------------------------------------------------------------

//Evento e função para mudança de bitmap com o click no botão anterior
    btn.ant.addEventListener("click", anterior);


//Função que mostra o botão de próximo quando o mouse ta em cima dele
    btn.ant.addEventListener("mouseover", function(evt){
            evt.target.cursor = "pointer"; 
            stage.addChild(btn.ant);
    
});

//Função para remover o botão da tirinha caso o usuário tire o mouse de cima
btn.ant.addEventListener("mouseout", function(){
    
    if(atual == 10 && capitulo == 1){
    stage.addChild(pagina[atual],btn.camc1);
    
    }else{
        stage.removeChild(btn.camc1);
        stage.addChild(pagina[atual]);
        
    }
  
    
});

function anterior(){

    /*Faz um fade in por vez para que o usuário não fique clicando direto e a imagem mudando direto e apenas se ele não tiver chegado na primeira imagem*/
    if (pagina[atual].alpha == 1 && atual>0){
        
        atual--;
        if  (atual < 0)  
            atual = 0;
	
		
        //Torna o alpha da página 0 para fazer o fade in
        pagina[atual].alpha = 0
        stage.addChild(pagina[atual]);
        pagina[atual].x = 3 * m;
        pagina[atual].y = 78 + 2 * m;
        
        
        //Fade in. Quando O alpha chega a 1 ele remove a imagem anterior do canvas
        createjs.Tween.get(pagina[atual]).to({alpha: 1},1000).call(function (){
            stage.removeChild(pagina[atual+1]);
        });
        verifica();
        numpag();
    }
 
};

//---------------------------------------------------------------------------------------------------------------------

        //Evento e função para mudança de bitmap com o click no botão próximo
        btn.prox.addEventListener("click", proximo);

        btn.prox.addEventListener("mouseover", function(evt){
        evt.target.cursor = "pointer"; 
        stage.addChild(btn.prox);

        });


        btn.prox.addEventListener("mouseout", function(){

        if(atual == 15 && capitulo == 1){
        stage.addChild(pagina[atual],btn.cap2,btn.cap3);

        }else if(atual == 10 && capitulo == 1){
        stage.addChild(pagina[atual],btn.camc1);

        }else{
        stage.addChild(pagina[atual]);
        stage.removeChild(btn.camc1);
        }


        });


        function proximo(){

        /*Faz um fade in por vez para que o usuário não fique clicando direto e a imagem mudando direto e apenas se ele nao tiver chegado na ultima imagem*/
        if (pagina[atual].alpha == 1 && atual<pagina.length-1){

        atual++;

        if (atual >= imagens.length) 
        atual = imagens.length - 1;


        pagina[atual].alpha = 0
        stage.addChild(pagina[atual]);

        pagina[atual].x = 3 * m;
        pagina[atual].y = 78 + 2 * m;


        //Fade in. Quando O alpha chega a 1 ele remove a imagem anterior do canvas
        createjs.Tween.get(pagina[atual]).to({alpha: 1},1000).call(function (){
        stage.removeChild(pagina[atual-1]);

        });
        verifica();
        numpag();
        }



        }; 


        //--------------------------------------------------------------------------------------------------------------------

        btn.ant2.addEventListener("click", anterior2);



        btn.ant2.addEventListener("mouseover", function(evt){
        evt.target.cursor = "pointer"; 
        stage.addChild(btn.ant2);

        });


        btn.ant2.addEventListener("mouseout", function(){
           dentro = false;
        if(atual2 == 3 && capitulo == 2){
        stage.addChild(pagina2[atual2],btn.semente);
        }else{
        stage.addChild(pagina2[atual2]);
        }
        if(dentro == true){
        stage.addChild(pagina2[atual2]);
        }

        if(atual2 == 5 && capitulo == 2){
        stage.addChild(pagina2[atual2],btn.camc2);

        }else{
        stage.removeChild(btn.camc2);

        }
            
            
          if(atual2 == 0 && capitulo == 2 && animando2 == false){
            stage.addChild((pagina2[atual2]),btn.seta2);
                
            }else{
                
            stage.addChild(pagina2[atual2]);
                
            }

        });


        function anterior2(){
        dentro = false; 

        if (pagina2[atual2].alpha == 1 && atual2>0){

        atual2--;
        if  (atual2 < 0)  
        atual2 = 0;



        pagina2[atual2].alpha = 0
        stage.addChild(pagina2[atual2]);
        pagina2[atual2].x = 3 * m;
        pagina2[atual2].y = 78 + 2*m;
        drag();

        createjs.Tween.get(pagina2[atual2]).to({alpha: 1},1000).call(function (){
        stage.removeChild(pagina2[atual2+1]);
        });

        }
        numpag();
        verifica();
        
        };

        //--------------------------------------------------------------------------------------------------------------

        btn.prox2.addEventListener("click", proximo2);

        btn.prox2.addEventListener("mouseover", function(evt){
            stage.addChild(btn.prox2);
        evt.target.cursor = "pointer"; 
        });


        btn.prox2.addEventListener("mouseout", help);
            
            function help(){
         dentro = false; 
        if(atual2 == 3 && capitulo == 2){
            stage.addChild(pagina2[atual2],btn.semente);
        }else{
            stage.addChild(pagina2[atual2]);   
        }
        if(dentro == true){
            stage.addChild(pagina2[atual2]);
        }

        if(atual2 == 5 && capitulo == 2){
            stage.addChild(pagina2[atual2],btn.camc2);

        }else{
            stage.removeChild(btn.camc2);

        }
            
            
            if(atual2 == 0 && capitulo == 2 && animando2 == false){
            stage.addChild((pagina2[atual2]),btn.seta2);
                
            }else{
                
            stage.addChild(pagina2[atual2]);
                
            }
    }
   
    
            
            
            
            


      


        function proximo2(){
            dentro = false; 

        if (pagina2[atual2].alpha == 1 && atual2<pagina2.length-1 ){

            atual2++;



            pagina2[atual2].alpha = 0
            stage.addChild(pagina2[atual2]);

            pagina2[atual2].x = 3 * m;
            pagina2[atual2].y = 78 + 2*m;
            drag();

        createjs.Tween.get(pagina2[atual2]).to({alpha: 1},1000).call(function (){
        stage.removeChild(pagina2[atual2-1]);
        });

        }   

            numpag();
            verifica();
            
        };


        //-------------------------------------------------------------------------------------------------------------

        btn.ant3.addEventListener("click", anterior3);


        btn.ant3.addEventListener("mouseover", function(evt){
            evt.target.cursor = "pointer"; 
            stage.addChild(btn.ant3);

        });


        btn.ant3.addEventListener("mouseout", function(){

               if(atual3 == 1 && capitulo == 3 && animando == false){
            stage.addChild((pagina3[atual3]),btn.seta);
                
            }else{
                
            stage.addChild(pagina3[atual3]);
                
            }
            
            
            
            
        if(atual3 == 5 && capitulo == 3){
        stage.addChild(pagina3[atual3],btn.lupa);
        
        }
        
    
            
            
            

        });


        function anterior3(){


        if (pagina3[atual3].alpha == 1 && atual3>0){

            atual3--;
        if  (atual3 < 0)  
            atual3 = 0;



            pagina3[atual3].alpha = 0
            stage.addChild(pagina3[atual3]);
            pagina3[atual3].x = 3 * m;
            pagina3[atual3].y = 78 + 2*m;

        createjs.Tween.get(pagina3[atual3]).to({alpha: 1},1000).call(function (){
        stage.removeChild(pagina3[atual3+1]);
        });

        }
            numpag();
            verifica();
        };

        //--------------------------------------------------------------------------------------------------------------

        btn.prox3.addEventListener("click", proximo3);

        btn.prox3.addEventListener("mouseover", function(evt){
            evt.target.cursor = "pointer"; 
            stage.addChild(btn.prox3);

        });

        btn.prox3.addEventListener("mouseout", function(){

   
            if(atual3 == 1 && capitulo == 3 && animando == false){
            stage.addChild((pagina3[atual3]),btn.seta);
                
            }else{
                
            stage.addChild(pagina3[atual3]);
                
            }
            
            
             if(atual3 == 5 && capitulo == 3){
        stage.addChild(pagina3[atual3],btn.lupa);
        
    }
            
            
        });


       

        function proximo3(){


        if (pagina3[atual3].alpha == 1 && atual3<pagina3.length-1){

            atual3++;





            pagina3[atual3].alpha = 0
            stage.addChild(pagina3[atual3]);
            pagina3[atual3].x = 3 * m;
            pagina3[atual3].y = 78 + 2*m;

        createjs.Tween.get(pagina3[atual3]).to({alpha: 1},1000).call(function (){
        stage.removeChild(pagina3[atual3-1]);
        });

        }
            numpag();
            verifica();
        };





        //--------------------------------------------------------------------------------------------------------

        btn.antfinal.addEventListener("click", anteriorfinal);


        btn.antfinal.addEventListener("mouseover", function(evt){
            evt.target.cursor = "pointer"; 
            stage.addChild(btn.antfinal);

        });


        btn.antfinal.addEventListener("mouseout", function(){

            stage.addChild(paginafinal[atualfinal]);    
                
         
        });



        function anteriorfinal(){


        if (paginafinal[atualfinal].alpha == 1 && atualfinal>0){

            atualfinal--;
        if  (atualfinal < 0)  
            atualfinal = 0;



            paginafinal[atualfinal].alpha = 0
            stage.addChild(paginafinal[atualfinal]);
            paginafinal[atualfinal].x = 3 * m;
            paginafinal[atualfinal].y = 78 + 2* m;

        createjs.Tween.get(paginafinal[atualfinal]).to({alpha: 1},1000).call(function (){
        stage.removeChild(paginafinal[atualfinal+1]);
        });

        }
            numpag();
            verifica();
        };


        //-------------------------------------------------------------------------------------------------------------------------

        btn.proxfinal.addEventListener("click", proximofinal);



        btn.proxfinal.addEventListener("mouseover", function(evt){
            evt.target.cursor = "pointer"; 
            stage.addChild(btn.proxfinal);

        });



        btn.proxfinal.addEventListener("mouseout", function(){
      
            stage.addChild(paginafinal[atualfinal]);    
                
            
        });


        function proximofinal(){


        if (paginafinal[atualfinal].alpha == 1 && atualfinal<paginafinal.length-1){

            atualfinal++;

        if (atualfinal >= imagensfinal.length) 
            atualfinal = imagensfinal.length - 1;


            paginafinal[atualfinal].alpha = 0
            stage.addChild(paginafinal[atualfinal]);

            paginafinal[atualfinal].x = 3 * m;
            paginafinal[atualfinal].y = 78 + 2* m;

        createjs.Tween.get(paginafinal[atualfinal]).to({alpha: 1},1000).call(function (){
        stage.removeChild(paginafinal[atualfinal-1]);
        });

        }
            numpag();
            verifica();
        };  




//----------------------------------------------------------------------------------------------------------------

//Funções das câmera

//Função botões de câmera do capítulo 1
btn.camc1.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });

btn.camc1.addEventListener("click",function(){
       stage.removeChild(btn.ant,btn.prox,btn.home,btn.capi);
        proximo();
        setTimeout(function(){ proximo(); }, 2000);
        setTimeout(function(){ proximo(); }, 4000);
        setTimeout(function(){ proximo(); }, 6000);
        setTimeout(function(){ proximo(); }, 10000);
    });


//Funções do botão de câmera do capítulo 2
btn.camc2.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });

btn.camc2.addEventListener("click",function(){
      stage.removeChild(btn.ant2,btn.prox2,btn.home,btn.capi);
      btn.prox2.addEventListener("mouseout", help);
        proximo2();
        setTimeout(function(){ proximo2(); }, 2000);
        setTimeout(function(){ proximo2(); }, 9000);
    });




//Câmera da banana
btn.camc3.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });

btn.camc3.addEventListener("click",function(){
      stage.removeChild(btn.camc3);
            fruta.bananacf.alpha = 0
            stage.addChild(fruta.bananacf);

      createjs.Tween.get(fruta.bananacf).to({alpha: 1},1000).call(function (){
        stage.removeChild(fruta.bananasf);
        });
    
     
    stage.removeChild(btn.capi,btn.home);
    
    setTimeout(function(){ proximo3(); stage.addChild(btn.ant3,btn.capi,btn.home); }, 15000);
    
});
                           

//Câmera da maçã
btn.camc4.addEventListener("click",function(){
      stage.removeChild(btn.camc4);
            fruta.macacf.alpha = 0
            stage.addChild(fruta.macacf);

      createjs.Tween.get(fruta.macacf).to({alpha: 1},1000).call(function (){
        stage.removeChild(fruta.macasf);
        });
    
     stage.removeChild(btn.capi,btn.home);
    setTimeout(function(){ proximo3(); stage.addChild(btn.capi,btn.home,btn.ant3); }, 15000);
    
});
      



btn.camc4.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer";   
    
});




//Câmera da pêra
btn.camc5.addEventListener("click",function(){
      stage.removeChild(btn.camc5);
            fruta.peracf.alpha = 0
            stage.addChild(fruta.peracf);

      createjs.Tween.get(fruta.peracf).to({alpha: 1},1000).call(function (){
        stage.removeChild(fruta.perasf);
        });
    
     stage.removeChild(btn.capi,btn.home);
    setTimeout(function(){ proximo3(); stage.addChild(btn.capi,btn.home,btn.ant3); }, 15000);
    
});
      



btn.camc5.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer";   
    
});







//---------------------------------------------------------------------------------------------------------------


//Adicionando as 2 linhas de escolha
function verifica(){
  if(atual==15 && capitulo == 1){
        stage.removeChild(btn.home);    
        stage.removeChild(btn.capi);
       
      
        btn.cap2.alpha = 0
        stage.addChild(btn.cap2);

        createjs.Tween.get(btn.cap2).to({alpha: 1},5000).call(function (){
        
        });
        
      
        btn.cap3.alpha = 0
        stage.addChild(btn.cap3);

        createjs.Tween.get(btn.cap3).to({alpha: 1},5000).call(function (){
       
        });
        

    }
    //Verificação para adicionar a câmera do primeiro capítulo
    if(atual == 10 && capitulo == 1){
        stage.addChild(btn.camc1);
     
  
    }else{
        stage.removeChild(btn.camc1);
    
    }
    
    //Verificação para adicionar a câmera do segundo capítulo
    if(atual2 == 5 && capitulo == 2){
        btn.semente.x = 515;
        btn.semente.y = 500 + 78 + 2*  m; 
        stage.addChild(btn.camc2);
        
     }else{
        stage.removeChild(btn.camc2);   
    
     }  
 
 
 
    //Funções para passar do segundo para o terceiro capítulo
    
    if (atual2 == 8 && capitulo == 2 && final == false){
       
        stage.removeAllChildren();
       
       pagina3[atual3].alpha = 0
        stage.addChild(pagina3[atual3]);

      createjs.Tween.get(pagina3[atual3]).to({alpha: 1},1000).call(function (){
       
        });
       
        stage.addChild(btn.ant3);
        stage.addChild(btn.prox3);
        stage.addChild(btn.doe);
        stage.addChild(btn.capi);
        stage.addChild(btn.home);
        stage.addChild(btn.barra);
        capitulo = 3;
        numpag();
        final = true;
  
   } 
    
    
    
    
     //Função para passar do terceiro para o segundo capítulo
    
   if (atual3 == 7  && capitulo == 3 && final == false){
       
        stage.removeAllChildren();
        pagina2[atual2].alpha = 0
        stage.addChild(pagina2[atual2]);

      createjs.Tween.get(pagina2[atual2]).to({alpha: 1},1000).call(function (){
    
        });
        
        stage.addChild(btn.ant2);
        stage.addChild(btn.prox2);
        stage.addChild(btn.doe);
        stage.addChild(btn.capi);
        stage.addChild(btn.home);
        stage.addChild(btn.barra);
        capitulo = 2;
        numpag();
   } 
    
    
    
    
//Funções para passar do capítulo 2, 3  capítulo final

//Segundo para o quinto
   if (atual2 == 8 && capitulo == 2 && final == true){
       
        stage.removeAllChildren();
       
       paginafinal[atualfinal].alpha = 0
        stage.addChild(paginafinal[atualfinal]);

      createjs.Tween.get(paginafinal[atualfinal]).to({alpha: 1},1000).call(function (){
        stage.removeChild(pagina2[atual2]);
        });
       
        stage.addChild(btn.antfinal);
        stage.addChild(btn.proxfinal);
        stage.addChild(btn.doe);
        stage.addChild(btn.capi);
        stage.addChild(btn.home);
        stage.addChild(btn.barra);
        capitulo = 5;
        numpag();
       final = false;
  
   } 
    
//Terceiro para o quinto
   if (atual3 == 7  && capitulo == 3 && final == true){
        stage.removeAllChildren();
        paginafinal[atualfinal].alpha = 0
        stage.addChild(paginafinal[atualfinal]);

      createjs.Tween.get(paginafinal[atualfinal]).to({alpha: 1},1000).call(function (){
        stage.removeChild(pagina3[atual3]);
        });
        
        stage.addChild(btn.antfinal);
        stage.addChild(btn.proxfinal);
        stage.addChild(btn.doe);
        stage.addChild(btn.capi);
        stage.addChild(btn.home);
        stage.addChild(btn.barra);
        capitulo = 5;
        numpag();
       final = false;
   } 
   


    
 //Palavra "Salám" do segundo capítulo  
   if(atual2 == 0 && capitulo == 2){
btn.invi1.x = 656;
btn.invi1.y = 659;
stage.addChild(btn.invi1);
    
   }else{
stage.removeChild(btn.invi1);
   }
    
    
    
    
  
 //Palavra "Salám" do terceiro capítulo   
  if(atual3 == 1 && capitulo == 3){
btn.invi2.x = 97;
btn.invi2.y = 431;
stage.addChild(btn.invi2);
    
   }else{
stage.removeChild(btn.invi2);
   }  
    
    
    
    
    //Setinha no terceiro capítulo na palavra "Salám"
  if(atual3 == 1 && capitulo == 3){
        btn.seta.x = 115;
        btn.seta.y = 375;
        
        stage.addChild(btn.seta);
        createjs.Tween.get(btn.seta,{loop:true})
        .to({y:410,}, 500,createjs.Ease.sinInOut)
        .to({y:395,}, 250,createjs.Ease.sinInOut)
        .to({y:372,}, 500,createjs.Ease.sinInOut)
        
    }else{
    stage.removeChild(btn.seta);

    }
  
    
    //Palavra "Chú Issmic" do terceiro capítulo   
  if(atual3 == 2 && capitulo == 3){
btn.invi3.x = 326;
btn.invi3.y = 586;
stage.addChild(btn.invi3);
    
   }else{
stage.removeChild(btn.invi3);
   }   
    
      //Palavra "Issml" do terceiro capítulo   
  if(atual3 == 2 && capitulo == 3){
btn.invi4.x = 451;
btn.invi4.y = 606;
stage.addChild(btn.invi4);
    
   }else{
stage.removeChild(btn.invi4);
   }    
 
    
    
  //Palavra "Chúcran" do terceiro capítulo
     if(atual3 == 4 && capitulo == 3){
btn.invi5.x = 158;
btn.invi5.y = 158;
stage.addChild(btn.invi5);
    
   }else{
stage.removeChild(btn.invi5);
   }   
    
    
 //Palavra "Afuã" do terceiro capítulo
    if(atual3 == 4 && capitulo == 3){
btn.invi6.x = 105;
btn.invi6.y = 311;
stage.addChild(btn.invi6);
    
   }else{
stage.removeChild(btn.invi6);
   } 
    
    
   
  //Adicionando as escolhas das frutas  
 if(atual3 == 4 && capitulo == 3){
  stage.addChild(btn.invibanana,btn.invimaca,btn.invipera);   
   stage.removeChild(btn.prox3);  
     
     
 }else{
     stage.removeChild(btn.invibanana,btn.invimaca,btn.invipera);   
 }
    
    


//Setinha na palavra do segundo capítulo "Salám"
    if(atual2 == 0 && capitulo == 2){
 
        stage.addChild(btn.seta2);
        btn.seta2.x = 670;
        btn.seta2.y = 600;
        
   createjs.Tween.get(btn.seta2,{loop:true})
        .to({y:630,}, 500,createjs.Ease.sinInOut)
        .to({y:615,}, 250,createjs.Ease.sinInOut)
        .to({y:600,}, 500,createjs.Ease.sinInOut)
        
    }else{
    stage.removeChild(btn.seta2);

    }
    
    //Removendo o evento de mouse over para que a semente não desapareça
    if(atual2 == 3 && capitulo == 2){
         stage.removeChild(btn.ant2,btn.prox2,btn.home,btn.capi); 
         btn.prox2.removeEventListener("mouseout", help);
    }
    
    //Verificação para adicionar a lupa do terceiro capítulo
    if(atual3 == 5 && capitulo == 3){
        stage.addChild(btn.lupa);
         btn.lupa.addEventListener("click",mostraTexto);   
         
    }else{
        
        stage.removeChild(btn.lupa);
    }
    
    
    //Tirando o botão de próximo na último quadrinho da história
    if(atualfinal == 10 && capitulo == 5){
        
        stage.removeChild(btn.proxfinal);
    }
    
    if(atualfinal == 9 && capitulo ==5){
        stage.addChild(btn.proxfinal);
        
    }
}
 
//------------------------------------------------------------------------------------------------------------


//Verificação das palavras

//Palavras do segundo capítulo
//Palavra do segundo capítulo "Salám"
btn.invi1.addEventListener("mouseover",function(evt){
evt.target.cursor = "pointer"; 
var tradutor = new createjs.Text("Salám: paz. Saudação", "24px 'Rubik', sans-serif", "#e8e8e8"); 
animando2 = true;
createjs.Tween.removeTweens(btn.seta2);
stage.removeChild(btn.seta2);   
tradutor.y = 600 + 5 * m + 70 ;
tradutor.x = 60;
stage.addChild(tradutor);
       
});

btn.invi1.addEventListener("mouseout",function(){
stage.addChild(btn.esconde2,btn.barra);
       
});




//Palavras do terceiro capítulo 

//Palavra do terceiro capítulo "Sálam"

btn.invi2.addEventListener("mouseover",function(evt){
evt.target.cursor = "pointer"; 
var tradutor = new createjs.Text("Salám: paz. Saudação", "24px 'Rubik', sans-serif", "#e8e8e8");
createjs.Tween.removeTweens(btn.seta);
stage.removeChild(btn.seta);
 animando = true;

tradutor.y = 600 + 5 * m + 70 ;
tradutor.x = 60;
stage.addChild(tradutor);
       
});

btn.invi2.addEventListener("mouseout",function(){
stage.addChild(btn.esconde2,btn.barra);
       
});



//Palavra do terceiro capítulo "Chú Issmic"

btn.invi3.addEventListener("mouseover",function(evt){
evt.target.cursor = "pointer"; 
var tradutor = new createjs.Text("Qual é o seu nome?(ao falar com uma mulher)", "24px 'Rubik', sans-serif", "#e8e8e8");


    
tradutor.y = 600 + 5 * m + 70 ;
tradutor.x = 60;
stage.addChild(tradutor);
       
});

btn.invi3.addEventListener("mouseout",function(){
stage.addChild(btn.esconde2,btn.barra);
       
});



//Palavra do terceiro capítulo "Issml"

btn.invi4.addEventListener("mouseover",function(evt){
evt.target.cursor = "pointer"; 
var tradutor = new createjs.Text("Meu nome é", "24px 'Rubik', sans-serif", "#e8e8e8");


    
tradutor.y = 600 + 5 * m + 70 ;
tradutor.x = 60;
stage.addChild(tradutor);
       
});

btn.invi4.addEventListener("mouseout",function(){
stage.addChild(btn.esconde2,btn.barra);
       
});



//Palavra do terceiro capítulo "Chúcran"

btn.invi5.addEventListener("mouseover",function(evt){
evt.target.cursor = "pointer"; 
var tradutor = new createjs.Text("Obrigado", "24px 'Rubik', sans-serif", "#e8e8e8");


    
tradutor.y = 600 + 5 * m + 70 ;
tradutor.x = 60;
stage.addChild(tradutor);
       
});

btn.invi5.addEventListener("mouseout",function(){
stage.addChild(btn.esconde2,btn.barra);
       
});



//Palavra do terceiro capítulo "Afuã"

btn.invi6.addEventListener("mouseover",function(evt){
evt.target.cursor = "pointer"; 
var tradutor = new createjs.Text("De nada", "24px 'Rubik', sans-serif", "#e8e8e8");


    
tradutor.y = 600 + 5 * m + 70 ;
tradutor.x = 60;
stage.addChild(tradutor);
       
});

btn.invi6.addEventListener("mouseout",function(){
stage.addChild(btn.esconde2,btn.barra);
       
});



//-----------------------------------------------------------------------------------------------------------


//Tela qual o capítulo o usuário vai seguir após finalizar o capítulo de introdução

btn.cap2.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });

//Funções de escolha de cada botão para o capítulo 2, 3 
btn.cap2.addEventListener("click",cap2);
function cap2(){
  
   
    stage.removeAllChildren();
    
     capitulo = 2;
      atual2 = 0;
    stage.addChild(pagina2[atual2]);
    stage.addChild(btn.prox2);
    stage.addChild(btn.ant2);
    stage.addChild(btn.capi);
    stage.addChild(btn.doe);
    stage.addChild(btn.home);
    stage.addChild(btn.barra);
    stage.addChild(btn.invi1);
   
    stage.addChild(btn.seta2);
        btn.seta2.x = 670;
        btn.seta2.y = 600;
        
   createjs.Tween.get(btn.seta2,{loop:true})
        .to({y:630,}, 500,createjs.Ease.sinInOut)
        .to({y:615,}, 250,createjs.Ease.sinInOut)
        .to({y:600,}, 500,createjs.Ease.sinInOut)
  
    numpag();
  
}
 btn.cap3.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer"; 
    });   
       

btn.cap3.addEventListener("click",cap3);
function cap3(){
    stage.removeAllChildren();
    stage.addChild(pagina3[atual3]);
    stage.addChild(btn.prox3);
    stage.addChild(btn.ant3);
    stage.addChild(btn.capi);
    stage.addChild(btn.doe);
    stage.addChild(btn.home);
    stage.addChild(btn.barra);
    capitulo = 3;
    atual3 = 0;
    numpag();
}


//----------------------------------------------------------------------------------------------------------------

var fruta ={
  bananasf: new createjs.Bitmap("Imagens/Capítulo 3/bananasemflash.jpg"),  
  bananacf: new createjs.Bitmap("Imagens/Capítulo 3/bananacomflash.jpg"),   
      
  perasf: new createjs.Bitmap("Imagens/Capítulo 3/perasemflash.jpg"),  
  peracf: new createjs.Bitmap("Imagens/Capítulo 3/peracomflash.jpg"),   
      
  macasf: new createjs.Bitmap("Imagens/Capítulo 3/macasemflash.jpg"),
  macacf: new createjs.Bitmap("Imagens/Capítulo 3/macacomflash.jpg")
    
}

//Posicionando
fruta.bananasf.x = 60;
fruta.bananasf.y = 78 + 2*m;

fruta.bananacf.x = 60;
fruta.bananacf.y = 78 + 2*m;

fruta.peracf.x = 60;
fruta.peracf.y = 78 + 2*m;

fruta.perasf.x = 60;
fruta.perasf.y = 78 + 2*m;

fruta.macasf.x = 60;
fruta.macasf.y = 78 + 2*m;

fruta.macacf.x = 60;
fruta.macacf.y = 78 + 2 *m;


//Interação do terceiro capítulo que o usuário pode escolher entre a maçã, a pêra e banana

//Funções banana
btn.invibanana.addEventListener("click", function(){
    txt = new createjs.Text( 5 + "/" + 7 , "24px 'Rubik', sans-serif", "#e8e8e8");
    txt.x = 1020 - 60 - 45; 
    txt.y = 600 + 3 * m + 78 + m ;

    
        
        fruta.bananasf.alpha = 0
        stage.addChild(fruta.bananasf);

        createjs.Tween.get(fruta.bananasf).to({alpha: 1},1000).call(function (){
        stage.removeChild(pagina3[atual3]);
        });
    
     
       stage.removeChild(btn.ant3);                      
       stage.addChild(btn.camc3);
    
  
createjs.Tween.get(btn.camc3,{loop:true})
        .to({rotation:30,}, 1000,createjs.Ease.sineInOut)
        .to({rotation:0,}, 500,createjs.Ease.sineInOut)
        .to({rotation:-30,}, 1000,createjs.Ease.sineInOut)
        .to({rotation:0,}, 500,createjs.Ease.sineInOut)
                                   
                                
    });


btn.invibanana.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer";   
    
});





//Funções maçã

btn.invimaca.addEventListener("click", function(){
    txt = new createjs.Text( 5 + "/" + 7 , "24px 'Rubik', sans-serif", "#e8e8e8");
    txt.x = 1020 - 60 - 45; 
    txt.y = 600 + 3 * m + 78 + m ;

    
        
        fruta.macasf.alpha = 0
        stage.addChild(fruta.macasf);

        createjs.Tween.get(fruta.macasf).to({alpha: 1},1000).call(function (){
        stage.removeChild(pagina3[atual3]);
        });
    
     
       stage.removeChild(btn.ant3);                      
       stage.addChild(btn.camc4);
    
  
createjs.Tween.get(btn.camc4,{loop:true})
        .to({rotation:30,}, 1000,createjs.Ease.sineInOut)
        .to({rotation:0,}, 500,createjs.Ease.sineInOut)
        .to({rotation:-30,}, 1000,createjs.Ease.sineInOut)
        .to({rotation:0,}, 500,createjs.Ease.sineInOut)                             

                                   
                                
    });



btn.invimaca.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer";   
    
});







//Funções pêra
btn.invipera.addEventListener("click", function(){
   txt = new createjs.Text( 5 + "/" + 7 , "24px 'Rubik', sans-serif", "#e8e8e8");
    txt.x = 1020 - 60 - 45; 
    txt.y = 600 + 3 * m + 78 + m ;

    
        
        fruta.perasf.alpha = 0
        stage.addChild(fruta.perasf);

        createjs.Tween.get(fruta.perasf).to({alpha: 1},1000).call(function (){
        stage.removeChild(pagina3[atual3]);
        });
    
     
       stage.removeChild(btn.ant3);                      
       stage.addChild(btn.camc5);
    
  
createjs.Tween.get(btn.camc5,{loop:true})
        .to({rotation:30,}, 1000,createjs.Ease.sineInOut)
        .to({rotation:0,}, 500,createjs.Ease.sineInOut)
        .to({rotation:-30,}, 1000,createjs.Ease.sineInOut)
        .to({rotation:0,}, 500,createjs.Ease.sineInOut)                             

                                   
                                
    });



btn.invipera.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer";   
    
});











//--------------------------------------------------------------------------------------------------------------
btn.semente.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer";   
    
});
   
//Função do drag and drop da semente no segundo capítulo
function drag(){

    if(atual2 == 3){
    stage.removeChild(btn.ant2,btn.prox2,btn.home,btn.capi);     
    createjs.Tween.get(btn.semente,{loop:true})
        .to({rotation:35,}, 250,createjs.Ease.sineInOut)
        .to({rotation:25,}, 250,createjs.Ease.sineInOut)
        .to({rotation:15,}, 500,createjs.Ease.sineInOut)
        .to({rotation:25,}, 500,createjs.Ease.sineInOut)  
      
    

    }else{
        stage.removeChild(btn.semente);
       
    }
    
    
    if (atual2 == 3){
        stage.removeChild(btn.prox2,btn.ant2);
        stage.addChild(btn.semente);
        btn.semente.on("pressmove", function(evt) {
        createjs.Tween.removeTweens(btn.semente);
    
        evt.target.x = evt.stageX;
        evt.target.y = evt.stageY;
     
            
    if (btn.semente.x < 790 && btn.semente.x > 750 && btn.semente.y <610  && btn.semente.y > 570){ 
        dentro = true;
        proximo2();
        setTimeout(function(){ proximo2(); }, 2500);
        stage.removeChild(btn.semente);
       
               
    }else{
        dentro = false;
           
                
    }            
    });  
    }
    }




//Função da lupa

btn.lupa.addEventListener("mouseover",function(evt){
        evt.target.cursor = "pointer";   
    
});





btn.lupa.addEventListener("click",mostraTexto);
    
function mostraTexto(){
   
 setTimeout(function(){ proximo3(); stage.addChild(btn.prox3) }, 1000);   
 btn.lupa.removeEventListener("click",mostraTexto);   
    
}








//------------------------------------------------------------------------------------------------------------
//Função que faz os objetos de interação se moverem

function gira(){

    if(atual == 10 && capitulo == 1){
    
    createjs.Tween.get(btn.camc1,{loop:true})
        .to({rotation:30,}, 1000,createjs.Ease.sineInOut)
        .to({rotation:0,}, 500,createjs.Ease.sineInOut)
        .to({rotation:-30,}, 1000,createjs.Ease.sineInOut)
        .to({rotation:0,}, 500,createjs.Ease.sineInOut)
  }
    if(atual2 == 5 && capitulo == 2){
         stage.removeChild(btn.prox2,btn.ant2);
    createjs.Tween.get(btn.camc2,{loop:true})
        .to({rotation:30,}, 1000,createjs.Ease.sineInOut)
        .to({rotation:0,}, 500,createjs.Ease.sineInOut)
        .to({rotation:-30,}, 1000,createjs.Ease.sineInOut)
        .to({rotation:0,}, 500,createjs.Ease.sineInOut)
  }    
  }


//----------------------------------------------------------------------------------------------------------

//Função que mostra o número da página no canvas    
function numpag(){

        stage.addChild(btn.esconde);
    
switch (capitulo){
            
    case 1:
        txt = new createjs.Text((atual + 1) + "/" + imagens.length, "24px 'Rubik', sans-serif", "#e8e8e8");  
    break;
        
    case 2:
        txt = new createjs.Text((atual2 + 1 ) + "/" + imagens2.length, "24px 'Rubik', sans-serif", "#e8e8e8");  
    break;
        
    case 3:
        txt = new createjs.Text((atual3 + 1 ) + "/" + imagens3.length , "24px 'Rubik', sans-serif", "#e8e8e8");  
    break;
        
    case 5:
       txt = new createjs.Text((atualfinal + 1) + "/" + imagensfinal.length, "24px 'Rubik', sans-serif", "#e8e8e8");  
    break;
        
}
      txt.x = 1020 - 60 - 45; 
      txt.y = 600 + 3 * m + 78 + m ;
      stage.addChild(txt);

}
        
