export function HeroSection() {
  return (
    <div className="flex items-center justify-center h-[590px] px-36 py-32">
      <div className="grid grid-cols-3 items-center">
        <div className="text-white col-span-2">
        <h1 className="font-bold text-6xl leading-[1.06] mb-4 tracking-[-1px]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#017373] to-[#AAD9D1]">Intelligent</span> cloud-based <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#017373] to-[#AAD9D1]">note-taking</span> and collaboration tool
        </h1>
          <p className="mb-12 text-[#BABABA] leading-4">Experience the power of smart note-talking and transform the way you work today.</p>

          <div className="p-7 bg-white w-[434px] h-16 flex items-center rounded-lg relative border-1 border-[#017373]">
            <input type="text" placeholder="Enter your email" className="text-[#303030] flex-grow outline-none pr-[140px]" />
            <button className="flex bg-gradient px-6 rounded-lg items-center text-[#080808] whitespace-nowrap gap-2 cursor-pointer absolute right-1.5 top-1.5 bottom-1.5">
              Sign up
              <div className="flex items-center border rounded-sm border-[#0d0d0dad]">
                <img src="/arrow.png" alt="Arrow" />
              </div>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center col-span-1">
          <img src="/abstract-shapes.png" alt="Abstract Shapes" loading="lazy" width={363} height={483} />
        </div>
      </div>
    </div>
  )
}