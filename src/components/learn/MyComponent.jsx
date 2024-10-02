const MyComponent = () => {
  const name = "Uyen";
  const info = {
    name: "Uyen Trinh",
    age: 25,
    phone: "0907307108",
  };
  return (
    <>
      <div>MyComponent of {name}</div>
      <div>{JSON.stringify(info)}</div>
      <div>{console.log("Uyen Uyen")}</div>
    </>
  );
};

export default MyComponent;
