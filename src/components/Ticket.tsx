import Gradient from "./Gradient";

interface TicketProps {
  data: { name: string; email: string; github: string };
  image: string | null;
}

function Ticket({ data, image }: TicketProps) {

  return (
    <div className="flex flex-col items-center p-10">
      <div className="mb-10">
        <div className="text-neutral1 text-center text-4xl">
          Congrats,{" "}
          <Gradient text={data.name}/>
          ! Your ticket is ready.
        </div>
        <div className="text-neutral3 text-center text-lg">
          We've emailed your ticet to{" "}
          <span className="text-orange1">{data.email}</span> and will send
          updates in the run up to the vent
        </div>
      </div>
      <div className="relative">
        <div className="text-neutral1 absolute flex h-full flex-col justify-around gap-5 p-5">
          <div className="flex items-start gap-3">
            <img src="../../public/images/logo-mark.svg" />
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
        <img src="../../public/images/pattern-ticket.svg" />
      </div>
    </div>
  );
}

export default Ticket;
