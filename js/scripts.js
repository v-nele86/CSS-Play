$(document).ready(function(){

    //Hamburger button open/close
    $('.hamburger__menu__btn').click(function(){
        $(this).toggleClass('hamburger--opened');
        $('.main__menu').toggleClass('menu--opened');
        $('.body__overlay').fadeToggle();
        $('.header__cart__field').removeClass('cart--opened');
        $('.header__search__field').slideUp();
    });
    //Header search open/close
    $('.header--search .header__icon').click(function(){
        $('.header__search__field').slideToggle();
        $('.body__overlay').fadeToggle();
        $('.header__cart__field').removeClass('cart--opened');
        $('.main__menu').removeClass('menu--opened');
    });
    //Header shopping cart open/close
    $('.header--cart .header__icon').click(function(){
        $('.header__cart__field').toggleClass('cart--opened');
        $('.body__overlay').fadeToggle();
        $('.header__search__field').slideUp();
        $('.main__menu').removeClass('menu--opened');
    });
    $('.header__cart__close').click(function(){
        $('.header__cart__field').removeClass('cart--opened');
    });
    //Body overlay closes everything
    $('.body__overlay').click(function(){
        $(this).fadeOut();
        $('.header__search__field').slideUp();
        $('.main__menu').removeClass('menu--opened');
        $('.header__cart__field').removeClass('cart--opened');
    });


    


    





});// ------------------------------------- END ------------------------------------- //