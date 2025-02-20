import { useState } from "react";
import InputField from "./components/InputField";
import UploadImage from "./components/UploadImage";
import Ticket from "./components/Ticket";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", github: "" });
  const [isGenerated, setIsGenerated] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState(false);

  // save image
  const handleSaveImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
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

    const error = validateForm();
    if (error) {
      setError(true);
      return;
    }
    setError(false)
    setIsGenerated(true);
  };

  // form validation
  const validateForm = () => {
    const { name, email, github } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !github) {
      return true;
    }

    if (!emailRegex.test(email)) {
      setFormData(prev => ({...prev, email: ""}))
      return true;
    }

    return false;
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[url(./images/background-mobile.png)] bg-cover bg-no-repeat py-10 md:bg-[url(./images/background-tablet.png)] lg:bg-[url(./images/background-desktop.png)]">
      <img
        src="/images/pattern-squiggly-line-top.svg"
        alt="top squiggle"
        className="absolute top-0 right-0 h-20 md:h-auto"
      />

      <div className="text-neutral1 flex flex-col items-center justify-center">
        <img src="./images/logo-full.svg" alt="logo" />
      </div>
      {!isGenerated ? (
        <>
          <div>
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
          </div>
        </>
      ) : (
        <Ticket data={formData} image={image} />
      )}
      <img
        src="/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
        alt="mobile squiggle"
        className="fixed bottom-0 block md:hidden"
      />
      <img
        src="/images/pattern-squiggly-line-bottom-desktop.svg"
        alt="desktop squiggle"
        className="fixed bottom-0 left-0 hidden md:block"
      />
    </div>
  );
}

export default App;
