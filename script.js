var board = document.createElement('div');
board.className = 'board';

var gradient = document.createElement('div');
gradient.className = 'gradient';

var image = document.createElement('img');
image.src = 'image.png';
image.alt = ' ';

var title = document.createElement('div');
title.className = 'title';
title.textContent = 'My title';

var description = document.createElement('div');
description.className = 'description';
description.textContent = 'No description yet';

board.appendChild(gradient);
board.appendChild(image);
board.appendChild(title);
board.appendChild(description);

boardContainer.appendChild(board);

