describe('Login specs', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByLabelText('Usuario *').type('admin');
    cy.findByLabelText('Contraseña *').type('test');
    cy.findByRole('button', { name: 'Login' }).click();
    cy.findByText('Empleados').click();
  });

  it('should fetch employees list greater than 0 when show it in screen when visit /employees url', () => {
    // Arrange

    // Act

    // Assert
    cy.findAllByRole('listitem').should('have.length.greaterThan', 0);
  });

  it('should navigate to employee 2 when it clicks in edit button of second row', () => {
    // Arrange

    // Act
    cy.findAllByRole('button', { name: 'Edit employee' }).then(buttons =>
      buttons[1].click()
    );

    // Assert
    cy.url().should('eq', 'http://localhost:8080/#/employees/2');
  });
});
