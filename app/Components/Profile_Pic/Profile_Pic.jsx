import React from 'react'
import Image from "next/image";
import profilePic from "@/src/assets/DP.jpg";


const Profile_Pic = () => {
  return (
    <div><div className="p-[5px] rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <div className="w-70 h-70 relative rounded-full overflow-hidden bg-white">
      <Image
        src={profilePic}
        alt="Profile picture"
        fill
        className="object-cover"
      />
    </div>
  </div></div>
  )
}

export default Profile_Pic