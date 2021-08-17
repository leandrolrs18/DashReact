import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Serviço</h1>
        
      </div>
    
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Nome do Serviço</label>
                  <input type="text" placeholder="Crédito..." />
                  <label>Mês </label>
                  <input type="text" placeholder="jan" />
                  <label>Ativo</label>
                  <select name="active" id="active">
                      <option value="yes">Sim</option>
                      <option value="no">Não</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Atualizar</button>
              </div>
          </form>
      </div>
    </div>
  );
}
