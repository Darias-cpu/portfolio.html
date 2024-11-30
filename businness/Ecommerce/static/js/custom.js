$(document).ready(function () {

    $('.increment-btn').click(function (e) {
        e.preventDefault();

        var inc_value = $(this).closest('.product_data').find('.qty-input').val();
        var value = parseInt(inc_value, 10);
        value = isNaN(value) ? 0 : value; // Corrected 'isNan' to 'isNaN'

        if (value < 10) { // Ensure the quantity does not exceed 10
            value++;
            $(this).closest('.product_data').find('.qty-input').val(value);
        }
    });

    $('.decrement-btn').click(function (e) {
        e.preventDefault();

        var dec_value = $(this).closest('.product_data').find('.qty-input').val();
        var value = parseInt(dec_value, 10);
        value = isNaN(value) ? 0 : value; // Corrected 'isNan' to 'isNaN'

        if (value > 1) { // Ensure the quantity does not exceed 10
            value--;
            $(this).closest('.product_data').find('.qty-input').val(value);
        }
    });

});
