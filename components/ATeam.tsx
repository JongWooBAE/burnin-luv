import Image from "next/image";

export default function ATeam() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-center gap-2">
        <Image
          src="/casting/Chad_A.jpg"
          width={270}
          height={380}
          alt="포스터"
          className="w-[45%]"
        />
        <Image
          src="/casting/Natalie_A.jpg"
          width={270}
          height={380}
          alt="포스터"
          className="w-[45%]"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Jim_A.jpg"
          width={270}
          height={380}
          alt="포스터"
          className="w-[45%]"
        />
        <Image
          src="/casting/Silvia_A.jpg"
          width={270}
          height={380}
          alt="포스터"
          className="w-[45%]"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Dennis_A.jpg"
          width={270}
          height={380}
          alt="포스터"
          className="w-[45%]"
        />
        <Image
          src="/casting/Sandra_A.jpg"
          width={270}
          height={380}
          alt="포스터"
          className="w-[45%]"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Dean_A.jpg"
          width={270}
          height={380}
          alt="포스터"
          className="w-[45%]"
        />
        <Image
          src="/casting/Lorraine_A.jpg"
          width={270}
          height={380}
          alt="포스터"
          className="w-[45%]"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Matilda_A.jpg"
          width={270}
          height={380}
          alt="포스터"
          className="w-[45%]"
        />
        <Image
          src="/casting/Earl_A.jpg"
          width={270}
          height={380}
          alt="포스터"
          className="w-[45%]"
        />
      </div>
    </div>
  );
}
