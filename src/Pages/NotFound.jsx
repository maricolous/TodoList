import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Sidan hittades inte</h1>
      <p>Oj! Sidan du letar efter finns inte.</p>
      <Link to="/">Tillbaka till startsidan</Link>
    </div>
  );
};

export default NotFound;
