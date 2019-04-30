import React from "react";
import { PromiseProvider } from "mongoose";
import './styles.css'

const Nav = props => 

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        (React) Google Book Search
      </a>
      <button type="button" class="btn btn-primary yeet" href="/saved">
 Saved Books <span class="badge badge-light">{props.numSave}</span>
</button>
    </nav>



export default Nav;
