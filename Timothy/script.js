CreateLayout();
CreateGrid();
CreateUI();

function CreateLayout() {
    const layout = document.createElement('div');
    layout.setAttribute("class", "layout");
    document.body.appendChild(layout);
}

function CreateGrid() {
    const size = 9;

    const box = document.createElement('div');
    box.setAttribute("class", "grid");
    document.querySelector(".layout").appendChild(box);

    for (let i = 0; i < size; i++) {
        const grid = document.createElement('div');
        grid.setAttribute("id", 'g_' + i);
        document.querySelector(".grid").appendChild(grid);
    }
}

function CreateUI() {
    const start = document.createElement('button');
    start.setAttribute("type", "button");
    start.setAttribute("class", "start");
    start.innerHTML = "Start";
    document.querySelector(".layout").appendChild(start);
    
    const reset = document.createElement('button');
    reset.setAttribute("type", "button");
    reset.setAttribute("class", "reset");
    reset.innerHTML = "Reset";
    document.querySelector(".layout").appendChild(reset);

    const log = document.createElement('input');
    log.setAttribute("type", "text");
    log.setAttribute("class", "log");
    log.readOnly = true;
    document.querySelector(".layout").appendChild(log);
}

