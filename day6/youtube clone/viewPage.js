// const iframe = document.getElementsByTagName("iframe")[0];

// // iframe.src='https://www.youtube.com/embed/9IiYOTzJ2uw'

// iframe.setAttribute("src", "https://www.youtube.com/embed/9IiYOTzJ2uw");
const searchQueryStr = window.location.search;
const res = searchQueryStr.split("=");
const videoId = res[1];

const iframe = document.getElementsByTagName("iframe")[0];
iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
