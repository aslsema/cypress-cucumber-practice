class ShoppingPage {

    url = 'https://automationexercise.com/login';
    
    email = 'input[data-qa="login-email"]';
    password = 'input[data-qa="login-password"]';
    loginButton = 'button[data-qa="login-button"]';
    productsButton = 'a[href="/products"]';
    womenButton = 'a[href="#Women"]';
    dressButton = 'a[href="/category_products/1"]';
    viewProductButton = 'a[href="/product_details/38"]';
    addTocartButton = 'button.cart';
    //viewCartButton = // cy.contains('View Cart').click()
    proceedToCheckoutButton = 'a.btn.check_out';
    placeOrderButton = 'a[href="/payment"]'; //burda öncee cy.contains('Place Order').scrollIntoView() 
    nameOnCardInput = 'input[data-qa="name-on-card"]';
    cardNumberInput = 'input[data-qa="card-number"]';
    cvcInput = 'input[data-qa="cvc"]';
    expiryMonthInput = 'input[data-qa="expiry-month"]';
    expiryYearInput = 'input[data-qa="expiry-year"]';
    payAndConfirmOrderButton = 'button[data-qa="pay-button"]';
    //orderPlacedText = //cy.url().should('include', '/payment_done/') YA DA cy.contains('Order Placed').should('be.visible') tarzı bir şey



    urlGit() {
        cy.visit(this.url);
    }

    emailGonder(mail) {
        cy.get(this.email).type(mail);
    }

    passwordGonder(pass) {
        cy.get(this.password).type(pass);
    }

    clickLoginButton() {
       cy.get(this.loginButton).click();
    }

    clickProductsButton() {
       cy.get(this.productsButton).click();
    }

    clickWomenButton() {
       cy.get(this.womenButton).click();
    }

    clickDressButton() {
       cy.get(this.dressButton).click();
    }

    clickViewProductButton() {
       cy.get(this.viewProductButton).click();
    }

    clickAddToCartButton() {
       cy.get(this.addTocartButton).click();
    }

    clickViewCartButton() {
       cy.contains('View Cart').click();
    }

    clickProceedToCheckoutButton() {
       cy.get(this.proceedToCheckoutButton)
         .contains('Proceed To Checkout')
         .click();
    }

    clickPlaceOrderButton() {
       cy.get(this.placeOrderButton).click();
    }

    enterNameOnCard(name) {
       cy.get(this.nameOnCardInput).type(name);
    }

    enterCardNumber(cardNumber) {
       cy.get(this.cardNumberInput).type(cardNumber);
    }

    enterCVC(cvc) {
       cy.get(this.cvcInput).type(cvc);
    }

    enterExpiryMonth(month) {
       cy.get(this.expiryMonthInput).type(month);
    }

    enterExpiryYear(year) {
       cy.get(this.expiryYearInput).type(year);
    }

    clickPayAndConfirmOrderButton() {
       cy.get(this.payAndConfirmOrderButton).click();
    }

};

export default new ShoppingPage();

