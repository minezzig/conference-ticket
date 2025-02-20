interface TicketProps {
  data: { name: string; email: string; github: string };
  image: string | null;
}

function Ticket({ data, image }: TicketProps) {
  data.name = "Gregory Minezzi";
  data.email = "gregoryminezzi@gmail.com";
  data.github = "minezzig";
  return (
    <div className="flex flex-col items-center p-10">
      <div className="mb-10">
        <div className="text-neutral1 text-center text-4xl">
          Congrats,{" "}
          <span className="bg-[linear-gradient(to_right,hsl(7,86%,67%),hsl(0,0%,100%),hsl(7,86%,67%),hsl(0,0%,100%))] bg-clip-text text-4xl font-bold text-transparent">
            {data.name}
          </span>
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
        </div>
        <img src="../../public/images/pattern-ticket.svg" />
      </div>
    </div>
  );
}

export default Ticket;
