import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/pages/Contact.scss';

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Here you would typically send the form data to your backend
    console.log(values);
    alert('Thank you for your message. We will get back to you soon!');
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in Touch with Our Team</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>Address</h3>
            <p>123 Business Street</p>
            <p>Silicon Valley, CA 94025</p>
          </div>
          <div className="info-card">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-card">
            <h3>Email</h3>
            <p>info@vsynergize.com</p>
          </div>
        </div>

        <div className="contact-form">
          <Formik
            initialValues={{ name: '', email: '', phone: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field type="text" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone (optional)</label>
                  <Field type="tel" name="phone" />
                  <ErrorMessage name="phone" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <Field as="textarea" name="message" />
                  <ErrorMessage name="message" component="div" className="error" />
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default Contact;
