$(document).ready(init);
let tasks = [];

function init() {
  $(".btn_task").on("click", newTask);
  $(".todo_list").on("click", ".finish_task", completeTask);
} // end init Function

function newTask() {
  if ($(".task_input").val() == "") {
    alert("Enter a Task!");
  } // end if
  else {
    let taskIn = { newTask: $(".task_input").val(), taskComplete: false };
    tasks.push(taskIn);
    $(".task_input").val("");
  } // end else
  render();
} // end newTask Function

function completeTask() {
  const completeIndex = $(this).data("index");
  console.log("hello");
  if (tasks[completeIndex].taskComplete === false) {
    tasks[completeIndex].taskComplete = true;
  } else {
    tasks[completeIndex].taskComplete = false;
  } // end if else
  render();
}

function render() {
  $(".todo_list").empty();
  for (let i = 0; i < tasks.length; i++) {
    let individualTask = tasks[i];

    if (individualTask.taskComplete === true) {
      $(".todo_list")
        .append(
          `<li>` +
            individualTask.newTask +
            `<button class="finish_task" type="button" data-index="${i}">Complete</button>`
        )
        .css("text-decoration", "line-through");
    } else {
      $(".todo_list").append(
        `<li>` +
          individualTask.newTask +
          `<button class="finish_task" type="button" data-index="${i}">Complete</button>`
      );
    } // end if else
  } // end for
} // end render Function

// function completeTask() {
//   $(this)
//     .parent()
//     .css("text-decoration", "line-through");
// }

// function newTask() {
//   let taskIn = $(".task_input").val();
//   if (taskIn == "") {
//     alert("Enter a Task!");
//   } // end if
//   else {
//     $(".task_input").val("");
//     $(".todo_list").append(
//       `<li>` +
//         taskIn +
//         `<button class="finish_task" type="button">Complete</button>`
//     );
//   } // end else
// } // end newTask Function
