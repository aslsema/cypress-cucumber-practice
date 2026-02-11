import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ShoppingPage from '../../pages/modül7ödevPage';

Given('Kullanici {string} urlsine gider', (url) => {
    cy.visit(url);
});

When('Kullanici email alanina {string} mailini girmistir', (email) => {
 ShoppingPage.emailGonder(email);
});

When('Kullanici password alanina {string} sifresini girmistir', (password) => {
 ShoppingPage.passwordGonder(password);
});

When('Kullanici Login butonuna tiklamistir', () => {
 ShoppingPage.clickLoginButton();
});

When('Kullanici basarili bicimde login oldugunu dogrular', () => {
cy.contains('Login').should('not.exist');
});

When('Kullanici anasayfada Products butonuna tiklar', () => {
 ShoppingPage.clickProductsButton();
});

When('Kullanici categorilerden WOMEN acilir penceresine tiklar', () => {
 ShoppingPage.clickWomenButton();
});

When('Kullanici acilir pencereden DRESS butonuna tiklar', () => {
  ShoppingPage.clickDressButton();
  });

When('Kullanici istedigi elbisede View Product butonuna basar', () => {
  ShoppingPage.clickViewProductButton();
});

When('Kullanici add to charta basar', () => {
  ShoppingPage.clickAddToCartButton();
});

When('Kullanici Pop up penceresinde View Cart butonuna tiklar', () => {
 ShoppingPage.clickViewCartButton();
});

When('Kullanici acilan sayfada Proceed To Checkout butonuna tiklar', () => {
 ShoppingPage.clickProceedToCheckoutButton();
});


When('Kullanici Place Order butonuna tiklar', () => {
 ShoppingPage.clickPlaceOrderButton();
});

When('Kullanici Name on Card alanina {string} kart bilgisi girer', (name) => {
 ShoppingPage.enterNameOnCard(name);
});

When('Kullanici Card Number alanina {string} numarasi girer', (cardNumber) => {
 ShoppingPage.enterCardNumber(cardNumber);
});

When('Kullanici CVC alanina {string} bilgisi girer', (cvc) => {
 ShoppingPage.enterCVC(cvc);
});

When('Kullanici Expiration alanina {string} month bilgisi girer', (month) => {
 ShoppingPage.enterExpiryMonth(month);
});

When('Kullanici Expiration alanina {string} year bilgisi girer', (year) => {
 ShoppingPage.enterExpiryYear(year);
});

When('Kullanici Pay and Confirm Order butonuna tiklar', () => {
 ShoppingPage.clickPayAndConfirmOrderButton();
});

Then('Kullanici basarili sekilde order place ekranina geldigini dogrular', () => {
 cy.contains('Order Placed').should('be.visible');
});

