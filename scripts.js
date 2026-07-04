const $ = (id) => document.getElementById(id);

const solution = $("rts-solution");
const answer = $("rts-answer");
const Buttons = document.querySelectorAll(".rb-btn");
const equalFunc = () => {
  try {
    const ans = eval(solution.value);
    answer.value = ans || "";
  } catch {
    answer.value = "";
  }
};

for (let btn of Buttons) {
  const id = btn.id;
  const funcs = {
    erase: () => {
      solution.value = solution.value.slice(0, -1);
    },
    clear: () => {
      solution.value = "";
    },
    equals: equalFunc
  };
  const opers = {
    divide: "/",
    multiply: "*",
    add: "+",
    subtract: "-",
    decimal: ".",
    rate: "/100"
  };

  btn.addEventListener("click", (e) => {
    const number = +id;
    const func = funcs[id];
    const opr = opers[id];

    if (number || number === 0) {
      solution.value += number;
      equalFunc();
      return;
    }

    if (func) func();
    else if (opr) solution.value += opr;

    equalFunc();
  });
}
