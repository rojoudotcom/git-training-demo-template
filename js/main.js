// ================================
// みんなのレシピ - メインスクリプト
// ================================

// レシピ検索機能
document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("search-input");
  var recipeList = document.getElementById("recipe-list");

  if (!searchInput || !recipeList) return;

  searchInput.addEventListener("input", function () {
    var keyword = searchInput.value.toLowerCase();
    var cards = recipeList.querySelectorAll(".recipe-card");

    cards.forEach(function (card) {
      var title = card.querySelector("h3").textContent.toLowerCase();
      var description = card.querySelector("p").textContent.toLowerCase();

      if (title.includes(keyword) || description.includes(keyword)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
