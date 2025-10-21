import Image from "next/image";

export default function Backed_by() {
  return (
    <section className="w-full flex justify-center items-center border border-[#D8D3D3] py-24 md:min-h-[40vh]">
      <section className="max-w-[85%]">
        <div className="w-full flex flex-col gap-y-5 justify-center items-center">
          <p className="md:text-[16px] text-[12px] mb-8">Backed By:</p>

          <div className="md:w-full md:h-2/4">
            <Image
              src="/images/recursive-capital.svg"
              alt="recursive-capital"
              width={100}
              height={100}
              quality={100}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
