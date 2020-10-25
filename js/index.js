
var certifySwiper1 = new Swiper('#swiper-one', {
watchSlidesProgress: true,
slidesPerView: 'auto',
centeredSlides: true,
loop: true,
loopedSlides: 4,
autoplay: true,
navigation: {
    nextEl: '.next-1',
    prevEl: '.prev-1',
},

pagination: {
    el: '.swiper-pagination-1',
    clickable :true,
},
on: {
    progress: function (progress) { //当swiper 位置改变的时候触发
    for (i = 0; i < this.slides.length; i++) {//循环判断每一个slides

        var slide = this.slides.eq(i);//每一个slides
        var slideProgress = this.slides[i].progress;//当前slides的当前位置
        // console.log(Math.abs(slideProgress));
        var modify = 1;
        
        // slide.removeClass("my-slide");
        if (Math.abs(slideProgress) > 1) {//当前slides不是 选中的那个slides的话
            modify = (Math.abs(slideProgress) - 1) * 1.2 + 1;
            // slide.addClass("my-slide");
            // slide.attr("page-index-bg");
        }
        // translate = slideProgress * modify * 260 + 'px'; // slides 偏移的距离
        translate = slideProgress * modify * 210/7.5 + 'vw'; // slides 偏移的距离
        // scale = 1 - Math.abs(slideProgress) /14;// slides 缩放的倍数
        scale = 1 - Math.abs(slideProgress) /14;// slides 缩放的倍数
        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
        slide.transform('translateX(' + translate + ') scale(' + scale + ')');

        slide.css('zIndex', zIndex);
        slide.css('opacity', 1);
        if (Math.abs(slideProgress) > 2) {//除了当前选中的slides 前后 一个以外的其他slides
        slide.css('opacity', 0);
        }
    }
    

    },
    slideChange: function(){
        for(let i=0;i<this.slides.length;i++) {
            this.slides[i].classList.add("my-slide");
        }
        this.slides[this.activeIndex].classList.remove("my-slide");
    },

    setTransition: function (transition) {
    for (var i = 0; i < this.slides.length; i++) {
    var slide = this.slides.eq(i)
    slide.transition(transition);
    }
    }
}
})

var certifySwiper2 = new Swiper('#swiper-two', {
watchSlidesProgress: true,
slidesPerView: 'auto',
centeredSlides: true,
loop: true,
loopedSlides: 4,
autoplay: true,
navigation: {
    nextEl: '.next-2',
    prevEl: '.prev-2',
},

pagination: {
    el: '.swiper-pagination-2',
    clickable :true,
},
on: {
    progress: function (progress) { //当swiper 位置改变的时候触发
    for (i = 0; i < this.slides.length; i++) {//循环判断每一个slides

        var slide = this.slides.eq(i);//每一个slides
        var slideProgress = this.slides[i].progress;//当前slides的当前位置
        // console.log(Math.abs(slideProgress));
        var modify = 1;
        if (Math.abs(slideProgress) > 1) {//当前slides不是 选中的那个slides的话
        modify = (Math.abs(slideProgress) - 1) * 1.2 + 1;   
        }
        translate = slideProgress * modify *  210/7.5 + 'vw'; // slides 偏移的距离
        scale = 1 - Math.abs(slideProgress) /14;// slides 缩放的倍数
        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
        slide.transform('translateX(' + translate + ') scale(' + scale + ')');

        slide.css('zIndex', zIndex);
        slide.css('opacity', 1);
        if (Math.abs(slideProgress) > 2) {//除了当前选中的slides 前后 一个以外的其他slides
        slide.css('opacity', 0);
        }
       
        
    };
    },
    slideChange: function(){
        for(let i=0;i<this.slides.length;i++) {
            this.slides[i].classList.add("my-slide");
        }
        this.slides[this.activeIndex].classList.remove("my-slide");
    },
    setTransition: function (transition) {
        for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            slide.transition(transition);
        }
    }
}
})

var certifySwiper3 = new Swiper('#swiper-three', {
    watchSlidesProgress: true,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
    autoplay: true,
    navigation: {
        nextEl: '.next-3',
        prevEl: '.prev-3',
    },
    pagination: {
        el: '.swiper-pagination-3',
        clickable :true,
    },
});

    //设置导航栏的固定定位
(function(){
    //初始化是隐藏的
    $(".index-nav").height(window.innerHeight);
    $('.index-ul-box').animate({width:'toggle'},0);
        //点击按钮让页面滑出来
    $(".index-nav").slideToggle(0);
    $('.index-nav .untread').click(function(){
        $('.index-ul-box').animate({width:'toggle'},350,()=>{
            $(".index-nav").slideToggle(0);
            $("html").css("overflow","auto");
        });
    });
    $(".nav-btn").click(function(){
        $("html").css("overflow","hidden");
        $(".index-nav").slideToggle(0);
        $('.index-ul-box').animate({width:'toggle'},350);
    })
})(window);
(function(){
    $("#listen-songs").click(
        function() {
            location.href = "http://helpfarmer.h5.yscase.com/";
        }
    )
})(window);
