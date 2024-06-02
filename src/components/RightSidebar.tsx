"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import Header from "./Header"

const RightSidebar = () => {
  const router = useRouter()

  return (
    <section className={cn("right_sidebar h-[calc(100vh-5px)]")}>
      <section>
        <Header headerTitle="Fans Like You" />
      </section>
      <section className="flex flex-col gap-8 pt-12">
        <Header headerTitle="Top Podcastrs" />
        {/* <div className="flex flex-col gap-6">
          {topPodcasters?.slice(0, 3).map((podcaster) => (
            <div
              key={podcaster._id}
              className="flex cursor-pointer justify-between"
              onClick={() => router.push(`/profile/${podcaster.clerkId}`)}
            >
              <figure className="flex items-center gap-2">
                <Image
                  src={podcaster.imageUrl}
                  alt={podcaster.name}
                  width={44}
                  height={44}
                  className="aspect-square rounded-lg"
                />
                <h2 className="text-14 font-semibold text-white-1">
                  {podcaster.name}
                </h2>
              </figure>
              <div className="flex items-center">
                <p className="text-12 font-normal text-white-1">
                  {podcaster.totalPodcasts} podcasts
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </section>
  )
}

export default RightSidebar
