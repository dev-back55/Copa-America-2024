import DisplayVideo from '@/components/displayVideo';
import { listVideos } from "@/lib/utils";

export default function Media() {

  return (
    <div className="mt-24 p-3 xl:max-w-6xl md:max-w-5xl xl:mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-blue-900 xl:max-w-6xl md:max-w-5xl lg:mx-auto rounded-lg">
        {listVideos.map((video, index) => (
          <div key={index} className='gap-2'>
          <DisplayVideo titulo={video.titulo} descrip={video.descrip} url={video.url}/>
          </div>
        ))}
        </div>
    </div>
  )
}
