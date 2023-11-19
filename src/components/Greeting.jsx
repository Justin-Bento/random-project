export default function Greeting(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Welcome To Marker, {props.name}!</h1>
  );
}
