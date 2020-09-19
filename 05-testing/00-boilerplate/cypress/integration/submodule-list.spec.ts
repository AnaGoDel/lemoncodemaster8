describe('Submodule list specs', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByLabelText('Usuario *').type('admin');
    cy.findByLabelText('Contraseña *').type('test');
    cy.findByRole('button', { name: 'Login' }).click();
  });

  it('shoul navigate to Employees List when it clicks employees icon', () => {
    // Arrange

    // Act
    cy.findByText('Empleados').as('employeesIcon');

    // Assert
    cy.get('@employeesIcon').click();
    cy.url().should('eq', 'http://localhost:8080/#/employees');
  });

  it('shoul navigate to Projects List when it clicks projects icon', () => {
    // Arrange

    // Act
    cy.findByText('Proyectos').as('projectsIcon');

    // Assert
    cy.get('@projectsIcon').click();
    cy.url().should('eq', 'http://localhost:8080/#/projects');
  });
});
