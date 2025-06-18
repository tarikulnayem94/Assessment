Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import LoginPage from '../pages/HomePage';
import DashboardPage from '../pages/ProductPage';

