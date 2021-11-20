import type {NextPage} from "next"
import React, {useState} from "react"
import {ResultCard} from "../components/result-card"
import {api} from "../service/api"

export default function Home() {
  const [searchResult, setSearchResult] = useState([])

  async function searchGits() {
    try {
      //url dos search repositorios
      const {data} = await api.get("/search/repositories?q=bootstrap")
      console.log(data)
      setSearchResult(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button onClick={searchGits}>Search</button>
      {searchResult.map((item) => {
        return <ResultCard item={item} />
      })}
    </div>
  )
}
