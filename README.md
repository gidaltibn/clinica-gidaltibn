# Clínica Gidalti BN

## Sobre o Projeto

Este projeto é o MVP do módulo 3 da pós-graduação em desenvolvimento full stack da **PUC do Rio de Janeiro**. O objetivo é criar uma aplicação funcional com front-end em React para simular o sistema de agendamento e gerenciamento de consultas de uma clínica fictícia.

A aplicação inclui funcionalidades como:

- Agendamento de consultas.
- Exibição de agendamentos filtrados por usuário.
- Formulário de contato com validação de dados.

---

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
📦 src
├── assets
│   ├── colors.js                 # Paleta de cores da aplicação.
│   ├── fisio-button.png          # Imagem de botão de Fisioterapia.
│   ├── fono-button.png           # Imagem de botão de Fonoaudiologia.
│   ├── logo-clinica.png          # Logo da clínica.
│   ├── neuro-button.png          # Imagem de botão de Neurologia.
│   └── ped-button.png            # Imagem de botão de Pediatria.
│
├── components
│   ├── barraSuperior             # Componente do cabeçalho.
│   │   └── index.js
│   ├── botao                     # Botões reutilizáveis.
│   │   └── index.js
│   ├── campoComboBox             # ComboBox para selecionar especialidades.
│   │   └── index.js
│   ├── campoData                 # Campo de entrada para datas.
│   │   └── index.js
│   ├── campoHorario              # Campo de entrada para horários.
│   │   └── index.js
│   ├── campoTelefone             # Campo de entrada para números de telefone com máscara.
│   │   └── index.js
│   ├── campoTexto                # Campo de entrada de texto simples.
│   │   └── index.js
│   ├── campoTextoMultilinhas     # Campo para mensagens de múltiplas linhas.
│   │   └── index.js
│   ├── card                      # Cartões de exibição de especialidades.
│   │   └── index.js
│   ├── exibeServico              # Componente para exibir especialidades com detalhes.
│   │   └── index.js
│   └── rodape                    # Rodapé do site.
│       └── index.js
│
├── datas
│   └── DadosEspecialidades.js    # Dados estáticos das especialidades médicas.
│
├── pages
│   ├── agendamentos              # Tela de exibição de agendamentos.
│   │   └── index.js
│   ├── agendar                   # Tela de agendamento de consultas.
│   │   └── index.js
│   ├── contato                   # Tela de contato com a clínica.
│   │   └── index.js
│   ├── home                      # Tela inicial da aplicação.
│   │   └── index.js
│   ├── login                     # Tela de login de usuários.
│   │   └── index.js
│   └── servicos                  # Tela de serviços oferecidos.
│       └── index.js
│
├── routes
│   └── index.js                  # Configuração das rotas da aplicação.
│
├── App.js                        # Componente principal da aplicação.
├── App.css                       # Estilos globais da aplicação.
└── index.js                      # Ponto de entrada do React.
```

---

## Funcionalidades

### 1. Tela de Agendamento

- Permite o preenchimento dos campos de agendamento (nome, telefone, email, especialidade, data e horário).
- Valida os dados antes do envio.
- Salva os dados no Local Storage com o status inicial "Em análise".

### 2. Tela de Agendamentos

- Exibe os agendamentos filtrados por email do usuário.
- Os dados são carregados do Local Storage.
- Mostra o status de cada agendamento com cores indicativas (Aprovado, Negado, Em Análise, Realizado).

### 3. Tela de Login

- Permite o login utilizando nome e email.
- Valida se o email possui agendamentos salvos e redireciona para a tela de agendamentos.

### 4. Tela de Contato

- Formulário para envio de mensagens à clínica.
- Mostra um alerta de sucesso ao enviar a mensagem e recarrega a página.

---

## Tecnologias Utilizadas

- **React.js**: Biblioteca principal para construção da interface.
- **React Router**: Gerenciamento de rotas da aplicação.
- **Local Storage**: Armazenamento de dados local para simulação de persistência.

---

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/gidaltibn/clinica-gidaltibn.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd clinica-gidaltibn
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o projeto:

   ```bash
   npm start
   ```

5. Acesse a aplicação no navegador em: [http://localhost:3000](http://localhost:3000)

---

## Protótipo no Figma

O protótipo detalhado da aplicação está disponível no link abaixo:

[Protótipo no Figma](<https://www.figma.com/design/Vx3vbhJldnFuXP0cf9qIuA/Cl%C3%ADnica-Gidalti-BN-(Community)?node-id=0-1&t=d18ysPPwd2RLGebG-1>)

---

## Observação Importante

Este projeto foi desenvolvido como parte do módulo 3 da pós-graduação em Desenvolvimento Full Stack da **PUC-Rio**. É um MVP (Produto Mínimo Viável) focado no aprendizado de React, componentização, e gerenciamento de estados.

---

## Autor

Gidalti Brito Nascimento
