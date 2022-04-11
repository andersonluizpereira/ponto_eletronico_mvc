#Desafio para fullstack

#Para executar o sistema tenha o docker instalado e digite
docker-compose up -d

#Para rodar o sistema
npm run build && npm run start

#N1
##Como usuario, eu quero cadastrar poder cadastrar vários usuários, só que eles não podem repetir os dados.
##Hoje o sistema está permitindo que cadastre várias pessoas ao mesmo tempo.
###Não pode permitir que o cpf se repita.
###Não pode permitir que o rg se repita.
###Não pode permitir que o email se repita.
###Dentro da pasta Login, raiz, existe um arquivo inicio.html, onde no inicio eu veja os dados de todos os usuários.
###Dentro da pasta Login, raiz, existe um arquivo cadastro.html, onde eu possa cadastrar os usuários.
###Dentro da pasta Login, raiz, existe um arquivo index.html, onde eu possa inserir o usuario e senha e ele retorna o token e devo salvar nolocal storage.

#N2
##Como usuario, eu quero cadastrar poder cadastrar vários usuários, só que eles não podem repetir os dados.
##Hoje o sistema está permitindo que cadastre várias pessoas ao mesmo tempo.
###Não pode permitir que o cpf se repita.
###Ao cadastrar o cpf, tem que efetuar uma validação para saber o mesmo é valido, não permitindo que isso repita.
###Não pode permitir que o rg se repita.
###Ao cadastrar o rg, tem que efetuar uma validação para saber o mesmo é valido, não permitindo que isso repita.
###Não pode permitir que o email se repita.
###Ao cadastrar o email, tem que efetuar uma validação para saber o mesmo é valido, não permitindo que isso repita.
###Dentro da pasta Login, raiz, existe um arquivo inicio.html, onde no inicio eu veja os dados de todos os usuários.
###Dentro da pasta Login, raiz, existe um arquivo cadastro.html, onde eu possa cadastrar os usuários.
###Dentro da pasta Login, raiz, existe um arquivo index.html, onde eu possa inserir o usuario e senha e ele retorna o token e devo salvar nos cookies no local storage caso não tenha permissão.

#N3
##Como usuario, eu quero cadastrar poder cadastrar vários usuários, só que eles não podem repetir os dados.
##Hoje o sistema está permitindo que cadastre várias pessoas ao mesmo tempo.
###Não pode permitir que o cpf se repita.
###Ao cadastrar o cpf, tem que efetuar uma validação para saber o mesmo é valido, não permitindo que isso repita.
###Não pode permitir que o rg se repita.
###Ao cadastrar o rg, tem que efetuar uma validação para saber o mesmo é valido, não permitindo que isso repita.
###Não pode permitir que o email se repita.
###Ao cadastrar o email, tem que efetuar uma validação para saber o mesmo é valido, não permitindo que isso repita.
###Criar uma api, onde eu permita ativar meu usuário através de email ou sms
###Não pode permitir que quaisquer usuários vejam os dados de outros usuários, a não ser que seja admin, caso seja user ele pode visualizar.
###Dentro da pasta Login, raiz, existe um arquivo inicio.html, onde no inicio eu veja os dados de todos os usuários, caso eu seja admin, senão apenas o meu dado.
###Dentro da pasta Login, raiz, existe um arquivo cadastro.html, onde eu possa cadastrar os usuários e não se repita e bloquei o botão caso tente novamente.
###Dentro da pasta Login, raiz, existe um arquivo index.html, onde eu possa inserir o usuario e senha e ele retorna o token e devo salvar nos cookies no local storage caso não tenha permissão. Ao logar ele indicar por email ou sms que houve um login! Fluxo desse desafio na parte n3 é, Cadastro -> Login -> Inicio, despois de cadastrado Login -> Inicio.

