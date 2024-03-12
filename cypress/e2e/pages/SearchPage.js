class SearchPage {

    elements = {
        searchField : () => cy.get("#searchfieldDetail"),
        selectByType : () => cy.get("[name='docType']"),
        hitFoundParagraph : () => cy.get("p").contains("hits for"),
        resultInfoBlock: () => cy.get('.har-search__result--info'),
        resultProductBlock: () => cy.get('.har-search__result--product'),
    }

    urlContainsQuery(query) {
        cy.url().should('include', `search?query=${query}`)
    }

    searchFieldHasValue(value) {
        this.searchFieldIsVisible()
        this.elements.searchField().should('have.value', value)
    }

    searchFieldIsVisible() {
        this.elements.searchField().should('be.visible')
    }

    filterByTypeSelectIsVisible() {
        this.elements.selectByType().should('be.visible')
    }

    checkFoundMoreThanZeroHits() {
        this.elements.hitFoundParagraph().invoke('text').then((text) => {
            const hitCount = parseInt(text.match(/(\d+)/)[0], 10);
            expect(hitCount).to.be.greaterThan(0);
        });
    }

    waitForResultInformationBlockContainsText(text) {
        this.elements.resultInfoBlock().should('contain.text', text)
    }

    waitForResultProductBlockContainsText(text) {
        this.elements.resultProductBlock().should('contain.text', text)
    }
}

module.exports = new SearchPage();