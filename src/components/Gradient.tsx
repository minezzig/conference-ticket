
function Gradient({text}: {text: string}) {
  return (
    <span className="bg-[linear-gradient(to_right,hsl(7,86%,67%),hsl(0,0%,100%),hsl(7,86%,67%),hsl(0,0%,100%))] bg-clip-text text-4xl font-bold text-transparent">
    {text}
  </span>
  )
}

export default Gradient