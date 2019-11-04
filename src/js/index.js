/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let suit = ["&#x2660", "&#x2663", "&#x2665", "&#x2666"];
  let card = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];

  /* let cardGenerator = [];
  suit.forEach(x => {
    card.forEach(y => {
      cardGenerator.push(x + " " + y);
    });
  });

  let i = Math.floor(Math.random() * cardGenerator.length);



  document.querySelector("#cards").innerHTML = cardGenerator[i];
  */

  let i = Math.floor(Math.random() * suit.length);
  let j = Math.floor(Math.random() * card.length);
  document.querySelector("#suits").innerHTML = suit[i];
  document.querySelector("#suits1").innerHTML = suit[i];
  document.querySelector("#cards").innerHTML = card[j];
  if (suit[i] == "&#x2665" || suit[i] == "&#x2666") {
    document.querySelector("#suits").classList =
      "card-title w-100 d-flex justify-content-start pl-2 pt-2 mb-0 text-danger";
    document.querySelector("#suits1").classList =
      "card-title w-100 d-flex pl-2 pb-2 mb-0 rotateimg180 text-danger";
  } else {
    document.querySelector("#suits").classList =
      "card-title w-100 d-flex justify-content-start pl-2 pt-2 mb-0";
    document.querySelector("#suits1").classList =
      "card-title w-100 d-flex pl-2 pb-2 mb-0 rotateimg180";
  }
};
