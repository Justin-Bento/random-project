export default function Greeting(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <h1 className="text-3xl font-bold">Welcome To Marker, {props.name}!</h1>
  );
}
