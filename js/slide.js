$('.slider').slick({
    autoplay: true, //自動
    infinite: true, //ループ
    speed: 500, //スピード
    slidesToShow: 3, //スライドを画面に3枚見せる
    slidesToScroll: 1, //一回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
    centerMode: true, //要素を中央揃え
    variableWidth: true, //幅の違う画像の高さを揃えて表示
    dots: true, //下部ドットナビゲーションの表示
});

