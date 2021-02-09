import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './js/giphy-service'

function clearFields() {
  $('.output').empty();
  $('#search').val("");
}

$(document).ready(function() {
  $("#trending").click(function()  {
    clearFields();
    let promise = GiphyService.getTrending();
    promise.then(function(response) {
      const body = JSON.parse(response);
      const myArray = [0,1,2,3,4];
      for (let i = 0; i < myArray.length; i++)  {
        $('.output').append(`<img width="300" height="300" src="${body.data[i].images.original.url}">`);
      }
    });
  });
  $('#gifSearcher').click(function() {
    const image = $('#search').val();
    clearFields();
    let promise = GiphyService.searchGiphy();
    
    promise.then(function(response){
      let body = JSON.parse(response);
      const myArray = [0, 1, 2, 3, 4];
      for (let i = 0; i < myArray.length; i++) {
        $('.output').append(`<img width="300" height="300" src="${body.data[i].images.original.url}">`);
      }
    });
  });
  $('#random').click(function() {
    clearFields();
    let promise = GiphyService.getRandom();
    promise.then(function(response)  {
      let body = JSON.parse(response);
      $('.output').append(`<img width="300" height="300" src="${body.data.images.original.url}">`);
    })
  });
});