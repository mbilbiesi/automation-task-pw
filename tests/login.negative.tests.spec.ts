import test from './BaseTest';
import {describe} from 'node:test';

const scenarios = [
  {
    description: 'username is missing',
    username: '',
    password: 'secret_sauce',
    expectedError: 'Epic sadface: Username is required',
  },
  {
    description: 'password is missing',
    username: 'standard_user',
    password: '',
    expectedError: 'Epic sadface: Password is required',
  },
  {
    description: 'correct username with wrong password',
    username: 'standard_user',
    password: 'incorrectpassword',
    expectedError: 'Epic sadface: Username and password do not match any user in this service',
  },
  {
    description: 'wrong username with correct password',
    username: 'wrongusername',
    password: 'secret_sauce',
    expectedError: 'Epic sadface: Username and password do not match any user in this service',
  },
];

describe('Login Page Tests', () => {
  scenarios.forEach(scenario => {
    test(`login page - should display error upon ${scenario.description}`, async ({loginPage}) => {
      // When
      await loginPage.insertUsername(scenario.username);
      await loginPage.insertPassword(scenario.password);
      await loginPage.clickOnLogin();

      // Then
      await loginPage.verifyErrorMessage(scenario.expectedError, scenario.description);
    });
  });
});
