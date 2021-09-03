'use strict';
{
	const tasks = [
		{
			status: 'todo',
			body: 'Clean Kitchen',
		},
		{
			status: 'doing',
			body: 'Learn DOM',
		},
		{
			status: 'todo',
			body: 'Eat Pizza',
		},
		{
			status: 'done',
			body: 'Make Coffee',
		},
	];

	// TODO: add each task to the appropriate column
	for (let task of tasks) {
		// get element
		// document.querySelectorAll();

		// create new element
		const stickyNote = document.createElement('div');

		// add whatever details
		stickyNote.classList.add('sticky');
		stickyNote.classList.add(task.status);
		stickyNote.innerText = task.body;

		console.log(stickyNote);

		// insert it on the page
		// getting the inner div of the "done" column
		// adding our div to the end of that inner section
		const addToHere = document.querySelector(`#${task.status} > .inner`);
		addToHere.append(stickyNote);

		// add event listener
		stickyNote.addEventListener('click', () => {
			if (stickyNote.classList.contains('todo')) {
				// move to doing
				const addToHere = document.querySelector('#doing > .inner');
				// update the class
				stickyNote.classList.remove('todo');
				stickyNote.classList.add('doing');
				// move the elemnt to the done column
				addToHere.append(stickyNote);
			}
			// move to the right
			else if (stickyNote.classList.contains('doing')) {
				// move to done
				const addToHere = document.querySelector('#done > .inner');
				// update the class
				stickyNote.classList.remove('doing');
				stickyNote.classList.add('done');
				// move the elemnt to the done column
				addToHere.append(stickyNote);
			} else if (stickyNote.classList.contains('done')) {
				// can't do anything else
			}
		});

		stickyNote.addEventListener('dblclick', () => {
			// move to the left
		});

		console.log(task);
	}

	// TODO: add support for a "color" option

	// TODO: single click should move to the right,
	//       double click should move to the left
}
