const att = "\n-AÇÃO\n-ANIMAÇÃO\n-AVENTURA\n-FICÇÃO\n-COMÉDIA\n-TERROR"
alert("Agora com os Quiz:\n" + att +"\n");


var titulorincipal = document.getElementById('titulo')
var cliqueAqui = document.getElementById('clique')
var txtDoCmc = document.getElementById('textinho1')
var asOpcoes = document.getElementById('opcoes')
var tituloOpcao = document.getElementById('tituloOpcoes')
var oTema1 = document.getElementById('tema1')
var oTema2 = document.getElementById('tema2')
var oTema3 = document.getElementById('tema3')
var oTema4 = document.getElementById('tema4')
var oTema5 = document.getElementById('tema5')
var oTema6 = document.getElementById('tema6')
var oTema7 = document.getElementById('tema7')
var oTema8 = document.getElementById('tema8')
var oTema9 = document.getElementById('tema9')

function botaoMenu() {
    clique.style.transition="0.15s"
    clique.style.fontWeight= "600"
    setTimeout(function(){; clique.style.display="none"; textinho1.style.display="none"; titulo.style.display="none"; setTimeout(function() {tituloOpcoes.style.display="block"; setTimeout(function(){tema1.style.display="block"; tema2.style.display="block"; tema3.style.display="block"; tema4.style.display="block"; tema5.style.display="block"; tema6.style.display="block"; tema7.style.display="block"; tema8.style.display="block"; tema9.style.display="block";},500)},500)},1500)

}

var escolheu 
var aPergunta
var alt1, alt2, alt3, alt4, alt5
var respostasCertas
var imagens
var qualAPessoaEscolheu = document.getElementById('qualEscolheu')
var temas = document.getElementById('escolhida')
var textinhoExplicativo = document.getElementById('explicacaoQuiz')
var botaoVoltarParaTemas = document.getElementById('botao2')
var botaoIniciarQuiz = document.getElementById('botao1')

