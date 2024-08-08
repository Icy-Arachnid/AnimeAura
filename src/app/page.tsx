import CardAnime from "@/components/ui/CardAnime";
import Dashboard from "@/components/ui/Dashboard";
import Navbar from "@/components/ui/Navbar";
import { Pagination } from "@/components/ui/Pagination";
import { getAnimeScroll } from "@/lib/getData";

interface Props {
  searchParams: {
      page?: string
  }
}

export default async function Home({ searchParams }: Props) {

  const {animes, totalPage} = await getAnimeScroll(searchParams.page)
    console.log(searchParams.page)

    return (
        <>
            <Navbar/>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-auto">
                {animes.map((ele, index) => (
                    <CardAnime title={ele.title} photo={ele.photo} id={ele.id}/>
                ))}
            </div>
            <Pagination totalPages={totalPage}/>
        </>
    )
}


