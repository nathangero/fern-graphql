import { useQuery } from "@apollo/client";
import { Link } from 'react-router-dom';
import { GET_NAME } from "../utils/queries";
import { useEffect } from "react";

export default function ListData() {

  const { loading, data, error } = useQuery(GET_NAME)
  console.log("data:", data);

  useEffect(() => {
    // console.log("data:", data);
  }, [data])

  if (loading) return "Loading ...";
  if (error) return `Error ! ${error.message}`;


  const name = data?.getName || "list data"
  return (
    <>
      {loading ?
        <h1>Loading...</h1> :
        <div>
          <h1>Hello {name}</h1>
          <Link to={"/"}>Go to Home</Link>
        </div>
      }
    </>
  )
}