import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Serviços</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">10</span>
          
        </div>
        <span className="featuredSub">Quantidade de Serviços prestados esse ano</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Valor </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 50.000</span>
          
        </div>
        <span className="featuredSub">Valor total ganho dos serviços</span>
      </div>
    </div>
  );
}
