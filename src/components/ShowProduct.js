import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  productSelectors,
  deleteProducts,
} from "../features/ProductSlice";
import { Link } from "react-router-dom";
import profile from "../assets/Profile.png";
import menuicon from "../assets/burger_line_list_menu_nav_navigation_option_icon_16.png";
import bellmenu from "../assets/bell_16.png";

function ShowProduct() {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="columns">
      <div className="column is-3  left__backround">
        <h5>SWAMBADIA</h5>
        <figure className="image is-64x64">
          <img
            className="is-rounded img__profile"
            src={profile}
            alt="profile"
          />
        </figure>
        <h5>Admin Swambadia</h5>

        <div className="left__backround">
          <aside class="menu">
            <p class="menu-label has-text-light">Dashboard</p>
            <ul class="menu-list">
              <li>
                <p className="has-text-light">components</p>
              </li>
            </ul>
            <p class="menu-label has-text-light">Administration</p>
            <p class="menu-label has-text-light">Books</p>
            <ul class="menu-list">
              <li>
                <p className="has-text-light">Extras</p>
              </li>
            </ul>
            <p class="menu-label has-text-light">Pages</p>
          </aside>
        </div>
      </div>
      <div className="colummn is-9 right__background right__listuser">
        <nav class="navbar is-transparent">
          <div
            class="navbar-burger"
            data-target="navbarExampleTransparentExample"
          ></div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="https://bulma.io/">
                <img src={menuicon} alt="menunav" />
              </a>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">
                    <img className="bellmenu" src={bellmenu} alt="bellmenu" />
                    <img
                      className="is-rounded bellmenu"
                      src={profile}
                      alt="profile"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="is-flex-direction-column right__background--nav">
          <h6>Dashboard / Home</h6>
        </div>

        <div className="box mt-5">
          <h2>List Users</h2>
          <Link to="add" className="button is-success ">
            Add New
          </Link>
          <table className="table is-narrow">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>
                    <p>{index + 1}</p>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.username}</td>
                  <td>{product.email}</td>
                  <td>{product.address.street}</td>
                  <td>{product.phone}</td>
                  <td>{product.website}</td>
                  <td>{product.company.name}</td>
                  {/* <td>
            <Link
              to={`edit/${product.id}`}
              className="button is-info is-small"
            >
              Edit
            </Link>
            <button
              onClick={() => dispatch(deleteProducts(product.id))}
              className="button is-danger is-small"
            >
              Delete
            </button>
          </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
