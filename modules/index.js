

import { modulo, percentage, percentageOf, difference } from "./percentage.js";
import  {calculateAspectRatio}  from "./aspect-ratio.js";

let modulo_form = document.getElementById("modulo-form");

modulo_form.addEventListener("change", (e) => {
  let modulo_1 = document.getElementById("modulo_1");
  let modulo_2 = document.getElementById("modulo_2");
  let modulo_result = document.getElementById("modulo_result");

  if (e.target.id == "modulo_1" || "modulo_2") {
    modulo_result.value = modulo(
      Number(modulo_1.value),
      Number(modulo_2.value)
    );
  }
});

let percentage_form = document.getElementById("percentage-form");

percentage_form.addEventListener("change", (e) => {
  let percentage_1 = document.getElementById("percentage_1");
  let percentage_2 = document.getElementById("percentage_2");
  let percentage_result = document.getElementById("percentage_result");

  if (e.target.id == "percentage_1" || "percentage_2") {
    percentage_result.value = percentage(
      Number(percentage_1.value),
      Number(percentage_2.value)
    );
  }
});

let percentageOf_form = document.getElementById("percentageOf-form");

percentageOf_form.addEventListener("change", (e) => {
  let percentageOf_1 = document.getElementById("percentageOf_1");
  let percentageOf_2 = document.getElementById("percentageOf_2");
  let percentageOf_result = document.getElementById("percentageOf_result");

  if (e.target.id == "percentageOf_1" || "percentageOf_2") {
    percentageOf_result.value = percentageOf(
      Number(percentageOf_1.value),
      Number(percentageOf_2.value)
    );
  }
});

let difference_form = document.getElementById("difference-form");

difference_form.addEventListener("change", (e) => {
  let difference_1 = document.getElementById("difference_1");
  let difference_2 = document.getElementById("difference_2");
  let difference_result = document.getElementById("difference_result");

  if (e.target.id == "percentageOf_1" || "percentageOf_2") {
    difference_result.value = difference(
      Number(difference_1.value),
      Number(difference_2.value)
    );
  }
});

let aspect_form = document.getElementById("aspect-form");

aspect_form.addEventListener("change", (e) => {
  let ratio_1 = document.getElementById("ratio_1");
  let ratio_2 = document.getElementById("ratio_2");
  let ratio_result_width = document.getElementById("ratio_result-width");
  let ratio_result_height = document.getElementById("ratio_result-height");

  if (e.target.id === "ratio_result-width") {
    ratio_result_height.value = calculateAspectRatio(
      Number(ratio_1.value),
      Number(ratio_2.value),
      Number(ratio_result_width.value),
      "w"
    );
   
  } 
  
    if (e.target.id === "ratio_result-height") {
    ratio_result_width.value = calculateAspectRatio(
      Number(ratio_1.value),
      Number(ratio_2.value),
      Number(ratio_result_height.value),
      "h"
    );
   
  }
});


