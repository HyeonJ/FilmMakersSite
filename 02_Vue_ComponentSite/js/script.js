//header part
Vue.component("header-el", {
    data : () => {
        return {
            menu_list : [
                ["ABOUT", "./about.html"],
                ["MOVIE", "./movie.html"],
                ["ARTIST", "./artist.html"],
                ["AUDITION", "./audition.html"],
                ["COMMUNITY", "./community.html"]
            ]
        }
    },
    template : `
    <header>
        <div class="wrap">
            <div class="logo">
                <a href="#">
                    <img src="./img/logo_fm.png" alt="로고 이미지">
                </a>
            </div>
            <nav>
                <ul>
                    <li v-for="v of menu_list"><a href="v[1]">{{v[0]}}</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `
});

//banner part
Vue.component("banner-el", {
    data : () => {
        return {
            slide_img : [
                "visual.png",
                "visual_02.png",
                "visual_03.png",
                "visual_04.png",
            ]
        }
    },
    template : `
    <div id="slider">
        <div class="slide_frame">
            <div v-for="list in slide_img" class="slide">
                <div class="bgImg" 
                :style="'background-image:url(./img/'+list+')'"></div>
                <div class="dark"></div>   
            </div>
        </div>
        <div class="wrap">
            <div class="text_part">
                <h2>지금부터 당신의 영화가 시작됩니다.</h2>
                <a href="#">오디션 참가</a>
            </div>
        </div>
    </div>
    `
});

