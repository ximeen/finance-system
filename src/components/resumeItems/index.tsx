
interface resumePopros {
  icon: string
  title: string
  value: number
}

export default function ResumeItems({ icon, title, value }: resumePopros) {
  return (
    <div
      className="flex flex-col items-center bg-white rounded-md py-1 px-5 w-[30%] shadow-sm">
      <header
        className="flex items-center justify-around w-full gap-3 my-5">
        <p className="text-xl text-zinc-600">{title}</p>

        <img src={icon} alt="" className="rounded-full bg-white shadow-lg" />

      </header >
      <span className="text-3xl font-semibold text-zinc-600 mb-2">R${value}</span>
    </div >
  )
}