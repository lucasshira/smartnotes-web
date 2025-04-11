export function Header() {
  return (
    <div className="h-24 sm:w-full text-amber-50 flex px-24 justify-between items-center border-b border-b-[#048C80]">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-9 h-9 bg-gradient rounded-md">
          <img src="/logo.png" alt="Logo" />
        </div>
        <h1 className="font-bold text-xl">SmartNotes</h1>
      </div>

      <div className="flex items-center gap-14 leading-6 text-[#d4d4d4]">
        <a className="cursor-pointer hover:text-[#E7E7E7] tracking-wider">Features</a>
        <a className="cursor-pointer hover:text-[#E7E7E7] tracking-wider">Pricing</a>
        <a className="cursor-pointer hover:text-[#E7E7E7] tracking-wider">Support</a>
      </div>

        <button className="flex items-center gap-2 bg-gradient w-[167px] h-14 justify-center text-[#080808] rounded-md cursor-pointer">
          Get Started
          <div className="flex items-center border rounded-sm border-[#0d0d0dad]">
            <img src="/arrow.png" alt="Arrow" />
          </div>
        </button>
    </div>
  )
}