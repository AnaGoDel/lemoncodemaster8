describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });

  it('should name input has the focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.visit('/');

    // Assert
    cy.findByLabelText('Usuario *').as('userInput');
    cy.get('@userInput').click();
  });

  it('should show an error when type invalid credentials', () => {
    // Arrange
    const user: string = 'admin';
    const password: string = '1234';
    // cy.on(useSnackbarContext(), cy.stub().as('showMessageStub'));

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.findByRole('button', { name: 'Login' }).as('loginButton');

    // Assert

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get('@loginButton').click();
    cy.findByText('Usuario y/o password no válidos');
  });

  it('should navigate to submodule-list url when type valid credentials', () => {
    // Arrange
    const user: string = 'admin';
    const password: string = 'test';

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.findByRole('button', { name: 'Login' }).as('loginButton');

    // Assert

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get('@loginButton').click();
    cy.url().should('eq', 'http://localhost:8080/#/submodule-list');
  });
});
