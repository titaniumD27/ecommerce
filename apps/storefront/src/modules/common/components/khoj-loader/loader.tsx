
"use client"

import Image from "next/image"

const KhojLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F7E7CE]/35 backdrop-blur-[5px]">
      <div className="flex flex-col items-center gap-[18px]">
        {/* KHOJ Logo */}
        <Image
          src="/logo1.png"
          alt="KHOJ"
          width={40}
          height={60}
          priority
          className="h-auto w-[100px] md:w-[120px] object-contain"
        />

        {/* Spinner */}
        <div className="h-[32px] w-[32px] md:h-[35px] md:w-[35px] animate-spin rounded-full border-[3px] md:border-[4px] border-[#4B0A14]/15 border-t-[#4B0A14]" />
      </div>
    </div>
  )
}

export default KhojLoader
