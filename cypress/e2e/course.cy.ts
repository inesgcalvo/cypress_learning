describe("User flow to complete a course", () => {
  it("the user begins a course", () => {
    cy.visit("http://localhost:3000")
    cy.getByData("course-0").find("a").contains("Get started").click()
  })
})
