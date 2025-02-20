import { useLocation } from "react-router";
import Gradient from "./Gradient";

function Ticket() {
  const location = useLocation();
  const {formData: data, image} = location.state

  return (
    <div className="flex flex-col items-center p-10 z-100">
      <div className="mb-10 max-w-[700px] flex flex-col items-center">
        <div className="text-neutral1 text-center text-4xl  md:text-5xl">
          Congrats,{" "}
          <Gradient text={data.name}/>
          ! Your ticket is ready.
        </div>
        <div className="text-neutral3 text-center text-lg mt-10 max-w-[400px]">
          We've emailed your ticket to{" "}
          <span className="text-orange1">{data.email}</span> and will send
          updates in the run up to the vent
        </div>
      </div>
      <div className="relative">
        <div className="text-neutral1 absolute flex h-full flex-col justify-around gap-5 p-5">
          <div className="flex items-start gap-3">
            <img src="/images/logo-mark.svg" />
            <div>
              <div className="text-3xl">Coding Conf</div>
              <div className="text-neutral3">Jan 31, 2025 / Austin, TX</div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-14 w-14">
              {image && (
                <img
                  src={image}
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div>
              <div className="mb-1 text-2xl">{data.name}</div>
              <div className="text-neutral3 flex items-center gap-1">
                <img src="/images/icon-github.svg" alt="github icon" />@
                {data.github}
              </div>
            </div>
          </div>
         
        </div> <div className="absolute rotate-90 right-2 text-neutral3 text-xl top-1/2 -translate-y-1/2">#01609</div>
        <img src="/images/pattern-ticket.svg" />
      </div>
    </div>
  );
}

export default Ticket;
