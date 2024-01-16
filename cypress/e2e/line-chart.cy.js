const url = 'http://localhost:5173/tasks/01-line-chart/index.html';

describe('Line chart', () => {
  it('Should render axis X correctly', () => {
    cy.visit(url);
    cy.get('.canvas:nth-child(1)').matchImageSnapshot();
  });

  it('Should render axis Y correctly', () => {
    cy.visit(url);
    cy.get('.canvas:nth-child(2)').matchImageSnapshot();
  });
});
