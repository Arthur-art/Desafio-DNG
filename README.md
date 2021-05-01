# Desafío DNG

# Entregas:
• Código Fonte em um repositório Git.
• Enviar link do repositório para o e-mail “xxxxxxxx@xxxxxxx.com.br” com o assunto “Processo Seletivo – Seu nome”.

Especificação da Tecnologia: Precisamos gerar um sistema Web utilizando ReactJS que realize as persistências das informações em alguma tecnologia de Banco de Dados ou Autenticação.

Diferenciais: Persistencia dos dados utilizando Firebase.

# Desafio:
# 1. Crie um sistema chamado “Desafio DNG” com as seguintes funcionalidades:

# a. O ícone do aplicativo deverá ser a logo da DNG

# b. Tela Principal
I. Logo da DNG
II. Abaixo da logo o seguinte texto: “Bem vindo ao desafio da DNG”
III. Abaixo do texto dois botões
1. “Acessar o sistema”: Ao ser clicado abrir tela de login
2. “Cadastrar-se”: Ao ser clicado abrir a tela de cadastro

# c. Tela de Cadastro
I. Texto: “Você está no cadastro”
II. Botão “Voltar”: Ao ser clicado volta para a tela principal
III. Os seguintes campos devem ser informados e validados para o cadastro do usuário:
    • Nome
    • Endereço
    • Foto de perfil
    • E-mail
    • Senha
    • Confirmação de senha
	iv. Botão “Salvar” que ao ser clicado deve validar se os campos estão corretamente preenchidos. Se não estiverem, informar onde existe o erro. Caso estejam bem preenchidos, exibir a mensagem de sucesso e voltar para a tela de principal.

# d. Tela de Login
I. Texto: “Você está no login”
II. Botão “Voltar”: Ao ser clicado volta para a tela principal
III. Campo para informar o e-mail para login (é preciso conferir se o e-mail é válido)
IV. Campo para informar a senha (deve validar se tem pelo menos 6 caracteres)
V. Botão “Entrar” deve redirecionar para a tela Dashboard.

# e. Tela Dashboard
I. Deve conter um perfil pessoal do executante da prova, com layout de livre escolha;
II. Deve conter um botão de logoff, que redirecione para o login e encerre a sessão do usuário.