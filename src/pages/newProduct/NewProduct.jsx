import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Novo Serviço</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Imagem</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Nome Serviço</label>
          <input type="text" placeholder="Crédito..." />
        </div>
        <div className="addProductItem">
          <label>Mês</label>
          <input type="text" placeholder="Jan" />
        </div>
        <div className="addProductItem">
          <label>Ativo</label>
          <select name="active" id="active">
            <option value="sim">Yes</option>
            <option value="não">No</option>
          </select>
        </div>
        <button className="addProductButton">Criar</button>
      </form>
    </div>
  );
}
