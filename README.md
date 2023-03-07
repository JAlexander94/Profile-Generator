# Profile-Generator

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- Create a working Node.js command-line application that will take in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

The project specifically wanted the user to be able to:

- Input 3 types of employee; a manager, an engineer and an intern
- All should have a name, id and email
- The manager should also have an office number, the engineer should also have a github username an dthe intern should also have a school

## Installation

The application is invoked by using node index.js in the command-line

## Usage

A user generates a webpage that displays their team's basic info so that they have quick access to their emails, GitHub profiles and schools by running node index.js in the command-line and then following the prompts until all their teams details are inputted.


![screenshot of the webpage that is created]()
![screenshot of the command-line as it is prompting the user to answer questions about the team and whther to add more team member or finish building the team]()


## License

MIT License

Copyright (c) [2023] [Joshua Alexander]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Tests

The application is tested using jest tests which can be run using npm test in the command line which evaluates the tests in the tests folder.
As a user you can test int by running the application and evaluating the HTML output.
