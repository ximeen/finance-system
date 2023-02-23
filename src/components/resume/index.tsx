import ResumeItems from "../resumeItems";
import balance from "/balance.png"
import expense from "/expense.png"
import income from "/income.png"

export default function Resume() {
  return (
    <div className="max-w-6xl w-[98%] m-auto flex gap-5 -mt-12 justify-around">
      <ResumeItems icon={balance} title="Balanço" value={100} />
      <ResumeItems icon={income} title="Entradas" value={200} />
      <ResumeItems icon={expense} title="Saídas" value={100} />
    </div>
  )
}