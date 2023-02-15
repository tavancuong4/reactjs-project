import React from "react";
// import "./Customer.scss";

const Detail = () => {
  return (
    <div className="contain-container">
      {/* <div>Hello Detail</div>
      <div className="navbar">
        <nav>
          <ul className="topnav">
            {props.courses.map((course, index) => (
              <li key={index}>
                <NavLink
                  to={"/card/" + id + "/" + course.type}
                  className="link"
                >
                  <FaWindows className="icon" />
                  {course.type}
                </NavLink>
              </li>
            ))}

          </ul>
        </nav>
        <Outlet />
      </div> */}

      {/* <Routes>
        <Route path="/card/:id" element={<Detail />} />
        <Route path="/card/:id/CardDetail" element={<CustomerDetails />} />
        <Route path="/card/:id/ListDetail" element={<CustomerOrder />} />
        <Route path="/list/:id/:course" element={<ListView />} />

        <Route path="/news/:id" element={<NewCustomer />} />
      </Routes> */}
    </div>
  );
};

export default Detail;
