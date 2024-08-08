import { Skeleton } from "./skeleton"

export const CardAnimeSkeleton = () => {
  return (
    <div className="flex items-center flex-col w-[220px] h-[380px]">
        <Skeleton className="h-[300px] w-[200px] bg-slate-600"/>
        <Skeleton className="h-4 w-[120px] bg-slate-600 mt-2"/>
    </div>
  )
}
