import React, { Fragment } from "react";
import Employees from "./Employees";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };

  const handleDElete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);
    Employees.splice(index, 1);
    history("/");
  };

  return (
    <div>
      <Fragment>
        <div style={{ marhin: "10rem" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Employees && Employees.length > 0
                ? Employees.map((item) => {
                    return (
                      <tr>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>
                          <Link to={"/edit"}>
                            <Button
                              onClick={() =>
                                handleEdit(item.id, item.Name, item.Age)
                              }
                              variant="primary"
                            >
                              Edit
                            </Button>{" "}
                          </Link>

                          <Button
                            onClick={() => handleDElete(item.id)}
                            variant="primary"
                          >
                            DELETE
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : "No Data Available"}
            </tbody>
          </Table>
          <br></br>
          <Link className="create-button" to="/create">
            <Button variant="success">Create</Button>
          </Link>
        </div>
      </Fragment>
    </div>
  );
}

export default Home;
