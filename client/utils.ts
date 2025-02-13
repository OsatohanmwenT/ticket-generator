export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

export const validateFormData = (formData: {
  name: string;
  email: string;
  about: string;
  image: string;
}): {
  isValid: boolean;
  errors: { name: string; email: string; about: string; image: string };
} => {
  let isValid = true;
  const errors = { name: "", email: "", about: "", image: "" };

  if (formData.name.trim() === "") {
    errors.name = "Name is required";
    isValid = false;
  }
  if (formData.email.trim() === "") {
    errors.email = "Email is required";
    isValid = false;
  } else if (!validateEmail(formData.email)) {
    errors.email = "Email is invalid";
    isValid = false;
  }
  if (formData.about.trim() === "") {
    errors.about = "Description is required";
    isValid = false;
  }
  if (formData.image === "") {
    errors.image = "image is required";
    isValid = false;
  }
  return { isValid, errors };
};
