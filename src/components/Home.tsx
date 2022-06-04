function Home(props:{params?:Object}) {
  
  return (
    <div>{JSON.stringify(props.params)}</div>
  );
}

export default Home;