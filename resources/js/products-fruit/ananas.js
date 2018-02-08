
/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'box6-maltese-market.myshopify.com',
      apiKey: 'c06a52f4dd4af9d6c0dddc132a2bcd8b',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [491223449654],
        variantId: 6792944779318,
        node: document.getElementById('product-component-816a9a9f938'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "variantId": "6792944779318",
    "width": "240px",
    "isButton": false,
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "options": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "AGGIUNGI"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#329932",
        "padding-left": "10px",
        "padding-right": "10px",
        ":hover": {
          "background-color": "#2d8a2d"
        },
        ":focus": {
          "background-color": "#2d8a2d"
        }
      },
      "variantTitle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-size": "12px",
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "title": "Carrello",
      "total": "Subtotale",
      "notice": "I codici di spedizione e di sconto saranno aggiunti al momento del pagamento.",
      "button": "PAGAMENTO",
      "empty": "Il tuo carrello è vuoto"
    },
    "styles": {
      "button": {
        "background-color": "#329932",
        ":hover": {
          "background-color": "#2d8a2d"
        },
        ":focus": {
          "background-color": "#2d8a2d"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#329932",
        "padding-left": "10px",
        "padding-right": "10px",
        ":hover": {
          "background-color": "#2d8a2d"
        },
        ":focus": {
          "background-color": "#2d8a2d"
        }
      },
      "variantTitle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#329932",
        ":hover": {
          "background-color": "#2d8a2d"
        },
        ":focus": {
          "background-color": "#2d8a2d"
        }
      }
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Montserrat, sans-serif"
      },
      "select": {
        "font-family": "Montserrat, sans-serif"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
/*]]>*/