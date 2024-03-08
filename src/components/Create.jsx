import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 export const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await axios.post(
        "https://65e86de24bb72f0a9c4f4e5a.mockapi.io/BookAuthorDetail",
        values
      );
      navigate("/books");
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        ISBNnumber: "",
        publicationDate: ""
      }}
      validationSchema={Yup.object({
        title: Yup.string().required("Title is required"),
        author: Yup.string().required("Author is required"),
        ISBNnumber: Yup.string().required("ISBN Number is required"),
        publicationDate: Yup.string().required("Publication Date is required")
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="container">
          <div className="mb-3 mr-3 row">
            <label className="col-sm-2 col-form-label">Title:</label>
            <div className="col-lg-4">
              <Field type="text" name="title" className="form-control" />
              <ErrorMessage name="title" component="div" className="text-danger" />
            </div>
          </div>
          <div className="mb-3 mr-3 row">
            <label className="col-sm-2 col-form-label">Author:</label>
            <div className="col-lg-4">
              <Field type="text" name="author" className="form-control" />
              <ErrorMessage name="author" component="div" className="text-danger" />
            </div>
          </div>
          <div className="mb-3 mr-3 row">
            <label className="col-sm-2 col-form-label">ISBN Number:</label>
            <div className="col-lg-4">
              <Field type="text" name="ISBNnumber" className="form-control" />
              <ErrorMessage name="ISBNnumber" component="div" className="text-danger" />
            </div>
          </div>
          <div className="mb-3 mr-3 row">
            <label className="col-sm-2 col-form-label">Publication Date:</label>
            <div className="col-lg-4">
              <Field type="text" name="publicationDate" className="form-control" />
              <ErrorMessage name="publicationDate" component="div" className="text-danger" />
            </div>
          </div>
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </Form>
    </Formik>
  );
};

export default Create;
