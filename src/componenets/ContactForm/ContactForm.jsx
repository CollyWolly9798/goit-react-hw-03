import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

export default function ContactForm({ addContact }) {
  const initialValues = { name: '', number: '' };
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string()
      .required('Required')
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik validationSchema={FeedbackSchema} initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type='text' name='name' id={nameFieldId} />
        <ErrorMessage name='name' component='span' />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type='text' name='number' id={numberFieldId} />
        <ErrorMessage name='number' component='span' />
        <button type='submit'>Add contact</button>
      </Form>
    </Formik>
  );
}
