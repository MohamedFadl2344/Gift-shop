
// ======================== عرض المنتجات بشكل تلقائي ===========================

document.addEventListener('DOMContentLoaded', function () {
    
    const products = [
        {
            name: "Ring",
            price: "$200",
            image: "assets/images/p1.png",
        },
        {
            name: "Watch",
            price: "$300",
            image: "assets/images/p2.png",
        },
        {
            name: "Teddy Bear",
            price: "$110",
            image: "assets/images/p3.png",
        },
        {
            name: "Flower Bouquet",
            price: "$45",
            image: "assets/images/p4.png",
        },
        {
            name: "Teddy Bear",
            price: "$95",
            image: "assets/images/p5.png",
        },
        {
            name: "Flower Bouquet",
            price: "$70",
            image: "assets/images/p6.png",
        },
        {
            name: "Watch",
            price: "$400",
            image: "assets/images/p7.png",
        },
        {
            name: "Ring",
            price: "$450",
            image: "assets/images/p8.png",
        },
    ];

    const productsContainer = document.getElementById("productsContainer");

    const initialProductCount = 8; 

    for (let i = 0; i < initialProductCount && i < products.length; i++) {
        const product = products[i];
        appendProduct(product);
    }

    const viewProductsButton = document.querySelector(".btn-box a");

    viewProductsButton.addEventListener('click', function (event) {
        event.preventDefault(); 

        const startIndex = productsContainer.children.length;
        for (let i = startIndex; i < startIndex + 4 && i < products.length; i++) {
            const product = products[i];
            appendProduct(product);
        }

        if (startIndex + 4 >= products.length) {
            viewProductsButton.style.display = 'none';
        }
    });

    function appendProduct(product) {
        const productDiv = document.createElement("div");
        productDiv.className = "col-sm-6 col-md-4 col-lg-3";
        productDiv.innerHTML = `
            <div class="box">
                <div class="cart-icon">
                <a href="#"><i class="fas fa-shopping-cart"></i></a>
                </div>
                <a href="">
                    <div class="img-box">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="detail-box">
                        <h6>${product.name}</h6>
                        <h6>Price <span>${product.price}</span></h6>
                    </div>
                    <div class="new">
                        <span>New</span>
                    </div>
                </a>
                <div class="rating-icon" id="rating-1" data-rating="0">
                <a href="#" data-index="1">
                  <i class="fas fa-star"></i>
                </a>
                <a href="#" data-index="2">
                  <i class="fas fa-star"></i>
                </a>
                <a href="#" data-index="3">
                  <i class="fas fa-star"></i>
                </a>
                <a href="#" data-index="4">
                  <i class="fas fa-star"></i>
                </a>
                <a href="#" data-index="5">
                  <i class="fas fa-star"></i>
                </a>
              </div>
            </div>
        `;
        productsContainer.appendChild(productDiv);
    }
});

document.addEventListener('DOMContentLoaded', function () {

    const ratingIcons = document.querySelectorAll('.rating-icon');

    ratingIcons.forEach(function (ratingIcon) {

        const starLinks = ratingIcon.querySelectorAll('a');

        const productId = ratingIcon.getAttribute('id');

        let currentRating = 0;
        const storedRating = localStorage.getItem(`rating-${productId}`);
        if (storedRating !== null) {
            currentRating = parseInt(storedRating);
        }

        starLinks.forEach(function (starLink, index) {
            starLink.addEventListener('click', function (event) {
                event.preventDefault(); 

                const rating = index + 1;

                if (rating === currentRating) {
                    return;
                }

                currentRating = rating;

                starLinks.forEach(function (link, starIndex) {
                    if (starIndex < currentRating) {
                        link.style.color = 'gold'; 
                    } else {
                        link.style.color = 'gray'; 
                    }
                });

                localStorage.setItem(`rating-${productId}`, currentRating.toString());
            });

            if (index < currentRating) {
                starLink.style.color = 'gold'; 
            } else {
                starLink.style.color = 'gray';
            }
        });
    });
});

// ==================== اظهار واخفاء القائمه الجانبيه=====================

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebar-wrapper");
    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("d-none");
    });

});

// ============================= login and singup =============================
function togglePassword(inputId) {
    var passwordField = document.getElementById(inputId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
function showLoginForm() {
    $("#login-form, #formToggle").toggle();
    $("#signup-form, #createAccountLink").toggle();
}
$(document).ready(function () {
    $("#toggleSignup").click(function () {
        $("#login-form, #formToggle").toggle();
        $("#signup-form, #createAccountLink").toggle();
    });
});


// ================================== search ============================

  // انتظر حتى يتم تحميل المستند
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");

    // تحديث اتجاه البحث بناءً على حالة Caps Lock
    function updateSearchDirection() {
      const capsLockEnabled = isCapsLockOn(event.getModifierState("CapsLock"));
      
      if (capsLockEnabled) {
        searchInput.dir = "ltr"; // الكتابة من اليسار لليمين (الإنجليزية)
      } else {
        searchInput.dir = "rtl"; // الكتابة من اليمين لليسار (العربية)
      }
    }

    // رصد تغييرات لوحة المفاتيح
    searchInput.addEventListener("textInput", updateSearchDirection);
    searchInput.addEventListener("input", updateSearchDirection);

    // تحقق مما إذا كانت Caps Lock مفعلة أم لا
    function isCapsLockOn(state) {
      return state;
    }
  });









