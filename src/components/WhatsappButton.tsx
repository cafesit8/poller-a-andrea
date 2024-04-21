import { useState } from "react"

export default function WhatsappButton () {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed md:bottom-10 md:right-10 bottom-4 right-4 z-20"
      >
        <img className="md:w-16 w-12" src="/whatsapp.png" alt="" />
      </button>
      {open &&
        <div className="fixed lg:bottom-28 lg:right-8 bottom-[70px] z-20 right-5 bg-bg-color rounded-md">
          <ul className="flex justify-center gap-3 items-start flex-col p-3">
            <li className=" text-white/80 text-xs flex items-center">
              <a
                target="_blank"
                aria-label="Link para mandar un correo a la empresa Pollos a la Brasa y Parrillas Andrea"
                href="https://wa.me/+51979212828?text=¡Hola! Estoy interesado en comprar algo de tu pollería. ¿Podrías ayudarme con más información?"
                className="hover:underline flex items-center gap-2"
              >
                <img
                  className="w-5"
                  src='whatsapp.png'
                  width={30}
                  height={30}
                  alt=""
                />
                Whatsapp Callao</a
              >
            </li>
            <li className=" text-white/80">
              <a
                target="_blank"
                href="https://wa.me/+51959976229?text=¡Hola! Estoy interesado en comprar algo de tu pollería. ¿Podrías ayudarme con más información?"
                className="hover:underline flex items-center gap-2 text-xs"
              >
                <img
                  className="w-5"
                  src='whatsapp.png'
                  width={30}
                  height={30}
                  alt=""
                />
                Whatsapp Los Olivos</a
              >
            </li>
          </ul>
        </div>}
    </>
  )
}