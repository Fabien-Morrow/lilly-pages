import Image from "next/image";

export default function ContactMe() {
  return (
    <div className="mx-20 lg:mx-0">
      <div className="color-custom-blue mt-48 text-center text-2xl font-bold">
        Me contacter
      </div>
      <div className="mt-36 flex flex-col lg:grid lg:grid-cols-2 lg:gap-3">
        <div className="flex flex-col items-center">
          <Image
            className="hidden lg:block"
            src="/contact.png"
            width={272}
            height={259}
            alt="contact"
          />
          <div className="mt-8 w-full">
            <div className="flex gap-3">
              <Image src="/tel.svg" width={48} height={48} alt="tel" />
              <div className="flex items-center">06.67.28.78.05</div>
            </div>
            <div className="mt-3 flex gap-3">
              <Image src="/mail.svg" width={48} height={48} alt="mail" />
              <div className="flex items-center">lejardindelilly@gmail.com</div>
            </div>
            <div className="mt-3 flex gap-3">
              <Image
                src="/location.svg"
                width={48}
                height={48}
                alt="location"
              />
              <div className="flex flex-col justify-center">
                <div>48 avenue Marguerite de Valois</div>
                <div>16330 Montignac charente</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-9 flex flex-col lg:mt-0">
          <input
            className="h-14 w-full rounded-md border-0 bg-[#F3F6FF] py-5 px-4"
            type="text"
            placeholder="Adresse e-mail"
          />
          <textarea
            className="mt-6 min-h-[200px] w-full flex-grow rounded-md border-0 bg-[#F3F6FF] py-5 px-4 align-top lg:min-h-0"
            type="text"
            placeholder="Votre message ici"
          />
          <div className="flex justify-center">
            <button className="mt-14 rounded-md  border-custom-blue bg-[#111A40] px-6 py-3 tracking-wider text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#1B2A6A] hover:delay-100 hover:duration-300">
              ENVOYER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
