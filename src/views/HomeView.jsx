import BackgroundImage from "../components/HomeView/BackgroundImage";
import Logo from "../components/HomeView/Logo";
import NavigationButtons from "../components/HomeView/NavigationButtons";

const HomeView = () => {
  return (
    <div className="">
      <BackgroundImage>
        <Logo />
        <h1 className="text-danger font-weight-bold">Bienvenidos!</h1>
        <NavigationButtons />
      </BackgroundImage>
    </div>
  );
};
export default HomeView;
