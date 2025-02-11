document.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;

    const xColor = x > 500 ? `<span style="color: red;">X: ${x}</span>` : `X: ${x}`;
    const yColor = y > 500 ? `<span style="color: red;">Y: ${y}</span>` : `Y: ${y}`;
    const coordinatesText = `${xColor}, ${yColor}`;

    document.body.innerHTML = coordinatesText; 
});
