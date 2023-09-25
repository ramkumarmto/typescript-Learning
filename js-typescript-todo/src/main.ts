import "./style.css";

interface Goal {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const goals: Goal[] = [];

const todosContainer = document.querySelector(
  ".goalsContainer"
) as HTMLDivElement;
const inputEle = document.querySelector("input") as HTMLInputElement;
const myForm = document.querySelector("#myForm") as HTMLFormElement;

myForm.onsubmit = (e) => {
  e.preventDefault();

  const goal: Goal = {
    title: inputEle.value,
    isCompleted: false,
    id: String(Math.random() * 1000),
  };

  goals.push(goal);
  inputEle.value = "";
 // rendering todo here..
 renderGoals(goals)
};

function generateGoalItem(item : Goal){
 const goal : HTMLDivElement = document.createElement("div");
 goal.className = "goal";

 const checkBox = document.createElement('input');
 checkBox.setAttribute("type", "checkbox");
 checkBox.className = "isCompleted";
 checkBox.checked = item.isCompleted;

  const para = document.createElement('p') as HTMLParagraphElement;

  const btn = document.createElement('button');
  btn.innerText = "X";
  btn.className = 'deleteBtn';
}

const renderGoals = (goals: Goal[])=>{
  goals.forEach( item => {
    generateGoalItem(item)
  })

}
