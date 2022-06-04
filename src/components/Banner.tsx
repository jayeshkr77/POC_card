function Banner(props:{banner:Object}) {
  
    return (
      <div>{JSON.stringify(props.banner)}</div>
    );
  }
  
  export default Banner;