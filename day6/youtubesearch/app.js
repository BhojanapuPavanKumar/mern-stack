const renderSuggestions = (data) => {
  const { results } = data;
  const rootElem = document.getElementById("search-suggestions");
  rootElem.innerText = "";
  results.forEach((element) => {
    const newPara = document.createElement("p");
    newPara.innerText = element;
    rootElem.appendChild(newPara);
  });
};

const handleSearchSuggestions = (e) => {
  const searchText = e.target.value;
  const request = fetch(
    // `https://youtube138.p.rapidapi.com/auto-complete/?q=${searchText}&hl=en&gl=US`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "48c02c5149msh0fb84651c20601ap1722c7jsn309b963959c9",
        "x-rapidapi-host": "youtube138.p.rapidapi.com",
      },
    }
  );

  request
    .then((response) => {
      const pr2 = response.json();
      pr2.then((data) => {
        renderSuggestions(data);
      });
    })
    .catch((err) => {
      alert(`${err.message}`);
    });
};

let timeoutId = null;
const handleSearchSuggestionSmart = (e) => {
  clearTimeout(timeoutId);
  setTimeout(() => {
    timeoutId = handleSearchSuggestions(e);
  }, 1000);
};
