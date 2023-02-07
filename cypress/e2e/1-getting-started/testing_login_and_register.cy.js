/// <reference types='cypress' />

describe("linkedin", () => {
  it("devem poder realizar um cadastro.", () => {
    // cada it representa um teste
    cy.visit("https://www.linkedin.com/reg/join"); // visita uma parte de uma pagina
    // cy.get = busca um elemento
    // .type = insere um texto
    cy.get("#email-or-phone").type("teste_cypress@gmail.com");
    cy.get("#password").type("200300400500600");
    cy.get(".join-form__show-password-btn").click(); // exibe a senha
    cy.get("#join-form-submit").click(); // clica no botão de acordo
    cy.get("#first-name").type("testing_cypress");
    cy.get("#last-name").type("cypress");
    cy.get("#join-form-submit").click(); // clica no botão de continuar
  });
  it("devem poder realizar um login.", () => {
    // cada it representa um teste
  });
});
