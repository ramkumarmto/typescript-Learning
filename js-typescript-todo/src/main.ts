import "./style.css";

interface Goal {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const goals: Goal[] = [];

const goalsContainer = document.querySelector(
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
 goal.className = "goal_items";

//  const checkBox = document.createElement('input');
//  checkBox.setAttribute("type", "checkbox");
//  checkBox.className = "isCompleted";
//  checkBox.checked = item.isCompleted;
//  checkBox.className = checkBox.checked ? "cutElement" : ""



  const para = document.createElement('p') as HTMLParagraphElement;
  para.innerText = item.title;

  const btn = document.createElement('button');
  btn.innerText = "X";
  btn.className = 'deleteBtn';
  btn.onclick = ()=>{
    deleteGoal(item.id);
  }

  // goal.append(checkBox, para, btn);
  goal.append( para, btn);

  const goalsContainer = document.querySelector(".goalsContainer") as HTMLDivElement;

  goalsContainer.append(goal);
}

const renderGoals = (goals: Goal[])=>{
  goalsContainer.innerHTML = "";
  goals.forEach( item => {
    generateGoalItem(item)
  })

}

const deleteGoal = (id : string)=>{
const goalIndex =   goals.findIndex(item => item.id === id);
goals.splice(goalIndex, 1);
renderGoals(goals);

}
