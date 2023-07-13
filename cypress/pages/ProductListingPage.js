export default class ProductListingPage {
    // Define locators and elements on the page
    static highestPriceItem = '.product-listing-container .product .price';
  
    // Function to select the highest priced item
    static selectHighestPricedItem() {
      // Get all the prices on the page
      cy.get(ProductListingPage.highestPriceItem).then(($prices) => {
        // Find the highest priced item
        let highestPrice = 0;
        let highestPriceItemIndex = 0;
  
        $prices.each((index, element) => {
          const price = parseFloat(element.innerText.replace('£', ''));
          if (price > highestPrice) {
            highestPrice = price;
            highestPriceItemIndex = index;
          }
        });
  
        // Click on the highest priced item
        cy.get(ProductListingPage.highestPriceItem).eq(highestPriceItemIndex).click();
      });
    }
  }
  