# NodeJs

Uma plataforma para cronstuções de aplicações robustas no backend utilizando o Javascript como linguagem de programação.

# Npm

Gerenciador de dependências de javascript
Identifica dependências a partir do package.json
Executa scripts através de tags que podemos criar
Para iniciar um projeto você pode execuar o npm init -y ( Caso não queira setar as configurações básicas)

# Ciclo de vida do Javascript / Máquina virtual

Javascript é convertido em  C++ Para ser executado pela máquina

Qualquer operação bloqueante é executada pelo processador, quando é resolvida ele envia um callback
e devolve pra quem chamou..

Single thread - Para manipular o event loop, mas quem trabalha com as threds é o sistema operacional .

Event loop ->  Recebe uma função para executar alguma ação por exemplo listar usuários -> registerCallBack ( quandoTerminarMeChama ),
 quando terminar ele chama aquela função de volta, callback: quandoTerminarMeChama ( Usuários )  passando os usuários que ele pegou 
 E volta para função de listarUsuários

# Problemas de  JS

Toda função que depende de um serviço externo, será executado em BACKGROUND - Sempre chamará o Event loop.
A forma com que seu código é escrito é diferente da maneira que é executado por conta da programação assincrona
Importante sempre manter a ordem da execução para não ter esses problemas.





