import DisplayVideo from '@/components/displayVideo';
import { listVideos } from "@/lib/utils";

export default function Media() {

  return (
    <div className="mt-24 p-3 xl:max-w-6xl md:max-w-5xl xl:mx-auto">
        <div className="flex flex-col h-max relative justify-center gap-3">
        {listVideos.map((video, index) => (
          <div key={index} className='gap-2'>
          <DisplayVideo titulo={video.titulo} descrip={video.descrip} url={video.url}/>
          </div>
        ))}
        </div>
    </div>
  )
}
