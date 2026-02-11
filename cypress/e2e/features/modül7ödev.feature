Feature: Online Shopping Purchase

  Scenario: Kullanici bir ürünü arama ve satin almayi basariyla gerceklestirmesi
   Given Kullanici "https://automationexercise.com/login" urlsine gider
   When Kullanici email alanina "semasl41@hotmail.com" mailini girmistir  
   And Kullanici password alanina "123456" sifresini girmistir
   And Kullanici Login butonuna tiklamistir
   And Kullanici basarili bicimde login oldugunu dogrular 
   And Kullanici anasayfada Products butonuna tiklar
   And Kullanici categorilerden WOMEN acilir penceresine tiklar 
   And Kullanici acilir pencereden DRESS butonuna tiklar
   And Kullanici istedigi elbisede View Product butonuna basar 
   And Kullanici add to charta basar 
   And Kullanici Pop up penceresinde View Cart butonuna tiklar 
   And Kullanici acilan sayfada Proceed To Checkout butonuna tiklar 
   And Kullanici Place Order butonuna tiklar 
   And Kullanici Name on Card alanina "SemAsl" kart bilgisi girer
   And Kullanici Card Number alanina "4111111111111111" numarasi girer 
   And Kullanici CVC alanina "123" bilgisi girer
   And Kullanici Expiration alanina "12" month bilgisi girer 
   And Kullanici Expiration alanina "2025" year bilgisi girer
   And Kullanici Pay and Confirm Order butonuna tiklar
   Then Kullanici basarili sekilde order place ekranina geldigini dogrular


