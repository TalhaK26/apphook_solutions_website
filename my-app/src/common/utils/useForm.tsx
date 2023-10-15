import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { notification } from "antd";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    if (Object.keys(values).length === 3) {
      // emailjs
      //   .send(
      //     "service_08fim0i",
      //     "template_3s9ayx7",
      //     values,
      //     "3KS0ER792K3_iXT18"
      //   )
      //   .then(
      //     (result: any) => {
      //       console.log(result.text);
      //     },
      //     (error: any) => {
      //       console.log(error.text);
      //     }
      //   );
      // setShouldSubmit(true);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues({});
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
