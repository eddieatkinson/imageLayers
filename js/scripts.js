let left1 = 0;
let top1 = 0;
let left2 = 0;
let top2 = 0;
let left3 = 0;
let top3 = 0;
$(document).ready((params) => {
  console.log('Ready!');
  // image1
  $('.button-1-up').click(() => {
    top1--;
    $('#image1').css("top", `${top1}px`);
  });
  $('.button-1-down').click(() => {
    top1++;
    $('#image1').css("top", `${top1}px`);
  });
  $('.button-1-left').click(() => {
    left1--;
    $('#image1').css("left", `${left1}px`);
  });
  $('.button-1-right').click(() => {
    left1++;
    $('#image1').css("left", `${left1}px`);
  });
  // image2
  $('.button-2-up').click(() => {
    top2--;
    $('#image2').css("top", `${top2}px`);
  });
  $('.button-2-down').click(() => {
    top2++;
    $('#image2').css("top", `${top2}px`);
  });
  $('.button-2-left').click(() => {
    left2--;
    $('#image2').css("left", `${left2}px`);
  });
  $('.button-2-right').click(() => {
    left2++;
    $('#image2').css("left", `${left2}px`);
  });
  // image3
  $('.button-3-up').click(() => {
    top3--;
    $('#image3').css("top", `${top3}px`);
  });
  $('.button-3-down').click(() => {
    top3++;
    $('#image3').css("top", `${top3}px`);
  });
  $('.button-3-left').click(() => {
    left3--;
    $('#image3').css("left", `${left3}px`);
  });
  $('.button-3-right').click(() => {
    left3++;
    $('#image3').css("left", `${left3}px`);
  });
});