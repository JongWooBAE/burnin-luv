import Image from "next/image";

export default function BTeam() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-center gap-2">
        <Image
          src="/casting/Chad_B.jpg"
          width={1585}
          height={2115}
          alt="포스터"
          className="w-[45%]"
        />
        <Image
          src="/casting/Natalie_B.jpg"
          width={1585}
          height={2115}
          alt="포스터"
          className="w-[45%]"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Jim_B.jpg"
          width={1585}
          height={2115}
          alt="포스터"
          className="w-[45%]"
        />
        <Image
          src="/casting/Silvia_B.jpg"
          width={1585}
          height={2115}
          alt="포스터"
          className="w-[45%]"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Dennis_B.jpg"
          width={1585}
          height={2115}
          alt="포스터"
          className="w-[45%]"
        />
        <Image
          src="/casting/Sandra_B.jpg"
          width={1585}
          height={2115}
          alt="포스터"
          className="w-[45%]"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Dean_B.jpg"
          width={1585}
          height={2115}
          alt="포스터"
          className="w-[45%]"
        />
        <Image
          src="/casting/Lorraine_B.jpg"
          width={1585}
          height={2115}
          alt="포스터"
          className="w-[45%]"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Matilda_B.jpg"
          width={1585}
          height={2115}
          alt="포스터"
          className="w-[45%]"
        />
        <Image
          src="/casting/Earl_B.jpg"
          width={1585}
          height={2115}
          alt="포스터"
          className="w-[45%]"
        />
      </div>
    </div>
  );
}
