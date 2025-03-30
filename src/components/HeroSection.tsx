export function HeroSection() {
  return (
    <div className="flex items-center justify-center h-[590px] px-36 py-32">
      <div className="grid grid-cols-3 items-center">
        <div className="text-white col-span-2">
          <h1 className="font-bold text-6xl leading-[1.06] mb-4"><span className="text-[#048c80]">Intelligent</span> cloud-based <span className="text-[#048c80]">note-talking</span> and collaboration tool</h1>
          <p className="mb-12">Experience the power of smart note-talking and transform the way you work today.</p>

          <div className="p-10">
            <input type="text" placeholder="Enter your email" />
            <button>
              <img src="/arrow.png" alt="Arrow" />
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