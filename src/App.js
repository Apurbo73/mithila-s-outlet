import React from "react";

import "./App.css";
import Home from "./pages/Home";
import { useGetGroceryQuery } from "./features/apiSlice";
import { MdHighQuality } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { BsRecycle } from "react-icons/bs";

function App() {
  const { data: allData, isLoading, isError, error } = useGetGroceryQuery();

  return (
    <div className="App">
      {allData && <Home allData={allData} />}

      {/* <!-- services part --> */}
      <div id="services" className="container mt-5">
        <div className="row mt-5 mb-2">
          <div className="col-md-12">
            <div className="text-center pb-3">
              <h2>We Ensure</h2>
              <p />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- services part options --> */}

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-center text-white bg-dark pb-2 mt-3">
              <div className="card-body">
                <MdHighQuality style={{ fontSize: 40 }} />
                <h3 className="cart-title">The Best Quality</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti autem repudiandae distinctio sit? Temporibus ratione
                  totam perspiciatis minima quae veritatis.
                </p>
                <div className="btn btn-warning">Learn more..</div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 mt-3">
            <div className="card text-center text-dark bg-warning pb-2 ">
              <div className="card-body">
                <GrStatusGood style={{ fontSize: 40 }} />
                <h3 className="cart-title">Sustainability</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti autem repudiandae distinctio sit? Temporibus ratione
                  totam perspiciatis minima quae veritatis.
                </p>
                <div className="btn btn-dark">Learn more..</div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 mt-3">
            <div className="card text-center text-white bg-primary pb-2">
              <div className="card-body">
                <BsRecycle style={{ fontSize: 40 }} />

                <h3 className="cart-title">Integrety</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti autem repudiandae distinctio sit? Temporibus ratione
                  totam perspiciatis minima quae veritatis.
                </p>
                <div className="btn btn-warning">Learn more..</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
