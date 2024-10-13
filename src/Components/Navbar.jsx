function Navbar() {
  return (
    <div className="w-full shadow-[0px_1px_20px_0px_#0000001A]">
      <div className="mx-auto max-w-[904px] py-8 flex items-center gap-20 px-4 ">
      <a href="/" className="font-bold text-3xl leading-9 tracking-wide">
        YOUR LOGO
      </a>
      <div className="flex gap-7">
        <select>
          <option disabled selected className="font-medium text-xl">
            Assets
          </option>
          <option className="font-medium text-xl">option 1</option>
          <option className="font-medium text-xl">option 2</option>
          <option className="font-medium text-xl">option 3</option>
        </select>
        <a className="font-medium text-xl" href="">
          Creators
        </a>
        <a className="font-medium text-xl" href="">
          Careers
        </a>
        <a className="font-medium text-xl" href="">
          Go Pro
        </a>
      </div>
      <div className="flex gap-5">
        <select className="p-2">
          <option className="font-medium text-xl" disabled selected>Language</option>
            <option className="font-medium text-xl" >O'zb</option>
            <option className="font-medium text-xl" >Рус</option>
            <option className="font-medium text-xl" >Eng</option>
        </select>
        <button>Dark</button> 
      </div>
    </div>
    </div>
  );
}

export default Navbar;
