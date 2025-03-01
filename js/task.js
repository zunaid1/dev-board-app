

const taskList = [
	{
		id:"1",
		clientName:"ShopEase",
		taskName:"Fix Mobile Button Issue",
		taskDesc:"Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
		taskDeadline: "",
		taskStatus:"onGoing"

	},
	{
		id:"2",
		clientName:"CloudSync",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "21 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"3",
		clientName:"SwiftPay",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "21 March 2025",
		taskStatus:"onGoing"

	},

	{
		id:"4",
		clientName:"ShopEase",
		taskName:"Fix Mobile Button Issue",
		taskDesc:"Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
		taskDeadline: "",
		taskStatus:"onGoing"

	},
	{
		id:"5",
		clientName:"CloudSync",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "21 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"6",
		clientName:"SwiftPay",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "21 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"7",
		clientName:"SwiftPay",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "21 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"8",
		clientName:"SwiftPay",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "21 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"9",
		clientName:"SwiftPay",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "21 March 2025",
		taskStatus:"onGoing"
	}

]

        let cardContainer = document.getElementById("task-card-container");

        for (let i = 0; i < taskList.length; i++) {
            let task = taskList[i];

            let card = document.createElement("div");
            card.className = "task-card bg-blue-50 rounded p-3"; 
			card.setAttribute("data-index", task.id); // Set custom attribute for identifying the card

            card.innerHTML = `
					<div class="flex justify-between items-center text-center">
						<p class="bg-white rounded w-[40%] p-2 text-center">${task.clientName}</p>
						<div class="flex justify-center items-center p-3 bg-blue-500 w-9 h-9 text-center font-bold text-white rounded-[50%] text-[16px]">
							<p class="text-center">${task.id}</p>
						</div>
					</div>

					<h1 class="task-card-title font-bold my-2">${task.taskName} </h1>
					<p class="task-card-desc bg-white rounded p-2">${task.taskDesc}	</p>
					<div class="task-card-footer flex justify-between my-3">
						<div class="task-card-footer-text">
						<p>Deadline</p>
						<p class="task-footer-deadline font-bold">${task.taskDeadline}</p>
						</div>
						<button id="btnCompleted-${task.id}" class="btn btn-primary">Completed</button>
					</div>
            `;


			         // Step 4: Add event listener to the "Add" button
					 let addButton = card.querySelector(`#btnCompleted-${task.id}`); // Select the specific "Add" button
					 addButton.addEventListener('click', function() {
						 // Disable the "Add" button after it is clicked
						 addButton.disabled = true;
						 addButton.innerText = "Finish"; // Change the button text to "Added"
						 addButton.classList.add("bg-gray-500", "hover:bg-gray-500"); // Add some styling to indicate it's disabled
						 alert('You added: ' + task.taskName);
						 let previousAssignedTask = document.getElementById("assigned-task").innerText;
						document.getElementById("assigned-task").innerText = previousAssignedTask - 1;


						let previousCompletedTaskValue = document.getElementById("completed-task").innerText;
						document.getElementById("completed-task").innerText = parseInt(previousCompletedTaskValue) + 1;

						//completed-task
					 });
		 
					 




            // Add the card to the container
            cardContainer.appendChild(card);
        }


		


	
        // // Step 1: Create an array
        // let fruits = ["Apple", "Banana", "Orange", "Mango", {id:1, name:"zunaid"}, {id:1, name:"zunaid"}, {id:1, name:"zunaid"}, {id:1, name:"zunaid"}, {id:1, name:"zunaid"}];






		let length = taskList.length;
		document.getElementById("assigned-task").innerText = length;
		
		
		