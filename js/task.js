const taskList = [
	{
		id:"01",
		clientName:"ShopEase",
		taskName:"Fix Mobile Button Issue",
		taskDesc:"Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
		taskDeadline: "",
		taskStatus:"onGoing"

	},
	{
		id:"02",
		clientName:"CloudSync",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "21 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"03",
		clientName:"SwiftPay",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "21 March 2025",
		taskStatus:"onGoing"

	},

	{
		id:"04",
		clientName:"ShopEase",
		taskName:"Fix Mobile Button Issue",
		taskDesc:"Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
		taskDeadline: "",
		taskStatus:"onGoing"

	},
	{
		id:"05",
		clientName:"CloudSync",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "21 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"06",
		clientName:"SwiftPay",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "21 March 2025",
		taskStatus:"onGoing"

	},
]

        let cardContainer = document.getElementById("task-card-container");

        for (let i = 0; i < taskList.length; i++) {
            let task = taskList[i];

            let card = document.createElement("div");
            card.className = "task-card bg-blue-50 rounded p-3"; 

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
						<button class="btn btn-primary">Completed</button>
					</div>
            `;




            // Add the card to the container
            cardContainer.appendChild(card);
        }


		
