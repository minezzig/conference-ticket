import { useState } from "react";
import InputField from "./components/InputField";
import UploadImage from "./components/UploadImage";
import Ticket from "./components/Ticket";

function App() {
  const [formData, setFormData] = useState({name: "", email: "", github: ""});
  const [isGenerated, setIsGenerated] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleSaveImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); 
      setImage(imageUrl)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    console.log(formData)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerated(true)
  };

  return (
    <div className="flex flex-col items-center pt-10 bg-[url(./images/background-mobile.png)] md:bg-[url(./images/background-tablet.png)] lg:bg-[url(./images/background-desktop.png)] w-full h-screen bg-cover bg-no-repeat ">
      <img src="/images/pattern-squiggly-line-top.svg" alt="" className="absolute top-0 right-0 h-20 md:h-auto"/>

        <div className="flex flex-col items-center justify-center text-white">
          <img src="./images/logo-full.svg" alt="logo" />
        </div>
      {!isGenerated ? (<>
          <div>
            <div className="text-white mt-5 text-4xl md:text-5xl max-w-[700px] text-center">
              Your Journey to Coding Conf 2025 Starts Here!
            </div>
            <div className="text-lg text-gray-500 m-5">
              Secure your spot at next year's biggest coding conference.
            </div>
          </div>
          <div>
          </div>
        <div className="max-w-[600px] z-20">
          <form onSubmit={handleSubmit}>
            <UploadImage handleSaveImage={handleSaveImage} image={image}/>
            <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange}/>
            <InputField label="Email Address" name="email" value={formData.email} placeholder="example@email.com" onChange={handleChange}/>
            <InputField label="GitHub Username" name="github" value={formData.github} placeholder="@yourusername" onChange={handleChange}/>
            <div>
              <button
                type="submit"
                className="bg-orange-400 w-full p-3 rounded-lg mt-3"
              >
                Generate My Ticket
              </button>
            </div>
          </form>
      </div>
      </>) : <Ticket data={formData}/>}
          <img src="/images/pattern-squiggly-line-bottom-mobile-tablet.svg" alt="" className=" md:hidden block absolute bottom-0"/>    
          <img src="/images/pattern-squiggly-line-bottom-desktop.svg" alt="" className="hidden md:block absolute bottom-0 left-0"/>
    </div>
  );
}

export default App;
