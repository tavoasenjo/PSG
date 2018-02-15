/* eslint-disable import/first */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Router, Route, Switch, Link } from "react-router-dom";

// import components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();

const Wrapper = styled.section`
  width: 100%;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  render() {
    const { products } = this.state;

    return (
      <Router history={history}>
        <ScrollToTop>
          <div className="wrapper">
            <Header />

            {/*<Footer />*/}
            <Route exact path="/" render={() => <Home products={products} />} />
            <Route path="/product/:name" component={SingleProduct} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={ContactForm} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    fetch("/api/products")
      .then(res => res.json())
      .then(products => this.setState({ products }))
      .catch(err => console.log(err));
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
