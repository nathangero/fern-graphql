import { useMutation, useQuery } from "@apollo/client";
import { Link } from 'react-router-dom';
import { GET_NAME } from "../utils/queries";
import { SET_NAME } from "../utils/mutations";
import { useEffect, useState } from "react";

export default function ListData() {

  const [newName, setNewName] = useState('');
  const { loading, data, error } = useQuery(GET_NAME)
  const [setName, { data: setNameData, error: setNameError }] = useMutation(SET_NAME, {
    variables: { newName },
    refetchQueries: [GET_NAME, "getName"]
  })

  useEffect(() => {
    // console.log("data:", data);
    if (data?.getName) setNewName(data?.getName); 
  }, [data])

  if (loading) return "Loading ...";
  if (error) return `Error ! ${error.message}`;

  const onChangeNewName = (e) => {
    e.preventDefault();

    setNewName(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      await setName();
    } catch (error) {
      console.log("Couldn't set name from react");
      console.error(error);
    }
  }

  const name = data?.getName || "list data"
  return (
    <>
      {loading ?
        <h1>Loading...</h1> :
        <div>
          <h1>Hello {name}</h1>
          <form onSubmit={onSubmit}>
            <label htmlFor="new-name">New name:</label>
            <input
              className="form-control"
              value={newName}
              onChange={onChangeNewName}
              placeholder="new name"
            />
            <br/>
            <button className="btn btn-primary">Change</button>
          </form>

          <br/>
          <Link to={"/"}>Go to Home</Link>
        </div>
      }
    </>
  )
}