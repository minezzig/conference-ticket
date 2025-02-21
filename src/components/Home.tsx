import React, { useState } from 'react'
import InputField from "./InputField";
import UploadImage from "./UploadImage"
import { useNavigate } from 'react-router';


function Home() {

  const [formData, setFormData] = useState({ name: "", email: "", github: "" });
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const navigate = useNavigate();

  // save image
  const handleSaveImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    setImageError(false)
    // check file size
    if (file) {
      const maxSize = 500 * 1024;

      if (file.size > maxSize) {
        setImageError(true);
        return;
      }
    }
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  // save any input to state object
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };

  // submit data to generate ticket
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    const error = validateForm();
    if (error) {
      setError(true);
      return;
    }

    navigate("/ticket", {state: {formData, image}});
  };

  // form validation
  const validateForm = () => {
    const { name, email, github } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !github) {
      return true;
    }

    if (!emailRegex.test(email)) {
      setFormData((prev) => ({ ...prev, email: "" }));
      return true;
    }

    return false;
  };

  return (
    <><div>
    <div className="text-neutral1 mt-5 text-center text-5xl md:text-5xl">
      Your Journey to Coding Conf 2025 Starts Here!
    </div>
    <div className="text-neutral3 m-5 text-center text-lg">
      Secure your spot at next year's biggest coding conference.
    </div>
  </div>
  <div className="z-20 m-auto w-full max-w-[600px] px-10">
    <form onSubmit={handleSubmit}>
      <UploadImage
        handleSaveImage={handleSaveImage}
        image={image}
        setImage={setImage}
        imageError={imageError}
      />
      <InputField
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={error}
      />
      <InputField
        label="Email Address"
        name="email"
        value={formData.email}
        placeholder="example@email.com"
        onChange={handleChange}
        error={error}
      />
      <InputField
        label="GitHub Username"
        name="github"
        value={formData.github}
        placeholder="@yourusername"
        onChange={handleChange}
        error={error}
      />
      <div>
        <button
          type="submit"
          className="bg-orange1 hover:bg-orange2 mt-3 w-full rounded-lg p-3 text-lg font-bold"
        >
          Generate My Ticket
        </button>
      </div>
    </form>
  </div></>
  )
}

export default Home