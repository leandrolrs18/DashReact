import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Novo Cliente</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nome</label>
          <input type="text" placeholder="joao" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="joao@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Senha</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Cidade</label>
          <input type="text" placeholder="Natal | RN" />
        </div>
        <div className="newUserItem">
          <label>Gênero</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Masculino</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Feminino</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Outro</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Ativo</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <button className="newUserButton">Criar</button>
      </form>
    </div>
  );
}
