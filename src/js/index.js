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
};
