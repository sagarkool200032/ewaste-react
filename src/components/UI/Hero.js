import { Link } from "react-router-dom";
import { Fragment } from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <Fragment>
      <header className={classes.hero}>
        <div class="container-fluid">
          <h1 class={classes.primaryTitle}>E-Waste Management System</h1>
        </div>
      </header>
      <section className={classes.flexContainer}>
        <div className={classes.flexItem}>
          <Link to="/buy">
            <h1>BUY</h1>
          </Link>
        </div>
        <div className={classes.flexItem}>
          <Link to="/sell">
            <h1>SELL</h1>
          </Link>
        </div>
        <div className={classes.flexItem}>
          <Link to="/recycle">
            <h1>RECYCLE</h1>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
