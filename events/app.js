const handleUserName = (obj) => {
  const e = obj.target;
  console.log(e.value);
  const p = document.getElementsByTagName("p");
  p.innerText = `hello ${e.value}`;
  //obj.stopPrpagation();
  // obj.preventDefault();
};
