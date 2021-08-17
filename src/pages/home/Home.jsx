import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";


export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Quantidade de serviços ao longo do ano de 2021" grid dataKey="Quantidade"/>
      <div className="homeWidgets">
        <WidgetSm/>
      </div>
    </div>
  );
}
