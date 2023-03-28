import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContext2 } from "./context/CartCntext2";
import { Cart } from "./components/Cart/Cart";
import NavBar from "./components/NavBar1/NavBar";
import WhatsApp from "./components/WhatsApp/WhatsApp";
import Footer from "./components/Footer/Footer";
import { CheckoutPage } from "./components/CartCounter/CheckoutPage";
import Login from "./components/Login/login";
import { ThemeProvider } from "@material-ui/core/styles";
import "@fontsource/roboto";
import { green, orange } from "@material-ui/core/colors";
import { StyledEngineProvider } from "@mui/material/styles";
import Carousel1 from "./components/carousel/Carousel1"

function App() {
  return (
    <div>
      <CartContext2>
        <BrowserRouter>
          <StyledEngineProvider injectFirst>
            <NavBar></NavBar>{" "}
          </StyledEngineProvider>
          <Routes>
            <Route path="/" element={<Carousel1/>} />

            <Route exact path="/categoria/:Id" element={<Home />} />

            <Route
              exact
              path="/detalle/:id"
              element={<ItemDetailContainer />}
            />

            <Route path="/cart" element={ <Cart />}/>
            <Route path="/login" element={   <Login />}/>
            
            <Route path="/checkout-page" element={   <CheckoutPage />}/>
          
          </Routes>

     {/*      <WhatsApp /> */}
          <ThemeProvider>
            {/* <Paper>
        <Container> */}
            <Footer />
            {/*     </Container>
      </Paper> */}
          </ThemeProvider>
        </BrowserRouter>
      </CartContext2>
    </div>
  );
}

export default App;
