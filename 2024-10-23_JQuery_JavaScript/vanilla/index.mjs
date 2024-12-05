document.addEventListener("DOMContentLoaded", () =>
{
    document.getElementsByTagName('form')[0].addEventListener('submit', (e) =>
    {
        e.preventDefault();
       outputResults(getArea());
    });
});

/**
 * Calculates the area of a triangle given 3 sides.
 * @returns {number}
 */
function getArea()
{
    let a = parseFloat(document.getElementById("side_1_inp").value);
    let b = parseFloat(document.getElementById("side_2_inp").value);
    let c = parseFloat(document.getElementById("side_3_inp").value);
    let s = (a+b+c)/2
    return Math.sqrt(s * (s-a) * (s-b) * (s-c));
}

/**
 * Creates an element to output the results of the calculation to the user
 * Adds this element to the form
 * @param area
 */
function outputResults(area)
{
    area = area.toPrecision(4);
    let resultElement = document.createElement('h3');
    resultElement.innerHTML = `<em>${area} units<sup>2</sup></em>`;
    resultElement.style.color = "#4a51bc"
    resultElement.id = "results";
    document.querySelector('form').appendChild(resultElement);
}