function acaoQuiz(){
   opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de AÇÃO'
   aPergunta = ["Qual das alternativas abaixo não é de AÇÃO:", "Qual desses seria quase que obrigatório assistir:", "Qual desses não se encontra no MCU:", "Nas mãos dele, até uma caneta é uma arma:", "Qual desses não se encaixam com os outros:", "Qual desses é permitido chorar (motivo: filme ser muito bom):", "Rocky Balboa não participa de qual dos filmes abaixo:", "Qual desses nunca foram arqui-inimigos nos filmes:", "Qual provavelmente o orçamento saiu mais caro:", "Qual desses não tem segundo filme:"]
   imagens = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["O Primeiro Vingador", "Velozes e Furiosos 7", "WandaVision", "Carga Explosiva", "Hitman", "Thor Amor e Trovão", "Rambo", "Batman e Coringa", "Alerta Vermelho", "Doutor Estranho"]
   alt2 = ["Abracadabra", "Agente Oculto",   "Eternos", "Avatar", "Ben10", "Cidade Perdida", "Duro de Matar", "Flash e Mercúrio", "Mad Max (1979)", "Exterminador do Futuro"]
   alt3 = ["#Alive", "Uncharted: Fora do Mapa", "Capitã Marvel", "Velozes e Furiosos 5", "James Bond", "Mulher-Maravilha 1984", "Creed-Nascido para Lutar", "Professor Xavier e Magneto", "Napoleon Dynamite", "Lou"]
   alt4 = ["Deadpool", "KarateKid", "Homem-Formiga e a Vespa", "John Wick 3", "John Wick", "Batman vs Superman", "Rocky V", "Superman e Lex Luthor", "Halloween", "Missão Impossível"]
   alt5 = ["Clube da Luta", "Viúva Negra", "Aves de Rapina", "Missão Impossível", "Soldado Infernal", "Coração de Ferro", "Ajuste de Contas", "Thor e Loki", "Atividade Paranormal", "Batman"]
   respostasCertas = ["box[2]","box[4]", "box[5]","box[4]","box[2]","box[5]","box[2]","box[2]","box[1]","box[3]"]
   
   qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
   
    
}
function animacaoQuiz(){
   opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de ANIMAÇÃO'
   aPergunta = ["Uma casa que voa:", "Robôs?", "Natal chegando:", "Os Brinquedos tem vida:", "As Hienas são uns dos principais vilões:", "O maior cozinheiro que existe:", "Um vilão-heroi??", "Irmãos gêmeos?", "Idade da Pedra:", "Viagem no tempo:"]
   imagens = ["https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHnc9Haqo1W6a_27yKO5k69yxTypSM6WwCA&usqp=CAU", "https:br.web.img2.acsta.net/medias/nmedia/18/91/31/05/20139182.jpg", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qkzhmMrDlIS05UaKtfc6JlqE_5DxSEw1g&usqp=CAU", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7MCF1mBjg5gr_9DIxbo17l0TOukVJAT6Yw&usqp=CAU", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iPoO5g-4Lc1g-CrgwyLAz-bMEsGU6dWRQQ&usqp=CAU", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnhOV0N5-5nCe-ipspmmbtUH6kI2gINmjRQ&usqp=CAU", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIO1XfuL28Hb8sWr5HBCccSjsAbpOfN__0Ow&usqp=CAU", "https:br.web.img2.acsta.net/pictures/17/03/14/20/37/126690.jpg", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwmvRLTvpugrLJ2POJ9p79PlNCmMSPfhatw&usqp=CAU", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgAWiS895x_t_BZUe7b4aqYd24TDxpIpF4w&usqp=CAU"]
   alt1 = ["Moana", "Encanto", "Klaus", "Procurando Dory", "Viva – A Vida É uma Festa", "Procurando Nemo", "Universidade Monstros", "Shrek Terceiro", "Os Incríveis", "Madagascar"]
   alt2 = ["Meu Malvado Favorito", "Vida de Inseto", "Luca", "Frozen 2", "Minions 2: A Origem de Gru", "Ratatouille", "Lilo & Stitch", "Gato de Botas", "Os Croods", "Dumbo"]
   alt3 = ["Up - Altas Aventuras", "A Noiva-Cadáver", "Zootopia", "Toy Story 3", "Aviões", "Soul", "Detona Ralph", "A Era do Gelo 4", "A Dama e o Vagabundo", "A Era do Gelo"]
   alt4 = ["O Estranho Mundo de Jack", "Wall-E", "O Lorax", "Shrek", "Monstros S.A.", "Divertida Mente", "Valente", "Meu Malvado Favorito 3", "O Serviço de Entregas da Kiki", "Irmão Urso"]
   alt5 = ["O Poderoso Chefinho", "Como Treinar o seu Dragão 3", "Tarzan", "Branca de Neve e os Sete Anões", "O Rei Leão", "O Gigante de Ferro", "Tá Chovendo Hambúrguer", "Hotel Transilvânia 3", "Sing", "A Família do Futuro"]
   respostasCertas = ["box[3]","box[4]", "box[1]","box[3]","box[5]","box[2]","box[3]","box[4]","box[2]","box[5]"]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function aventuraQuiz(){
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de AVENTURA'
   aPergunta = ["Qual desses é uma aventura no espaço?", "Quase que uma aventura de carros:", "Um filme com muitos Easters Eggs:", "Labirintos é com eles:", "Apenas um livro causou tudo isso:", "Um jogo causou toda essa aventura:", "Um filme muito clássico, e obrigatório a todas as idades:", "O personagem principal é conhecido por ser muito baixo:", "Goblins do lado de fora?", "Segundo eles, somos trouxas:"]
   imagens = ["https:br.web.img3.acsta.net/pictures/16/11/23/21/45/138805.jpg", "https:br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcPkqIQwqA0zuHp3O1lZ9LaOcjU7-9nzRUw&usqp=CAU", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_JvGFAzf1rmAQ-8nRMhng03OYSayY_0COw&usqp=CAU", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfafeIAk32f7FJRBReqO2RIjvH2B07ror-og&usqp=CAU","https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCZYFJemoeBIKzRUnzQr2_TBdIJEctFX6Ig&usqp=CAU","https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7RIwGdjR1TEe-DEfgiYrvVswaEkjWJk4Fg&usqp=CAU", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZxuX2VvC4sP_CTBlpOga0IPtlpuSCNKSyA&usqp=CAU", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPmuswI1pGe8sOH4NDtXL-cVhN9ufJrvQDcA&usqp=CAU", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBog7JaXeOb70NeP-yzlGLH9EIdPYVBJJFWA&usqp=CAU"]
   alt1 = ["Sonic: O Filme", "Lightyear", "Free Guy", "Liga da Justiça", "Piratas do Caribe", "Jumanji: Próxima Fase", "Venom", "Zathura", "Aquaman", "As Crônicas de Nárnia"]
   alt2 = ["Passageiros", "Mortal Kombat", "Os Croods 2", "Red: Crescer é uma Fera", "Animais Fantásticos", "O Predador: A Caçada", "Alita: Anjo de Combate", "A Bússola de Ouro", "Assassin's Creed", "Tomb Raider"]
   alt3 = ["Cidade Perdida", "DC Liga dos Superpets", "O Chamado da Floresta", "De Volta para o Futuro", "Mogli: Entre dois mundos", "O auto da Comparecida", "O Pequeno Príncipe", "Viajem ao centro da Terra", "Coração de Tinta", "Jack, o Caçador de Gigantes"]
   alt4 = ["Jurassic World: Domínio", "Duna", "Luca", "Maze Runner: Correr ou Morrer", "Era do gelo 3", "Percy Jackson", "Velozes e Furiosos 8", "Deuses do Egito", "As Crônicas de Spiderwick", "Jogos Vorazes"]
   alt5 = ["Uncharted: Fora do Mapa", "Velozes e Furiosos 9", "Viva – A Vida É uma Festa", "Minions 2", "Goosebumps: Monstros e Arrepios", "Senhor dos Anéis", "Amor e Montros", "O Hobbit", "O Último Mestre do Ar", "Harry Potter"]
   respostasCertas = ["box[2]","box[5]", "box[1]","box[4]","box[5]","box[1]","box[3]","box[5]","box[4]","box[5]"]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function comediaQuiz() {
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de COMÉDIA'
   aPergunta = ["Um heroi?", "Dois malucos:", "Mas que filme bom:", "Lição de vida:", "Um grande Clássico:", "Amigos até depois de se casarem:", "O filme é caro só por ter esse ator lá:", "Animais Extintos??", "Varios jogos na vida real:", "Ganhou na loteria:"]
   imagens = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["Gente grande", "Alerta Vermelho", "Um Príncipe em Nova York 2", "Click", "Se Beber, Não Case!", "Todo mundo Quase morto", "Minha Mãe é uma Peça", "A Era do Gelo 3", "Cabras da Peste", "WIFI Ralph"]
   alt2 = ["Deadpool", "O Grinch", "Bons de Bico", "Esqueceram de Mim", "As Branquelas", "Minha Mãe é uma Peça 3", "Vai que Cola 2", "Hotel Transilvânia 3", "Pixels", "Os Salafrários"]
   alt3 = ["Ted", "Zumbilândia", "A Família Addams", "De férias da Família", "O Homem de Toronto", "O Auto da Compadecida", "Tô Ryca", "O Filho do Máskara", "Jungle Cruise", "Até que a Sorte nos Separe"]
   alt4 = ["Férias da Família Johnson", "Debi & Loide 2", "Um Espião e Meio", "Minions 2", "Space Jam: Um Novo Legado", "Gente Grande", "Dolittle", "A Chefinha", "Tudo Bem no Natal Que Vem", "Turma da Mônica: Laços"]
   alt5 = ["Tudo por um Popstar", "Free Guy", "As Mil Palavras", "Hancock", "O Ditador", "Trolls", "Os Farofeiros", "O Poderoso Chefinho", "Cada Um Tem a Gêmea Que Merece", "Não Olhe para Cima"]
   respostasCertas = ["box[2]","box[4]", "box[5]","box[1]","box[2]","box[4]","box[4]","box[1]","box[2]","box[3]"]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function ficcaoQuiz() {
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de FICÇÃO'
   aPergunta = ["Toda vez que morre, o mundo reseta:", "Determinado a matar a personagem principal:", "Cuidado que a Lua esta vindo em direção a Terra:", "Qual desses não é um filme clássico para assistir:", "Clonagem existe:", "A história principal se inicia num contrabando de drogas:", "Robôs podem se transformar em carros:", "Robô acaba criando vida, personalidade, e uma alma?", "O principal acaba sendo puxado a um mundo cibernético:", "Qual dos filmes, animais selvagens se tornam mil vezes maior?"]
   imagens = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["A Chegada", "WALL·E", "Oblivion", "Aniquilação", "Chappie", "MIB³ - Homens de Preto 3", "Jogos Vorazes", "Pantera Negra", "Não! Não Olhe!", "Interestelar"]
   alt2 = ["Distrito 9", "A.I. - Inteligência Artificial", "Jogador Nº 1", "Jurassic Park", "Projeto Gemini", "Perdido em Marte", "Mad Max: Estrada da Fúria", "Matrix Resurrections", "Tron - O Legado", "Alita: Anjo de Combate"]
   alt3 = ["Planeta dos Macacos", "O Exterminador do Futuro", "Moonfall", "De Volta Para o Futuro", "Independence Day", "Godzilla vs Kong", "O Dia Depois de Amanhã", "Star Wars: O Despertar da Força", "John Carter - Entre Dois Mundos", "A 5ª Onda"]
   alt4 = ["Ad Astra - Rumo às Estrelas", "Free Guy", "Tenet", "Matrix", "Depois da Terra", "Maze Runner: A Cura Mortal", "Transformers: O Último Cavaleiro", "Looper - Assassinos do Futuro", "Morbius", "Rampage: Destruição Total"]
   alt5 = ["No Limite do Amanhã", "Círculo de Fogo", "Expresso do Amanhã", "E.T. O Extraterrestre", "Lunar", "Lucy", "Duna", "Eu, Robô", "Capitã Marvel", "Quarteto Fantástico 2"]
   respostasCertas = ["box[5]","box[3]", "box[3]","box[1]","box[2]","box[5]","box[4]","box[5]","box[2]","box[4]"]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function romanceQuiz() {
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de ROMANCE'
   aPergunta = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   imagens = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt2 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt3 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt4 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt5 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   respostasCertas = [""]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function dramaQuiz() {
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de DRAMA'
   aPergunta = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   imagens = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt2 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt3 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt4 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt5 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   respostasCertas = [""]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function terrorQuiz() {
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de TERROR'
   aPergunta = ["Pensa num filme Ruim:", "Cuidado com os bueiros:", "Filme Brasileiro:", "Começou com um jogo:", "Qual desses tem continuação?", "Um Aplicativo:", "Alienígenas?", "Um brinquedo assassino:", "Testam a vida pós morte:", "Um grande Clássico:"]
   imagens = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["Órfã 2: A Origem", "A Hora do Pesadelo", "Instinto Materno", "O meme do Mal", "Mamãe", "Nós", "Sem Saída", "Chuck", "Além da Morte", "O Mal está la Fora"]
   alt2 = ["Sorria", "It- A Coisa", "Atividade Paranormal", "Halloween Ends", "O Closet", "A Hora da Sua Morte", "O Exorcista", "Herdeiro", "Espíritos Obscuros", "Tem Alguém na sua Casa"]
   alt3 = ["Terrifier", "O Grito", "Morto não Fala", "Annabelle", "Marcas da maldição", "O Homem Invisível", "Não! Não Olhe!", "O Último Ritual", "Verdade ou Desafio", "Ninguém sai Vivo"]
   alt4 = ["A Lenda de Candyman", "O Chamado 3", "Pânico", "Morte. Morte. Morte.", "Escolha ou Morra", "A Freira", "Passageiro 666", "Crocodilos: A morte te espera", "X - A Marca da Morte", "Ouija: Invocando o Mal"]
   alt5 = ["Invocação do Mal 3", "Fantasmas do Passado", "A Bruxa de Blair", "Corrente do Mal", "Rua do Medo: 1994", "Corra!", "O massacre da Serra Elétrica", "O Jogo do Bunker", "Cuidado com Quem Chama", "O Iluminado"]
   respostasCertas = ["box[1]","box[2]", "box[3]","box[4]","box[5]","box[2]","box[3]","box[1]","box[1]","box[5]"]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
   
}
function thrillerQuiz() {
   opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de THRILLER'
   aPergunta = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   imagens = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt2 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt3 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt4 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt5 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   respostasCertas = [""]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
   
}

var i = 0

function iniciar(){
    escolhida.style.display='none'
    i = i -1
    proxima()
}
function voltar(){
    escolhida.style.display='none'
    setTimeout(function(){opcoes.style.display="block"},500)
}

var as = -1
var pergunta = document.getElementById('perguntaTexto')
var a1 = document.getElementById('alternativa1')
var a2 = document.getElementById('alternativa2')
var a3 = document.getElementById('alternativa3')
var a4 = document.getElementById('alternativa4')
var a5 = document.getElementById('alternativa5')
var botaoProximaPergunta = document.getElementById('botaoProxima')
var foraLinhaPontos = document.getElementById('pontuacao')
var linhaPontos = document.getElementById('linhaPontucao')
var altern1 = document.getElementById('box1')
var altern2 = document.getElementById('box2')
var altern3 = document.getElementById('box3')
var altern4 = document.getElementById('box4')
var altern5 = document.getElementById('box5')
var sobrePerguntas 
sobrePerguntas = ["","","","","","","","","",""]
var al

function proxima() {
    as = as +1
    i = i +1
    al = ["","","","",""]
    
    
    if(i === 10){
         
          telaFinal()
          
    }else{
    
    validacaoAleatorio()
    sobrePerguntas[as] = aleatorio
    
    for(var kol = 0; kol <=4; kol++){
        validacaoAleatorioAlternativas()
        al[kol] = ordemAlternativas
    }
    perguntaTexto.innerHTML = aPergunta[aleatorio]
    
    
    pontuacao.style.display="none"
    linhaPontucao.style.display="none"
    perguntaTexto.style.display="none"
    box1.style.display="none"
    alternativa1.style.display="none"
    box2.style.display="none";
    alternativa2.style.display="none"
    box3.style.display="none"
    alternativa3.style.display="none"
    box4.style.display="none";
    alternativa4.style.display="none"
    box5.style.display="none";
    alternativa5.style.display="none"
    botaoProxima.style.display="none";
    
    
    perguntasAleatorias()
    
    box1.checked = 0
    box2.checked = 0
    box3.checked = 0
    box4.checked = 0
    box5.checked = 0
    
    pontuacao.style.display="block"
    linhaPontucao.style.display="block";
    perguntaTexto.style.display="block";
    setTimeout(function(){box1.style.display="block"; alternativa1.style.display="block"; setTimeout(function(){box2.style.display="block"; alternativa2.style.display="block"; setTimeout(function(){box3.style.display="block"; alternativa3.style.display="block"; setTimeout(function(){box4.style.display="block"; alternativa4.style.display="block"; setTimeout(function(){box5.style.display="block"; alternativa5.style.display="block"; setTimeout(function(){botaoProxima.style.display="block";},700)},400)},400)},400)},400)},600)
    
    certoOuErrado(aleatorio)
    }
}
var numBaixo
function certoOuErrado(num) {
    numBaixo = num
    palavraAssina()
    
}

function validacaoAleatorio() {
   mini = 0
   maxi = 10
   getRandomInt(mini, maxi)
   
   if(aleatorio === sobrePerguntas[0]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[1]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[2]) {
       validacaoAleatorio()    
   }
   if(aleatorio === sobrePerguntas[3]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[4]) {
       validacaoAleatorio()
   }
   
   if(aleatorio === sobrePerguntas[5]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[6]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[7]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[8]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[9]) {
       validacaoAleatorio()
   }   
}
function getRandomInt(min, max){ 
    min = Math.ceil(min); 
    max = Math.floor(max);
    aleatorio = Math.floor(Math.random() * (max - min) + min);
}
function getRandomInte(min, max){ 
    min = Math.ceil(min); 
    max = Math.floor(max);
    aleatorio02 = Math.floor(Math.random() * (max - min) + min);
}
function getRandomIntA(min, max){ 
    min = Math.ceil(min); 
    max = Math.floor(max);
    aleatorio2 = Math.floor(Math.random() * (max - min) + min);
}

var ordemAlternativas


function validacaoAleatorioAlternativas() {
    getRandomIntA(1,6)
    ordemAlternativas = aleatorio2
     
   if(ordemAlternativas === al[0]) {
       validacaoAleatorioAlternativas()
   }
   if(ordemAlternativas === al[1]) {
       validacaoAleatorioAlternativas()
   }
   if(ordemAlternativas === al[2]) {
       validacaoAleatorioAlternativas()
   }
   if(ordemAlternativas === al[3]) {
       validacaoAleatorioAlternativas()
   }
   if(ordemAlternativas === al[4]) {
       validacaoAleatorioAlternativas()
   }
   
}

var alternativaClicada1 = document.getElementById('simAlternativa1')
var alternativaClicada2 = document.getElementById('simAlternativa2')
var alternativaClicada3 = document.getElementById('simAlternativa3')
var alternativaClicada4 = document.getElementById('simAlternativa4')
var alternativaClicada5 = document.getElementById('simAlternativa5')

function perguntasAleatorias() {
    let agoraSimAlternativas, agoraSimAlternativas2
    let sobe = 0
    let rou = 0
    
    
    while(sobe != 5){
        rou++
        agoraSimAlternativas = "alternativa" + rou
        agoraSimAlternativas2 = "alt" + al[rou -1]
        
        
        if(agoraSimAlternativas === "alternativa1") {
            if(agoraSimAlternativas2 === "alt1"){
                alternativa1.innerHTML = alt1[aleatorio] 
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt2"){
                alternativa1.innerHTML = alt2[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt3"){
                alternativa1.innerHTML = alt3[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt4"){
                alternativa1.innerHTML = alt4[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt5"){
                alternativa1.innerHTML = alt5[aleatorio]
                sobe = sobe +1
            }
        }
        if(agoraSimAlternativas === "alternativa2"){
            if(agoraSimAlternativas2 === "alt1"){
                alternativa2.innerHTML = alt1[aleatorio] 
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt2"){
                alternativa2.innerHTML = alt2[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt3"){
                alternativa2.innerHTML = alt3[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt4"){
                alternativa2.innerHTML = alt4[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt5"){
                alternativa2.innerHTML = alt5[aleatorio]
                sobe = sobe +1
            }
        }
        if(agoraSimAlternativas === "alternativa3") {
            if(agoraSimAlternativas2 === "alt1"){
                alternativa3.innerHTML = alt1[aleatorio] 
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt2"){
                alternativa3.innerHTML = alt2[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt3"){
                alternativa3.innerHTML = alt3[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt4"){
                alternativa3.innerHTML = alt4[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt5"){
                alternativa3.innerHTML = alt5[aleatorio]
                sobe = sobe +1
            }
        }
        if(agoraSimAlternativas === "alternativa4"){
            if(agoraSimAlternativas2 === "alt1"){
                alternativa4.innerHTML = alt1[aleatorio] 
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt2"){
                alternativa4.innerHTML = alt2[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt3"){
                alternativa4.innerHTML = alt3[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt4"){
                alternativa4.innerHTML = alt4[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt5"){
                alternativa4.innerHTML = alt5[aleatorio]
                sobe = sobe +1
            }
        }
        if(agoraSimAlternativas === "alternativa5"){
            if(agoraSimAlternativas2 === "alt1"){
                alternativa5.innerHTML = alt1[aleatorio] 
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt2"){
                alternativa5.innerHTML = alt2[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt3"){
                alternativa5.innerHTML = alt3[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt4"){
                alternativa5.innerHTML = alt4[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt5"){
                alternativa5.innerHTML = alt5[aleatorio]
                sobe = sobe +1
            }
        }
        
        
    }
    sobe = 0
    rou = 0
}
function palavraAssina(){
    simAlternativa1.onclick = function(){
        box1.checked = true
        alterna1()
    }
    simAlternativa2.onclick = function(){
        box2.checked = true
        alterna2()
    }
    simAlternativa3.onclick = function(){
        box3.checked = true
        alterna3()
    }
    simAlternativa4.onclick = function(){
        box4.checked = true
        alterna4()
    }
    simAlternativa5.onclick = function(){
        box5.checked = true
        alterna5()
    }
}
function alterna1() {
    if(box1.checked) {
        box2.checked = 0
        box3.checked = 0
        box4.checked = 0
        box5.checked = 0
        box1.checked = true
    }
}
function alterna2() {
    if(box2.checked) {
        box1.checked = 0
        box3.checked = 0
        box4.checked = 0
        box5.checked = 0
        box2.checked = true
    }
}
function alterna3() {
    if(box3.checked) {
        box1.checked = 0
        box2.checked = 0
        box4.checked = 0
        box5.checked = 0
        box3.checked = true
    }
}
function alterna4() {
    if(box4.checked) {
        box1.checked = 0
        box2.checked = 0
        box3.checked = 0
        box5.checked = 0
        box4.checked = true
    }
}
function alterna5() {
    if(box5.checked) {
        box1.checked = 0
        box2.checked = 0
        box3.checked = 0
        box4.checked = 0
        box5.checked = true
    }
}

var Clicados = 0

function validacao() {
    Clicados = 0
    if(Clicados === 0){
    
        enquanto()
        
    }
}

var caixaClicada 

function enquanto() {
    if(Clicados === 0){
    
        if(box1.checked) {
            Clicados =  Clicados + 1
            caixaClicada = 1
        }
        if(box2.checked) {
            Clicados =  Clicados + 1
            caixaClicada = 2
        }
        if(box3.checked) {
            Clicados =  Clicados + 1
            caixaClicada = 3
        }
        if(box4.checked) {
            Clicados =  Clicados + 1
            caixaClicada = 4
        }
        if(box5.checked) {
            Clicados =  Clicados + 1
            caixaClicada = 5
        }
        
        validacao2()
        
    }
}

var chegou

function validacao2() {
     if(Clicados === 1){
           chegou = 1
           
           colorindo()
           
           box1.checked = 0
           box2.checked = 0
           box3.checked = 0
           box4.checked = 0
           box5.checked = 0
     }
     if(Clicados === 0){
            alert("Por favor escolha alguma das seguintes alternativas:");
     }
}

var bolinhas
var respostasFinal
var pontuacaoFinal = 0
var oMenu = document.getElementById('menu')
var aQuiz = document.getElementById('palavraQuiz')
var finalIncluido

var bo
var tiva1 = document.getElementById('alternativa1')
var tiva2 = document.getElementById('alternativa2')
var tiva3 = document.getElementById('alternativa3')
var tiva4 = document.getElementById('alternativa4')
var tiva5 = document.getElementById('alternativa5')


function colorindo() {
    var o = i +1
    
    bolinhas = "p" + o
    finalIncluido = al[caixaClicada -1]
    respostasFinal = "box[" + finalIncluido + "]"
    
    if(chegou === 1){
        if(respostasCertas[aleatorio] === respostasFinal){
            pontuacaoFinal = pontuacaoFinal +1
            
            //NÃO TAVA FUNCIONANDO AQ
            
            testagem()
         
            menu.style.transition="1s"
            menu.style.backgroundColor="green"
            palavraQuiz.style.transition="1s"
            palavraQuiz.style.color="#fff"
              setTimeout(function(){menu.style.transition="1s"; menu.style.backgroundColor="#fff"; palavraQuiz.style.transition="1s"; palavraQuiz.style.color="#E8000D"; testagemBolinha()},1500)
     
        }else{
            
            testagem()
              
            pintandoACertaNaErrada()
            
            menu.style.transition="1s";
            menu.style.backgroundColor="red";
            palavraQuiz.style.transition="1s";
            palavraQuiz.style.color="#000";
            
            
            
            setTimeout(function(){menu.style.transition="1s"; menu.style.backgroundColor="#fff"; palavraQuiz.style.transition="1s"; palavraQuiz.style.color="#E8000D"; testagemBolinha()},1500)
        }
    }
    filmesCertos(numBaixo)
    setTimeout(function(){proxima()},2000)
}
function testagemBolinha() {
    if(respostasCertas[aleatorio] === respostasFinal){
        if(bolinhas === "p1") {
            p1.style.backgroundColor="green";
        }
        if(bolinhas === "p2") {
            p2.style.backgroundColor="green";
        }
        if(bolinhas === "p3") {
            p3.style.backgroundColor="green";
        }
        if(bolinhas === "p4") {
            p4.style.backgroundColor="green";
        }
        if(bolinhas === "p5") {
            p5.style.backgroundColor="green";
        }
        if(bolinhas === "p6") {
            p6.style.backgroundColor="green";
        }
        if(bolinhas === "p7") {
            p7.style.backgroundColor="green";
        }
        if(bolinhas === "p8") {
            p8.style.backgroundColor="green";
        }
        if(bolinhas === "p9") {
            p9.style.backgroundColor="green";
        }
        if(bolinhas === "p10") {
            p10.style.backgroundColor="green";
        }
        
     }else{
     
         if(bolinhas === "p1") {
            p1.style.backgroundColor="red";
        }
        if(bolinhas === "p2") {
            p2.style.backgroundColor="red";
        }
        if(bolinhas === "p3") {
            p3.style.backgroundColor="red";
        }
        if(bolinhas === "p4") {
            p4.style.backgroundColor="red";
        }
        if(bolinhas === "p5") {
            p5.style.backgroundColor="red";
        }
        if(bolinhas === "p6") {
        p6.style.backgroundColor="red";
        }
        if(bolinhas === "p7") {
            p7.style.backgroundColor="red";
        }
        if(bolinhas === "p8") {
            p8.style.backgroundColor="red";
        }
        if(bolinhas === "p9") {
            p9.style.backgroundColor="red";
        }
        if(bolinhas === "p10") {
            p10.style.backgroundColor="red";
        }
     }
}
function testagem() {
     let aAlternativaEscolhida = "simAlternativa" + caixaClicada 
     
     if(respostasCertas[aleatorio] === respostasFinal){
        
        if(aAlternativaEscolhida === "simAlternativa1") {
            simAlternativa1.style.transition="0.5s"
            simAlternativa1.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa1.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa2") {
                simAlternativa2.style.transition="0.5s"
            simAlternativa2.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa2.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa3") {
            simAlternativa3.style.transition="0.5s"
            simAlternativa3.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa3.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa4") {
            simAlternativa4.style.transition="0.5s"
            simAlternativa4.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa4.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa5") {
            simAlternativa5.style.transition="0.5s"
        simAlternativa5.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa5.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
    }else{
        if(aAlternativaEscolhida === "simAlternativa1") {
            simAlternativa1.style.transition="0.5s"
            simAlternativa1.style.backgroundColor="red"
        setTimeout(function(){simAlternativa1.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa2") {
                simAlternativa2.style.transition="0.5s"
            simAlternativa2.style.backgroundColor="red"
        setTimeout(function(){simAlternativa2.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa3") {
            simAlternativa3.style.transition="0.5s"
            simAlternativa3.style.backgroundColor="red"
        setTimeout(function(){simAlternativa3.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa4") {
            simAlternativa4.style.transition="0.5s"
            simAlternativa4.style.backgroundColor="red"
        setTimeout(function(){simAlternativa4.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa5") {
            simAlternativa5.style.transition="0.5s"
        simAlternativa5.style.backgroundColor="red"
        setTimeout(function(){simAlternativa5.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
    }
    
}


var corretaFinal
var correta
var corretaFinal1 
var simAlternativa

function pintandoACertaNaErrada() {
    correta = respostasCertas[aleatorio].replace("box[","")
    corretaFinal1 = correta.replace("]","")
    
    numero()
    
    if(corretaFinal === al[0]) {
        corretaFinal = 1
        numeroAlternativa()
    }
    if(corretaFinal === al[1]) {
        corretaFinal = 2
        numeroAlternativa()
    }
    if(corretaFinal === al[2]) {
        corretaFinal = 3
        numeroAlternativa()
    }
    if(corretaFinal === al[3]) {
        corretaFinal = 4
        numeroAlternativa()
    }
    if(corretaFinal === al[4]) {
        corretaFinal = 5
        numeroAlternativa()
    }
}
function numero() {
    if(corretaFinal1 === "1") {
        corretaFinal = 1
    }
    if(corretaFinal1 === "2") {
        corretaFinal = 2
    }
    if(corretaFinal1 === "3") {
        corretaFinal = 3
    }
    if(corretaFinal1 === "4") {
        corretaFinal = 4
    }
    if(corretaFinal1 === "5") {
        corretaFinal = 5
    }
}
function numeroAlternativa() {
    if(corretaFinal === 1) {
        simAlternativa1.style.transition="0.5s"
        simAlternativa1.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa1.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        corretaFinal = undefined
    }
    if(corretaFinal === 2) {
        simAlternativa2.style.transition="0.5s"
        simAlternativa2.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa2.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        corretaFinal = undefined
    }
    if(corretaFinal === 3) {
        simAlternativa3.style.transition="0.5s"
        simAlternativa3.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa3.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        corretaFinal = undefined
    }
    if(corretaFinal === 4) {
        simAlternativa4.style.transition="0.5s"
        simAlternativa4.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa4.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        corretaFinal = undefined
    }
    if(corretaFinal === 5) {
        simAlternativa5.style.transition="0.5s"
        simAlternativa5.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa5.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        corretaFinal = undefined
    }
}

var chamando0 = document.getElementById('oFinal')
var chamando1 = document.getElementById('falaFinal')
var chamando2 = document.getElementById('notaFinal')
var chamando3 = document.getElementById('textoFinal')
var clique2 = document.getElementById('botaoReiniciarTudo')

function telaFinal() {
    let oTemaEscolhido = escolheu.replace("Você escolheu o tema de ","")
    
    perguntaTexto.style.display="none"
    box1.style.display="none"
    alternativa1.style.display="none"
    box2.style.display="none";
    alternativa2.style.display="none"
    box3.style.display="none"
    alternativa3.style.display="none"
    box4.style.display="none";
    alternativa4.style.display="none"
    box5.style.display="none";
    alternativa5.style.display="none"
    botaoProxima.style.display="none";
    setTimeout(function(){pontuacao.style.display="none"; linhaPontucao.style.display="none";},2000)
    
    oFinal.style.display="block"
    falaFinal.style.display="block"
    notaFinal.style.display="block"
    textoFinal.style.display="block"
    botaoReiniciarTudo.style.display="block"
    
    
    if(pontuacaoFinal === 0){
        falaFinal.innerHTML = "Então... sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Com certeza você assiste quase nada de filmes de " + oTemaEscolhido + " mas tente outro tema ai..."
    }
    if(pontuacaoFinal === 1 || pontuacaoFinal < 5){
        falaFinal.innerHTML = "Éhh sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Pelo o que eu vi, você não assiste ou conhece muitos filmes de " + oTemaEscolhido + ", mas tudo bem, tente outro tema:"
    }
    if(pontuacaoFinal === 5) {
        falaFinal.innerHTML = "Parabéns sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Você acertou a metade, meus parabéns, já pode ir pro próximo tema"
    }
    if(pontuacaoFinal === 6 || pontuacaoFinal === 7){
        falaFinal.innerHTML = "Parabéns sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Você acertou mais da metade, meus parabéns, já pode ir pro próximo tema"
    }
    if(pontuacaoFinal >= 8) {
        falaFinal.innerHTML = "Parabéns sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Tenho quase certeza que você assiste muitos filmes de " + oTemaEscolhido + " agora tente os outros temas"
    }
}
function cliqueFinal() {
    jo = ["","","","","","","","","",""]
    sobrePerguntas = ["","","","","","","","","",""]
    pontuacaoFinal = 0
    chegou = 0
    as = -1
    i= 0
    
    p1.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p2.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p3.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p4.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p5.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p6.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p7.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p8.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p9.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p10.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    botaoReiniciarTudo.style.transition="0.15s"
    botaoReiniciarTudo.style.fontWeight= "600"
    setTimeout(function(){botaoReiniciarTudo.style.display="none"; falaFinal.style.display="none"; notaFinal.style.display="none"; textoFinal.style.display="none"; oFinal.style.display="none"; setTimeout(function() {opcoes.style.display="block"; },1500)},500)
    
}
function filmesCertos(num) {
    const localMovie = document.querySelector('.filmes')
    const movies = document.querySelector('.oFilme')
    
    
    if(imagens[0] != "1-)"){
        localMovie.style.display= "block"
        movies.src = imagens[num]
        setTimeout(function(){localMovie.style.display= "none"},2000)
    }
}
