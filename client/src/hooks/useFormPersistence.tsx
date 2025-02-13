import { useEffect, useState } from "react";

export const useFormPersistence = () => {
  const [formData, setFormData] = useState(() => {
    // Load data from localStorage on mount
    const savedFormData = localStorage.getItem("formData");
    return savedFormData ? JSON.parse(savedFormData) : { 
      name: "", email: "", about: "", image: "" 
    };
  });
  
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    about: "",
    image: "",
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return {
    formData,
    errorMessage,
    setErrorMessage,
    setFormData,
    updateFormData,
  };
};
