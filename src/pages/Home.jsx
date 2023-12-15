import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <>
      <h1>welcome home</h1>
      <Link to={"/data"}>Go to Data</Link>
    </>
  )
}