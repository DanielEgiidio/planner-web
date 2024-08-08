<h1 align="center">
  Plann.er
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/danielegiidio/planner_backend">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/danielegiidio/planner_backend" />

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/danielegiidio/planner_backend">
  
  <a href="https://github.com/danielegiidio/planner_backend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danielegiidio/planner_backend">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">


</p>

<p align="center" >
  <img src="https://i.ibb.co/4Yxy26c/Captura-de-tela-2024-08-08-100223.png" alt="Capa do projeto"  />
</p>


## 💻 About

Plann.er é uma aplicação de planejamento de viagens que permite criar e gerenciar planos de viagem de forma colaborativa. Com Plann.er, você pode:

- Montar planos de viagens com amigos.
- Registrar atividades e eventos importantes.
- Adicionar links úteis e recursos sobre a viagem.


## Trip

Aqui o usuário passará por todo um processo para a criação da viagem, e como ele está criando a viagem ele será elencando como owner(dono) da viagem;

<p align="center" >
	<img src="https://i.ibb.co/HBg4m3N/Captura-de-tela-2024-08-08-100540.png" alt="criação da trip">
</p>
<p align="center" >
<img src="https://i.ibb.co/NYDdHQS/Captura-de-tela-2024-08-08-100550.png" alt="confirmação da trip">
</p>

após confirmar a viagem o usuário será levado para a pagina de detalhes da viagem.



## Trip Details
Aqui o usuário estará nos detalhes da viagem que ele está seja ele o owner(dono) ou participante da viagem, ele poderá visualizar todas as atividades de cada dia da viagem, os links disponibilizados pelo owner, e os convidados.

<p align="center" >
	<img src="https://i.ibb.co/HdXPy1x/Captura-de-tela-2024-08-08-160624.png" alt="criação da trip">
</p>


## ⚙ Setup

A versão live dessa aplicação serve apenas ao carater de visualização da estrutura, pois para algumas funções se faz necessário a conexão ao backend e ao banco de dados e como ambos se fazm com node e sqlite, se fazem por meio local, então para você ter total acesso as funcionalidades citadas você precisa primeiro do  <a href="https://github.com/DanielEgiidio/planner_backend">backend</a>, siga os passos para setar o backend no proprio repositório e depois baixe esse repositório após instalar suas dependências, sete as variaveis de ambiente(.env) que é basicamente a conexão ao backend;
```bash
VITE_BASE_URL=http://localhost:3333
```
Caso você esteja usando outra porta no backend, adapte no arquivo .env.

## 🛠 Technologies

As seguintes principais ferramentas foram usadas na construção do projeto:

- **[TypeScript](https://www.typescriptlang.org/)**
- **[React](https://react.dev/)**
- **[Vite](https://vitejs.dev/guide/)**
- **[Axios](https://axios-http.com/ptbr/docs/intro)**
- **[Tailwind](https://tailwindcss.com/)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo [package.json](./package.json)


## 📝 License

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações

