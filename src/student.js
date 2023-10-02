function Student(props) {
  return (
    <div style={{ background: "skyblue", margin: 10 }}>
      <h1>Hello {props.name}</h1>
      <h2>Email address: {props.email}</h2>
      <h2>Address: {props.other.address}</h2>
      <h2>Education: {props.other.Edu}</h2>
    </div>
  );
}
export default Student;
