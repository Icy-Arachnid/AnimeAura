'use client'
import Image from "next/image"
import Link from "next/link"
interface Props {
    title: string,
    photo: string,
    id: number
}

export default function CardAnime({
    title,
    photo,
    id
}: Props) {
    return(
        <div className="flex items-center flex-col w-[220px] h-[380px]">
            <Link href={`/anime/${id}`}>
                <Image
                    src={photo}
                    alt="bunthumd"
                    width={200}
                    height={300}
                    style={{width: '200px', height: '300px'}}
                />
            </Link>
            <p className="text-base text-gray-900 dark:text-white mt-3">{title}</p>
        </div>
    )
}