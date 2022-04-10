# Salary Calculator

## An application that records employee salaries and adds salaries up to report monthly costs.

_Duration: 3 Days_

This project was the first weekend challenge in the Prime Digital Academy Full Stack Engineering program. The assignment was to create a salary calculator to take in employees' annual salary and return an overall monthly cost. 

To meet this challenge, I began with an array of dummy data. Because I knew I was going to be using a variety of functions to create new objects and append them to the DOM, I wanted to give myself information to work with that would help me conceptualize the use-case for this app. 

My next step was to build out the HTML. At the beginning, I spent more time than I needed to considering where and how elements would be used in the future. Later, I ended up moving these same elements around and reclassifying them, which made my initial planning feel a little silly. 

In order to add new employee data to the DOM, I created a function which generates a new employee object from the input form and pushes that object into an array of employees. Another function loops through that array and appends it to the table on the DOM. A third function loops through the array again and calculates the total annual salary for all employees in the array and divides it by 12, returning the overall monthly cost for employees in the array.

My biggest challenge while working on this project was mastering the syntax for click handlers. Although I feel confident with data and dom manipulation using jQuery, event handling is still tricky, particularly when running multiple functions off a single click. 

Currently, removing employees only deletes the information from the DOM and does **not** remove the employee from the array, nor their salary from the calculated total. This is by nature of the assignment and if I were not sick with covid I would have liked to have made more progress on that functionality. 

## Screen Shot

[PREVIEW](salarycalculator.png)


## Usage
To use this application, follow the steps below:

1. Enter employee data into the form on the left-hand side of the page.
2. Press submit.
3. Watch the magic.
4. Consider deleting an employee!

## Built With

- HTML
- CSS
- JavaScript
- jQuery


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special thanks to the members of the Dahl cohort for support and coworking throughout the project.

## Support
If you have suggestions or issues, please email me at [meirsedlis@gmail.com](www.google.com)