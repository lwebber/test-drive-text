$(document).ready(() => {
    $('#text').on('keyup', (event) => {
        let value = $(event.currentTarget).val();
        $('.preview').html(value);
    });

    $('#font').on('change', (event) => {
        let value = $(event.currentTarget).val();
        $('.preview').css('fontFamily', value);
    });

    $('#weight').on('change', (event) => {
        let value = $(event.currentTarget).val();
        $('.preview').css('fontWeight', value);
    });

    $('#size').on('keyup', (event) => {
        let fontSize = $(event.currentTarget).val();
        $('.preview').css('fontSize', fontSize + 'px');
    });

})