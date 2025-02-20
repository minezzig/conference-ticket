import { useState } from "react";
import InputField from "./components/InputField";
import UploadImage from "./components/UploadImage";
import Ticket from "./components/Ticket";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", github: "" });
  const [isGenerated, setIsGenerated] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleSaveImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerated(true);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[url(./images/background-mobile.png)] bg-cover bg-no-repeat py-10 md:bg-[url(./images/background-tablet.png)] lg:bg-[url(./images/background-desktop.png)]">
      <img
        src="/images/pattern-squiggly-line-top.svg"
        alt=""
        className="absolute top-0 right-0 h-20 md:h-auto"
      />

      <div className="flex flex-col items-center justify-center text-neutral1">
        <img src="./images/logo-full.svg" alt="logo" />
      </div>
      {!isGenerated ? (
        <>
          <div>
            <div className="mt-5 max-w-[700px] text-center text-4xl text-neutral1 md:text-5xl">
              Your Journey to Coding Conf 2025 Starts Here!
            </div>
            <div className="m-5 text-center text-lg text-neutral3">
              Secure your spot at next year's biggest coding conference.
            </div>
          </div>
          <div></div>
          <div className="z-20 max-w-[600px]">
            <form onSubmit={handleSubmit}>
              <UploadImage handleSaveImage={handleSaveImage} image={image} setImage={setImage}/>
              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <InputField
                label="Email Address"
                name="email"
                value={formData.email}
                placeholder="example@email.com"
                onChange={handleChange}
              />
              <InputField
                label="GitHub Username"
                name="github"
                value={formData.github}
                placeholder="@yourusername"
                onChange={handleChange}
              />
              <div>
                <button
                  type="submit"
                  className="bg-orange1 hover:bg-orange2 mt-3 w-full rounded-lg p-3 font-bold text-lg"
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
        alt=""
        className="fixed bottom-0 block md:hidden"
      />
      <img
        src="/images/pattern-squiggly-line-bottom-desktop.svg"
        alt=""
        className="fixed bottom-0 left-0 hidden md:block"
      />
    </div>
  );
}

export default App;
