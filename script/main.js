const badgeEl = document.querySelector('.badges');
const topBtnEl = document.querySelector('.top_btn');

topBtnEl.addEventListener('click',function(){
  
  // alert('top버튼 클릭 잘되요...');
  gsap.to(window, .6, { //브라우저를 선택하여 0.6초만에
    scrollTo:0   //스크롤 꼭대기 0까지 올라간다.
  });
});

window.addEventListener('scroll', function(e) {
  console.log(window.scrollY);
  if(500<=this.window.scrollY){
    // badgeEl.style.display='none'
    gsap.to(badgeEl,0.6,{
      opacity:0,
      display:'none'
    });
    gsap.to(topBtnEl,0.6,{
      opacity:1,
      // x:0
    });
  }else{
    // badgeEl.style.display='block'
    gsap.to(badgeEl,0.3,{
      opacity:1,
      display:'block'
    })
    gsap.to(top_BtnEl,0.3,{
      opacity:0,
      // x:0
    });
  }
})

const fadeEl = document.querySelectorAll('.fadein');

fadeEl.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay:(index+1)*0.4,//0.4초씩 딜레이
    opacity:1
  })
});

//커피프로모션 토글아이콘 클릭시 박스 숨기고/나타내기
const promotionEl = document.querySelector("section.promotion");
const toggleBtnEl = document.querySelector('.toggle_btn');

//토글버튼을 클릭하면 프로모션의 크기가 변한다.
// toggleBtnEl.addEventListener('click', function(){
//   if(promotionEl.classList.contains('hide')){ //만약에 promotion클랙스에 hide서식이 있다면
//     //높이가 683이 되어야
//     // alert('fl;jdsl;fjsdfk;ljsdlk');
//     promotionEl.classList.remove('hide'); //높이가 663이 되어야
//   }else{ //그렇지 않으면
//     //높이가 0
//     promotionEl.classList.add('hide'); //높이가 663이 되어야
//   }
// });


//프로모션 스크롤 애니메이션
const spyEl = document.querySelectorAll('section.scroll-spy');

spyEl.forEach(function(spyEl){

  new ScrollMagic
  .Scene({ //감시할 장면을 추가
    triggerElement:spyEl,
    triggerHook:0.7 //화면의 70%지점에서 동작
  })
  .setClassToggle(spyEl, 'show') //show클래스를 적용하거나 해제하기
  .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당한다.
});

//영상콘텐츠 애니메이션 서식
gsap.to('.m_img1', 1.5, {
  delay: 1, //얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
  y: 15, //'transform: translateY(수치); '와 같음. 수직으로 얼마나 움직일지 설정.
  repeat: -1, //몇 번 반복하는지를 설정, '-1'은 무한 반복.
  yoyo: true, //한 번 재생된 애니메이션을 다시 뒤로 재생.
  ease: Power1.easeInOut //Easing 함수 적용.
});
gsap.to('.m_img2', 2, {
  delay: .5, //얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
  y: 15, //'transform: translateY(수치); '와 같음. 수직으로 얼마나 움직일지 설정.
  repeat: -1, //몇 번 반복하는지를 설정, '-1'은 무한 반복.
  yoyo: true, //한 번 재생된 애니메이션을 다시 뒤로 재생.
  ease: Power1.easeInOut //Easing 함수 적용.
});
gsap.to('.m_img3', 2.5, {
  delay: 1, //얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
  y: 15, //'transform: translateY(수치); '와 같음. 수직으로 얼마나 움직일지 설정.
  repeat: -1, //몇 번 반복하는지를 설정, '-1'은 무한 반복.
  yoyo: true, //한 번 재생된 애니메이션을 다시 뒤로 재생.
  ease: Power1.easeInOut //Easing 함수 적용.
});

//6, 7, 8, 10콘텐츠가 화면의 80%지점에 보일때 동작하는 스크립트
// const spyEl = document.querySelectorAll('section.scroll-spy');

// spyEl.forEach(function(spyEl){

//   new ScrollMagic
//   .Scene({ //감시할 장면을 추가
//     triggerElement:spyEl,
//     triggerHook:0.8 //화면의 80%지점에서 동작
//   })
//   .setClassToggle(spyEl, 'show') //show클래스를 적용하거나 해제하기
//   .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당한다.
// });

//AWARDS 슬라이드 서식
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5 
});

//e-sports 애니메이션
