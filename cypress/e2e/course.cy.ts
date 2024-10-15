describe("User flow to complete a course", () => {
  it("the user begins a course", () => {
    cy.visit("http://localhost:3000")
    cy.getByData("course-0").find("a").contains("Get started").click()
    cy.location("pathname").should("equal", '/testing-your-first-application')
    cy.getByData("next-lesson-button").contains('Start Course').click()
    cy.location("pathname").should("equal", '/testing-your-first-application/app-install-and-overview')
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").contains('Next Lesson').click()
    cy.location("pathname").should("equal", '/testing-your-first-application/installing-cypress-and-writing-our-first-test')
  })
})
