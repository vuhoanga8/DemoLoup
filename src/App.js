import React from "react";
import { Provider } from "react-redux";
// import { SnackbarProvider } from "notistack";
import { configureStore } from "./redux/store/index";

import Routes from "./Routes/Routes";
import Header from "./components/common/header";
import Footer from "./components/common/footer";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes />
      <Footer />
    </Provider>
  );
};

export default App;
