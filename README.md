# Death Premium Calculator

It calculates the Monthly Death Premium Amount for a Member based on the user age, occupation and death-sum insured amount.

Formula Used :
Monthly Death Premium Calculation = (Death Cover amount * Occupation Rating Factor * Age) /1000 * 12

#### Validations Included :

1. All the input fields are required.
2. Based on the date of birth entered in the input, 'age' will be calculated and displayed in the field.
3. On change of the Occupation selection and click on Calculate button, the monthly death premium amount varies.

## Installation and Run the Project
### Prerequisites
To get started locally, follow these instructions:
1. Clone to your local computer using git, can be done in Visual Studio.
2. Install Node.js which includes Node Package Manager
3. $ npm install

## Setting Up a Project

### Install the Angular CLI globally:

npm install -g @angular/cli

### Run the application:

cd PremiumCalculator <br/>
cd ClientApp <br/>
npm start

### Testing

#### Unit testing:
 1. Launch the application and check manually.
 2. Unit test cases are written as oremium-calculator.component.spec.ts and handled the validations and happy path test case. To view those assertions, run the below commands.
  
      cd PremiumCalculator <br/>
      cd ClientApp <br/>
      npm test

### Technologies Used

Project is created with:
1. Generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.
2. To execute the unit tests via [Karma](https://karma-runner.github.io) with testing framework 'Jasmine'.
3. .Net Core Web Api




