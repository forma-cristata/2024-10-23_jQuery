# Triangle Area Calculator

A simple web application that calculates the area of a triangle based on three side lengths. Built with both jQuery and vanilla JavaScript versions to demonstrate modern web development practices.

## Features

- Input three side lengths of any triangle
- Instant area calculation using Heron's Formula
- Dynamic result display that stacks multiple calculations
- Clean, responsive interface

## Technical Details

The project includes two implementations:

- jQuery Version: Showcases DOM manipulation and event handling using jQuery
- Vanilla JavaScript Version: Same functionality without dependencies

## Usage

Simply enter the three side lengths of your triangle and either click the calculate button or press enter. The area will be displayed below, rounded to one decimal place. You can perform multiple calculations, and results will stack in the order they were calculated.

## Math Behind the Scenes

Uses Heron's Formula for triangle area calculation: 

- Area = √s(s−a)(s−b)(s−c) where s = (a + b + c)/2
