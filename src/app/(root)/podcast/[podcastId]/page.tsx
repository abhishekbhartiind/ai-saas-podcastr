import React from "react"

type Props = {}

const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return <p className="text-white-1">PodcastDetails of {params.podcastId}</p>
}

export default PodcastDetails
