import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import Card from "./Card"

function Main() {
  const {fetchData} = useGlobalContext()

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
    <div className="container">
      <div className="row">
        <Card/>
      </div>{/* row */}
    </div>{/* div del container */}
  </>
  )
}

export default Main 