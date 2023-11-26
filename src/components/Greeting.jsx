export default function Greeting(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 capitalize m-0 p-0">Welcome To Marker, {props.name}!</h1>
  );
}
