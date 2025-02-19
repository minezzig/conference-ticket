interface TicketProps {
  data: { name: string; email: string; github: string };
}

function Ticket({ data }: TicketProps) {
  
   data.email = "g@gmail.com"
   data.github = "mygithub"
   data.name = "gregory"

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="mb-10">
        <div className="text-white text-4xl text-center">
          Congrats, {data.name}! Your ticket is ready.
        </div>
        <div className="text-center text-gray-500">
          We've emailed your ticet to{" "}
          <span className="text-orange-600">{data.email}</span> and will send
          updates in the run up to the vent
        </div>
      </div>
      <div className="relative">
        
        <div className="absolute text-white p-5 justify-center flex flex-col gap-5 h-full">
            <div className="flex gap-3 items-start">
                <img src="../../public/images/logo-mark.svg"/>
                <div>
                    <div className="text-2xl">Coding Conf</div>
                    <div className="text-sm text-gray-500">Jan 31, 2025 / Austin, TX</div>
                </div>
            </div>
            <div className="flex gap-3">
                <div>
                    <img src="/images/image-avatar.jpg"  className="h-14"/></div>
                <div>
                    <div className="mb-1 text-lg">Jonatan Kristof</div>
                    <div className="text-sm text-gray-500 flex gap-1 items-center"><img src="/images/icon-github.svg"/>@{data.github}</div>
                </div>
            </div>
        </div>
        <img src="../../public/images/pattern-ticket.svg"/>
      </div>
    </div>
  );
}

export default Ticket;
