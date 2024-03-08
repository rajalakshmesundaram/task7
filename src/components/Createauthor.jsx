import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 export const Createauthor = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await axios.post(
        "https://65e86de24bb72f0a9c4f4e5a.mockapi.io/BookAuthorDetail",
        values
      );
      navigate("/author");
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  return (
    <Formik
      initialValues={{
       
        authorName: "",
        DOB: "",
        ShortBiography: ""
      }}
      validationSchema={Yup.object({
       
        authorName: Yup.string().required("Author Name is required"),
        DOB: Yup.string().required("Date of Birth is required"),
        ShortBiography: Yup.string().required("Short Biography is required")
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="container">
         
          <div className="mb-3 mr-3 row">
            <label className="col-sm-2 col-form-label">Author Name:</label>
            <div className="col-lg-4">
              <Field type="text" name="authorName" className="form-control" />
              <ErrorMessage name="authorName" component="div" className="text-danger" />
            </div>
          </div>
          <div className="mb-3 mr-3 row">
            <label className="col-sm-2 col-form-label">DOB:</label>
            <div className="col-lg-4">
              <Field type="text" name="DOB" className="form-control" />
              <ErrorMessage name="DOB" component="div" className="text-danger" />
            </div>
          </div>
          <div className="mb-3 mr-3 row">
            <label className="col-sm-2 col-form-label">Short Biography:</label>
            <div className="col-lg-4">
              <Field type="text" name="shortBiography" className="form-control" />
              <ErrorMessage name="shortBiography" component="div" className="text-danger" />
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

export default Createauthor;
