import logoImg from '../assets/logo.svg'
import logoImg2 from '../assets/logo2.svg'
import logoImg3 from '../assets/logo3.svg'

const logos = [
  logoImg,
  logoImg2,
  logoImg3,
  logoImg,
  logoImg2,
  logoImg3,
  logoImg,
  logoImg3,
]

const sizes = {
  width: 70,
  height: 16,
}

export function Logos() {
  return (
    <div className="flex justify-center items-center gap-20 w-full min-h-20">
      {logos.map((logo, index) => {
        const opacity = 0.8 + (index % 2) * 0.2;
        return (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            width={sizes.width}
            height={sizes.height}
            style={{ opacity }}
            className="transition-transform hover:scale-110 hover:opacity-100 hover:brightness-125"
          />
        )
      })}
    </div>
  )
}