const rangeslider = document.getElementById("slider-range");
const output = document.getElementById("slider-text");

output.innerHTML = rangeslider.value;

rangeslider.oninput = function () {
  output.innerHTML = this.value;
};
