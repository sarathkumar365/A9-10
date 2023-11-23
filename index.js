document.addEventListener('DOMContentLoaded', function () {
    // canvas and context
    var canvas = document.getElementById('main');
    var context = canvas.getContext('2d');

    // default brush color
    var currentColor = 'black';

    //  size slider and display
    var slider = document.getElementById('slider');
    var brushSizeDisplay = document.getElementById('brushSize');

    // initial brush size
    var brushSize = slider.value;
    brushSizeDisplay.textContent = brushSize;

    // event listener for brush size slider
    slider.addEventListener('input', function () {
        brushSize = slider.value;
        brushSizeDisplay.textContent = brushSize;
    });

    // event listener for color buttons
    document.getElementById('blue').addEventListener('click', function () {
        currentColor = '#2979FF'; // Blue color
    });

    document.getElementById('black').addEventListener('click', function () {
        currentColor = '#000000'; // Black color
    });

    document.getElementById('pink').addEventListener('click', function () {
        currentColor = '#F50057'; // Pink color
    });

    document.getElementById('yellow').addEventListener('click', function () {
        currentColor = '#FFD600'; // Yellow color
    });

    // Event listener for erase button
    document.getElementById('erase').addEventListener('click', function () {
        currentColor = '#ffffff'; // White color for erasing
    });

    // event listeners for canvas drawing
    var isDrawing = false;

    canvas.addEventListener('mousedown', function (event) {
        isDrawing = true;
        draw(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
    });

    canvas.addEventListener('mousemove', function (event) {
        if (isDrawing) {
            draw(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
        }
    });

    canvas.addEventListener('mouseup', function () {
        isDrawing = false;
        context.beginPath();
    });

    // function to draw on the canvas
    function draw(x, y) {
        context.lineWidth = brushSize;
        context.lineCap = 'round';
        context.strokeStyle = currentColor;

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }
});
