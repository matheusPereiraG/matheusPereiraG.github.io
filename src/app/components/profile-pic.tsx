import Image from "next/image";
import profilePic from '/public/profile_pic.jpg';

type ProfilePictureType = {
  className?: string;
};

export default function ProfilePicture({ className }: ProfilePictureType) {
    return (
      <div className={`relative inline-block w-60 h-60 rounded-full overflow-hidden shadow-lg ${className}`}>
        <Image
          src={profilePic}
          alt="Picture of me"
          layout="fill"
          className="object-cover"
        />
      </div>
    );
  }