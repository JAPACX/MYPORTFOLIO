import SwitchMain from "../components/switch";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="w-full">
          <nav className="grid grid-cols-3 h-[100px] items-center bg-white">
            <div className="flex justify-center">
              <div className=" w-[30px] bg-black h-[50px] mr-[20px]"></div>
              <p className="text-black">
                Javier Pacheco <br />
                Software developer
              </p>
            </div>
            <div className="flex justify-center">
              <SwitchMain />
            </div>
            <div className="text-black flex justify-around">
              <p>linkedin </p>
              <p> resume</p>
            </div>
          </nav>
          <div className="flex justify-center  items-center">
            <p>informacion de mi bio</p>
          </div>
          <footer>
            <div className="flex justify-center">
              <p>footer</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
