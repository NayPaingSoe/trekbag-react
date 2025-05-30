import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
// import ItemContextProvider from "../contexts/ItemsContextProvider";
function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        {/* <ItemContextProvider> */}
          <Header />
          <Sidebar />
          <ItemList />
        {/* </ItemContextProvider> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
