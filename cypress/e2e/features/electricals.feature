Feature: Electricals

    Feature Customer can view and buy various electrical products
    Background:
        Given A Customer is on the John Lewis Home Page
    @JL
    Scenario: Customer hovers over Electricals link and selects Televisions
        When Customer hovers over Electricals link
        When Customer clicks on Televisions link
        Then The Televisions page will be displayed

   # Scenario: Customer selects Samsung brand to view products
      #  And Customer hovers over Electricals link
       # And Customer clicks on Televisions link
      #  And The Televisions page will be displayed
      #  When Customer selects Samsung brand
       # Then Page should only display Samsung products

  #  Scenario: Customer selects most expensive Samsung television and adds to basket
       # And Customer hovers over Electricals link
       # And Customer clicks on Televisions link
       # And The Televisions page will be displayed
       # And Customer selects Samsung brand
      #  And Page should only display Samsung products
      #  When Customer views most expensive television
      #  And adds to basket
      #  Then basket will contain 1 item

  #scenraio covering an api test for the page status and another for returning the correct product name/code    

