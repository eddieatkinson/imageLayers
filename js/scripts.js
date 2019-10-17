let left1 = 0;
let top1 = 0;
let left2 = 0;
let top2 = 0;
let left3 = 0;
let top3 = 0;
$(document).ready(() => {
  console.log('Ready!');
  $('.button-1-up').click(() => {
    $('#image1').css("top", `${top1-1}`);
  });
  $('.button-1-down').click(() => {
    
  });
  $('.button-1-left').click(() => {
    $('#image1').css("")
  });
  $('.button-1-right').click(() => {
    
  });
  $('.button-2-up').click(() => {
    
  });
  $('.button-2-down').click(() => {
    
  });
  $('.button-2-left').click(() => {
    $('#image2').css("")
  });
  $('.button-2-right').click(() => {
    
  });
  $('.button-3-up').click(() => {
    
  });
  $('.button-3-down').click(() => {
    
  });
  $('.button-3-left').click(() => {
    $('#image3').css("")
  });
  $('.button-3-right').click(() => {
    
  });
});