//cont1 part
Vue.component("cont1-el", {
    data : () => {
        return {
            movies : [
                {
                    img : "cont_01.png",
                    title : "죄 많은 소녀(After my Death, 2019)",
                    link : "movie1"
                },
                {
                    img : "cont_02.jpeg",
                    title : "소공녀(Microhabitat, 2020)",
                    link : "movie2"
                },
                {
                    img : "cont_03.jpg",
                    title : "벌새(House of Hummingbird, 2018)",
                    link : "movie3"
                },
            ]
        }
    },
    template : `
        <div id="cont1">
            <div class="wrap">
                <div class="title">
                    <h2>Today's Movie</h2>
                </div>
                <div class="content_cover">
                    <ul>
                        <li v-for="list in movies">
                            <div class="content">
                                <img :src="'./img/' + list.img" :alt="list.link">
                                <a href="/"></a>
                            </div>
                            <p>{{list.title}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
});

//bannermid part
Vue.component("bannermid-el", {
    data : () => {
        return {}
    },
    template : `
        <div id="bannermid">
            <div class="dark">
                <div class="wrap">
                    <h2>Audition Schedule</h2>
                    <p>실시간으로 업데이트 되는 오디션 정보를 확인하실 수 있습니다.</p>
                    <p>배우 또는 배우 지망생분들의 많은 참여를 바랍니다.</p>
                    <a href="">오디션 정보 확인</a>
                </div>
            </div>
        </div>
    `
});

//cont2 part
Vue.component("cont2-el", {
    data : () => {
        return {
            actors : [
                {
                    id : 0,
                    name : "전여빈",
                    img : "yeobeen.png"
                },
                {
                    id : 1,
                    name : "김새벽",
                    img : "saebyeok.png"
                },
                {
                    id : 2,
                    name : "이상희",
                    img : "sanghee.png"
                },
                {
                    id : 3,
                    name : "김예은",
                    img : "yeeun.png"
                },
                {
                    id : 4,
                    name : "이학주",
                    img : "hakju.png"
                },
                {
                    id : 5,
                    name : "박정민",
                    img : "jungmin.png"
                },
            ]
        }
    },
    template : `
        <div id="cont2">
            <div class="wrap">
                <div class="title">
                    <h2>Actors</h2>
                </div>
                <div class="content">
                    <ol>
                        <li v-for="list in actors">
                            <img :src="'./img/' + list.img" :alt="list.name">
                            <div class="filmo">
                                <p>{{list.name}}</p>
                                <a href="/">필모그래프</a>
                            </div>
                        </li>
                    </ol>
                </div>
                <div class="more">
                    <a href="/">더보기</a>
                </div>
            </div>
        </div>
    `
});

//review part
Vue.component("review-el", {
    data : () => {
        return {
            reviews : [
                {
                    id : 0,
                    img : "review1.jpg",
                    rvTxt : "1차 오디션 합격 후, 감독님과의 직접 오디션을 보는 소중한 기회를 얻게 되었습니다. 감독님께서 제시하신 키워드에 맞게 준비한 연기를 보여드렸습니다. 연기가 끝나고 감독님께서는 호흡, 발음, 발성, 집중력 등 다각도에서 꼼꼼한 평을 해주셨습니다. 연기뿐만 아니라 프로필 사진에 대해서도 조언을 해주셨고, 제가 미처 생각하지 못했던 부분을 짚어주셔서 큰 도움을 받게 되었습니다.",
                    rvName : "김지수"
                },
                {
                    id : 1,
                    img : "review2.jpg",
                    rvTxt : "오디션장에 들어가서 간단하게 자기소개를 하고 프로필에 나와있는 것들로 간단히 대화를 한 뒤 독백을 했습니다. 그 후 감독님이 얘기해주신 몇가지 상황들로 즉흥연기를 하고 작품의 내용을 간단히 듣고 마쳤습니다. 딱딱한 오디션이 아닌 대화하면서 긴장도 풀어주시고 편한 분위기의 오디션장이었습니다. 감사합니다.",
                    rvName : "이영수"
                },
                {
                    id : 2,
                    img : "review3.jpg",
                    rvTxt : "필름메이커스에서 독립영화, 상업영화 등의 정보들과 직접적인 오디션을 볼 수 있는 연결 등이 특별하게 느껴지는 이 곳에 이제 가입한지 1주일 밖에 안 되었음에도 오디션을 볼 좋은 기회가 주어졌습니다. 오디션 영상을 찍으며 연기 외적으로도 고민 할 수 있게 되었습니다. ",
                    rvName : "박수현"
                },
            ]
        }
    },
    template : `
    <div id="review">
        <div class="dark">
            <div class="wrap">
                <div class="title">
                    <h2>Audition Review</h2>
                </div>
                <div class="slide_cover">
                    <div class="slider">
                        <div v-for="list in reviews" :key="list.id" class="slide">
                            <p>{{list.rvTxt}}</p>
                            <div class="img"
                             :style="'background-image:url(./img/'+ list.img +')'">
                             </div>
                            <span>{{list.rvName}}</span>
                        </div>
                    </div>

                </div>
                <div class="pager">
                    <ol>
                        <li v-for="list in reviews" :key="list.id" :rel="list.id"></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    `
    //key 속성은 각 반복되는 과정상 uniqued한 객체의 생성 요인이 됨 
});

//footer part
Vue.component("footer-el", {
    data : () => {
        return {
            footer_menu_list : [
                {
                    name : "이용약관",
                    link : "/"
                },
                {
                    name : "개인정보 취급방침",
                    link : "/"
                },
                {
                    name : "고객 상담실",
                    link : "/"
                }
            ],
            info_text_list : [
                "Filmmakers | 대표 : 임지애 | 사업자등록번호 : 113-28-507",
                "주소 : 서울특별시 강남구 논현로 | 개인정보관리책임자 : 한상용",
                "ⓒ 1999 - 2021 Filmmakers",
                "고객센터(이용 및 결제 문의) 제휴 및 대외 협력, 광고 문의",
                "대표전화 : 02-1234-5678 | 카카오톡 플러스친구 : 필름메이커스",
                "이메일 info@filmmakers.com"
            ]
        }
    },
    template : `
        <div id="footer">
            <div class="wrap">
                <div class="menu">
                    <ol>
                        <li v-for="list in footer_menu_list"><a :href="list.link">{{list.name}}</a></li>
                    </ol>
                </div>
                <div class="info">
                    <div class="infotxt">
                        <p v-for="list in info_text_list">{{list}}</p>
                    </div>
                </div>
            </div>
        </div>
    `
});


new Vue({
    el : "#app"
});



$(document).ready(function(){
    $("#slider .slide_frame").slick({
        infinite : true,
        autoplay : true,
        fade : true,
        //slick 의 기본 방향은 horizontal
        //vertical : true ==> 수직방향으로 슬라이드 변경
        cssEase : "linear"  //전환 속도 제어
    });

    const slide_len = $("#review ol li").length;
    console.log(slide_len);
    $("#review .slider").css("width", slide_len*100 + "%");
    $("#review .slider .slide").css("width", `calc(100% / ${slide_len})`);

    $("#review ol li").eq(0).addClass("active");
    $(document).on("click", "#review ol li", function(){
        $("#review ol li").removeClass("active");
        $(this).addClass("active");

        const $index = $(this).index();
        console.log($index);

        $("#review .slider").stop().animate(
            {
                "margin-left" : -100 * $index + "%"
            }, 500
        );
    });
});

