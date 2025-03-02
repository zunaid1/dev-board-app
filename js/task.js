function getCurrentTime(){
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes().toString().padStart(2, "0");
	const seconds = now.getSeconds().toString().padStart(2, "0");
	const ampm = hours >= 12 ? "PM" : "AM";
	
	return `${hours % 12 || 12}:${minutes}:${seconds} ${ampm}`;
	//console.log(formattedTime);
	//return currentTime;
}


let updatedTime = getCurrentTime();
setInterval(getCurrentTime, 1000); 


const taskList = [
	{
		id:"1",
		clientName:"ShopEase",
		taskName:"Fix Mobile Button Issue",
		taskDesc:"Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
		taskDeadline: "10 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"2",
		clientName:"CloudSync",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "10 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"3",
		clientName:"SwiftPay",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "11 March 2025",
		taskStatus:"onGoing"

	},

	{
		id:"4",
		clientName:"ShopEase",
		taskName:"Fix Mobile Button Issue",
		taskDesc:"Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
		taskDeadline: "19 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"5",
		clientName:"CloudSync",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "18 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"6",
		clientName:"SwiftPay",
		taskName:"Add Dark Mode",
		taskDesc:"Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
		taskDeadline: "25 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"7",
		clientName:"MediCare",
		taskName:"Implement Patient Login",
		taskDesc:"Develop authentication for patients using JWT and secure password hashing.",
		taskDeadline: "12 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"8",
		clientName:"EduLearn",
		taskName:"Add Course Filtering",
		taskDesc:"Implement search and category filters for courses using React and Redux.",
		taskDeadline: "15 March 2025",
		taskStatus:"onGoing"

	},
	{
		id:"9",
		clientName:"FoodieHub",
		taskName:"Optimize Checkout Page",
		taskDesc:"Improve page load speed by reducing API calls and lazy-loading images.",
		taskDeadline: "09 March 2025",
		taskStatus:"onGoing"
	},
	{
        id: "10",
        clientName: "AutoTrack",
        taskName: "Integrate Google Maps API",
        taskDesc: "Add real-time location tracking for delivery vehicles using Google Maps API.",
        taskDeadline: "22 March 2025",
        taskStatus: "onGoing"
    },

{
	id: "11",
	clientName: "FashionFiesta",
	taskName: "Enhance UI/UX for Product Page",
	taskDesc: "Improve product page layout, add zoom-in image preview, and optimize responsiveness.",
	taskDeadline: "15 March 2025",
	taskStatus: "pending"
},
{
	id: "12",
	clientName: "TechNest",
	taskName: "Fix API Response Time Issue",
	taskDesc: "Optimize database queries and enable caching to reduce API response time.",
	taskDeadline: "10 March 2025",
	taskStatus: "onGoing"
},
{
	id: "13",
	clientName: "HomeRent",
	taskName: "Develop Property Listing Feature",
	taskDesc: "Enable users to add, edit, and delete property listings with image uploads.",
	taskDeadline: "28 March 2025",
	taskStatus: "pending"
},
{
	id: "14",
	clientName: "QuickPay",
	taskName: "Improve Payment Security",
	taskDesc: "Implement tokenization and fraud detection mechanisms for secure transactions.",
	taskDeadline: "17 March 2025",
	taskStatus: "onGoing"
},
{
	id: "15",
	clientName: "EventBuddy",
	taskName: "Enable Ticket Booking System",
	taskDesc: "Develop seat selection and QR code ticket generation for events.",
	taskDeadline: "19 March 2025",
	taskStatus: "pending"
},
{
	id: "16",
	clientName: "FitTrack",
	taskName: "Create Workout Tracker",
	taskDesc: "Allow users to log workouts, track progress, and set fitness goals.",
	taskDeadline: "09 March 2025",
	taskStatus: "onGoing"
},
{
	id: "17",
	clientName: "JobConnect",
	taskName: "Implement Resume Upload",
	taskDesc: "Enable job seekers to upload resumes and apply for jobs with one click.",
	taskDeadline: "13 March 2025",
	taskStatus: "pending"
},
{
	id: "18",
	clientName: "GadgetFix",
	taskName: "Set Up Online Repair Request",
	taskDesc: "Develop a repair request system where users can select issues and schedule pickups.",
	taskDeadline: "16 March 2025",
	taskStatus: "onGoing"
},
{
	id: "19",
	clientName: "NewsNow",
	taskName: "Add Real-Time News Updates",
	taskDesc: "Fetch latest news articles from APIs and display them dynamically.",
	taskDeadline: "20 March 2025",
	taskStatus: "completed"
},
{
	id: "20",
	clientName: "TravelEase",
	taskName: "Enhance Flight Booking System",
	taskDesc: "Add multi-city travel options and implement dynamic pricing.",
	taskDeadline: "22 March 20256",
	taskStatus: "pending"
},
{
	id: "21",
	clientName: "PetCare",
	taskName: "Develop Pet Adoption Portal",
	taskDesc: "Allow users to browse pets, apply for adoption, and connect with pet shelters.",
	taskDeadline: "21 March 2025",
	taskStatus: "onGoing"
},
{
	id: "22",
	clientName: "BookHaven",
	taskName: "Implement E-book Reader",
	taskDesc: "Develop an in-app e-book reader with highlighting and bookmarking features.",
	taskDeadline: "23 March 2025",
	taskStatus: "pending"
},
{
	id: "23",
	clientName: "HealthCheck",
	taskName: "Add AI-Based Symptom Checker",
	taskDesc: "Integrate an AI-powered chatbot to suggest possible diagnoses based on symptoms.",
	taskDeadline: "25 March 2025",
	taskStatus: "onGoing"
},
{
	id: "24",
	clientName: "MusicStream",
	taskName: "Optimize Music Streaming Performance",
	taskDesc: "Improve audio buffering and reduce latency for uninterrupted streaming.",
	taskDeadline: "27 March 2025",
	taskStatus: "onGoing"
}

]





        let cardContainer = document.getElementById("task-card-container");
        let activityCardContainer = document.getElementById("activity-card-container");

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


					 let addButton = card.querySelector(`#btnCompleted-${task.id}`); 
					 addButton.addEventListener('click', function() {





						 addButton.disabled = true;
						 addButton.classList.add("bg-gray-500", "hover:bg-gray-500"); 
						 alert('Board updated Successfully');
						 let previousAssignedTask = document.getElementById("assigned-task").innerText;
						document.getElementById("assigned-task").innerText = previousAssignedTask - 1;


						let previousCompletedTaskValue = document.getElementById("completed-task").innerText;
						document.getElementById("completed-task").innerText = parseInt(previousCompletedTaskValue) + 1;




						//=======Activity Card=================================
					updatedTime = getCurrentTime();
					let activityCard= document.createElement("div");
					activityCard.className= "activity-card rounded bg-[#F4F7FF] p-3 text-black";
					activityCard.innerHTML = `
			 	<div id="log-id" class="activity-card rounded bg-[#F4F7FF] p-3 text-black">
				<p>You have Complete The Task <span class="font-bold">${task.taskName}</span> at ${updatedTime}</span> </p>
				</div> `
						activityCardContainer.appendChild(activityCard);

						if(parseInt(previousAssignedTask) === 0){
							alert("Congrats!, You have completed All Task.");
						}
					 });
		 
					 
            cardContainer.appendChild(card);
			
			
        }


		


	
        // // Step 1: Create an array
        // let fruits = ["Apple", "Banana", "Orange", "Mango", {id:1, name:"zunaid"}, {id:1, name:"zunaid"}, {id:1, name:"zunaid"}, {id:1, name:"zunaid"}, {id:1, name:"zunaid"}];






		let length = taskList.length;
		document.getElementById("assigned-task").innerText = length;
		
		
		