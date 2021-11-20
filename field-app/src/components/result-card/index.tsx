import {ResultProp} from "./interface"

interface ResultCardProps {
  item: ResultProp
}

export function ResultCard({item}: ResultCardProps) {
  console.log(item)
  return (
    <div>
      <div> {item.full_name}</div>
      <div>{item.description}</div>
      <div>{item.created_at}</div>
    </div>
  )
}
