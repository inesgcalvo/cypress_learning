describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {

    const courseTests = [{
      selector: 'course-0',
      title: 'Testing Your First Next.js Application',
      pathname: '/testing-your-first-application'
    },
    {
      selector: 'course-1',
      title: 'Testing Foundations',
      pathname: '/testing-foundations'
    },
    {
      selector: 'course-2',
      title: 'Cypress Fundamentals',
      pathname: '/cypress-fundamentals'
    }]

    courseTests.forEach(({selector, title, pathname}) => {
      specify(title, () => {
        cy.getByData(selector).find("a").contains("Get started").click()
        cy.location("pathname").should("equal", pathname)
      })
    })
  })
})
