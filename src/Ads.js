import "./Ads.css";
import React, { useState, useContext } from "react";
import {Data_contex} from './Data_contex'
const Ads = (props) => {
  let [product,set_product]  = useContext(Data_contex)
  let [ename, set_ename] = useState("");
  let [img, set_img] = useState();
  
  function dell_item(ind) {
    product.splice(ind, 1);
    set_product([...product]);
  }

  function edit_item(ind) {
    URL.createObjectURL(img);
    var reader = new FileReader();
    reader.addEventListener("load", () => {
      var url = reader.result;
      product[ind].img = url;
      set_product([...product]);
      product[ind].name = ename;
    });
    reader.readAsDataURL(img);
  }
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          All Categories
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button
            onClick={(ev) => {
              props.setSearch("car");
            }}
            className="dropdown-item btn"
          >
            car
          </button>
          <button onClick={() => {props.setSearch("Skin");}}className="dropdown-item btn">hello</button>
          <button
            onClick={() => {
              props.setSearch("Mobile");
            }}
            className="dropdown-item btn"
          >
            Mobiles
          </button>
          <button
            onClick={() => {
              props.setSearch("Grocory");
            }}
            className="dropdown-item btn"
          >
            Grocory
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {product
          .filter((ad) => {
            return ad.name.includes(props.search);
          })
          .map((obj, ind) => {
            return (
              <div>
                <div className="card " style={{ width: "18rem" }}>
                  <img src={obj.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{obj.name}</h5>
                    <p className="card-text">{obj.description}</p>

                    <>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Edit
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Select a new pic
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="form-group">
                                  <input
                                    ref={img}
                                    onChange={(ev) => {
                                      set_img(ev.target.files[0]);
                                    }}
                                    type="file"
                                    placeholder="Pic here"
                                  ></input>
                                </div>
                              </form>
                            </div>
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Enter the Name
                              </h5>
                            </div>
                            <div className="modal-body">
                              <div className="input-group mb-3">
                                <input
                                  value={ename}
                                  onChange={(e) => {
                                    set_ename(e.target.value);
                                  }}
                                  type="text"
                                  className="form-control"
                                  placeholder="Username"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                onClick={() => {
                                  edit_item(ind);
                                }}
                                type="button"
                                data-dismiss="modal"
                                className="btn btn-primary"
                              >
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                    <button
                      onClick={() => {
                        dell_item(ind);
                      }}
                      style={{ marginLeft: "20px" }}
        
                      className="btn btn-primary"
                    >
                      Dell
                    </button>

                    <button
                      
                      style={{ marginLeft: "10px" }}
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Ads;
