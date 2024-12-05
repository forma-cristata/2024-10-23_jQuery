$(document).ready(function()
{
   $('form').submit(function(e)
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
    let a = parseFloat($('#side_1_inp').val());
    let b = parseFloat($('#side_2_inp').val());
    let c = parseFloat($('#side_3_inp').val());
    let s = (a+b+c) / 2;
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
    let resultElement = $('<h3>').html(`<em>${area} units<sup>2</sup></em>`);
    resultElement.css("color", "#4a51bc");
    resultElement.attr("id", "results");
    $('#calculate-btn').append(resultElement);
}