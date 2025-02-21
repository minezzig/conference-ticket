import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[url(/images/background-mobile.png)] bg-cover bg-no-repeat py-10 md:bg-[url(/images/background-tablet.png)] lg:bg-[url(/images/background-desktop.png)]">
      <img
        src="/images/pattern-squiggly-line-top.svg"
        alt="top squiggle"
        className="absolute top-0 right-0 h-20 md:h-auto"
      />

      <div className="text-neutral1 flex flex-col items-center justify-center">
        <img src="./images/logo-full.svg" alt="logo" />
      </div>

      <Outlet />

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
