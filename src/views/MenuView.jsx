import Header from "../components/Common/Header/Header";
import ListProductClient from "../components/ListProductClient/ListProductClient";
import TabMenu from "../components/TabMenu/TabMenu";
import "primereact/resources/themes/lara-light-cyan/theme.css";
const MenuView = () => {
  return (
    <>
      <div className="container">
        <ListProductClient />
      </div>
    </>
  );
};

export default MenuView;
