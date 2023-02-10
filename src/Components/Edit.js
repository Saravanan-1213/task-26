import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  let history = useNavigate();

  var index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = Employees[index];
    a.Name = name;
    a.Age = age;
    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setName(localStorage.getItem("Age"));
    setName(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Form className="gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            name={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          variant="warning"
        >
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
