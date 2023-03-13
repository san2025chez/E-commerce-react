import React from 'react';
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.scss";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,

  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@material-ui/core";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}
export default function Footer(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
  
    <div className="footer">
      <section className="footer__suscription">
        <p className="footer__suscription__heading">
          Unite a Minimercadito Mabel y recibí nuestras mejores Ofertas
        </p>
        <p className="footer__suscription__text">
          Podes desuscribirte cuando quieras
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Tu Email"
              className="footer__input"
            />
            <Button path="/" content="Suscribite" className="button__footer" />
            {/* Hacer un success suscribe container */}
          </form>
        </div>
      </section>
      <div className="footer__link ">
        <div className="footer__link__wrapper">
          <div className="footer__link__items">
            <h4 className="footer__link__titulo">Comprar</h4>
            <NavLink to="/login/" className="footer__link__links">
              Inicia Sesión
            </NavLink>
            <NavLink to="/" className="footer__link__links">
              Productos
            </NavLink>
            <NavLink to="/categories/" className="footer__link__links">
              Categorías
            </NavLink>
          </div>
        </div>
        <div className="footer__link__wrapper">
          <div className="footer__link__items">
            <h4 className="footer__link__titulo">Redes Sociales</h4>
            <a
              href="https://www.instagram.com/servicejeans/"
              target="blank"
              className="footer__link__icons">
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/ServiceJeans"
              target="blank"
              className="footer__link__icons">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyrights">
          <p className="footer__copyrights__text">Minimercadito Mabel</p>
          <i className="far fa-copyright footer__copyrights__icon"></i>
          <p className="footer__copyrights__text">2021</p>
        </div>
        <div className="footer__copyrights">
          <p className="footer__bottom__developer">Created by Ana Sanchez</p>
          <a href="https://github.com/fedetanco22" target="blank">
            <GitHubIcon disabled className="footer__bottom__icon" />
          </a>
        </div>
      </div>
    </div>
   
  );
}
