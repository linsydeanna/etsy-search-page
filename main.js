$(document).ready(function() {

    var etsyData;

    function searchProduct(product) {
        return `<li><a href="${product.url}"><img src="${product.Images[0].url_75x75}"></a>${product.price} ${product.title}</li>`
    }

    $('#search-button').click(function() {
        api_key = apitoken;
        terms = $("#search").val();
        etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" +
            terms + "&limit=12&includes=Images:1&api_key=" + api_key;

        $.ajax({
            url: etsyURL,
            dataType: 'jsonp',
            success: function(data) {
                etsyData = data.results;
                console.log(data);
                var items = etsyData.map(searchProduct);
                $("#display-items").html(items.join("\n"));
            }
        });
    });
});
