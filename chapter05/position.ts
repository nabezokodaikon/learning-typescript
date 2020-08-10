module List05_33 {

  const success = (pos: Position) => {
    console.log(pos);
  }

  navigator.geolocation.getCurrentPosition(success);

}
