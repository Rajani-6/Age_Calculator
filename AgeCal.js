const btn = document.getElementById("btn");
const date = document.getElementById("date");
date.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

console.log(document);
btn.onclick = function () {
  let birthDate = new Date(date.value);

  let d1 = birthDate.getDay();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDay();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let y3, m3, d3;

  y3 = y2 - y1;

  if (m2 > m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 > d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  result.innerText = `You are ${y3} years ${m3} months ${d3} days`;
  console.log("years : ", y3);
  console.log("Months : ", m3);
  console.log("day : ", d3);
};

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
