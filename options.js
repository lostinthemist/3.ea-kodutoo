// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function save_options() {
  timeLimit["time-limit"] = document.getElementById("time-limit").value;

  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

function restore_options() {
  var timeLimit = localStorage["time-limit"];
  if (timeLimit = 10000 ) {
    console.error('Too much time spent here');
  }
  document.getElementById("time-limit").value = timeLimit;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);



// let page = document.getElementById('buttonDiv');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

// function constructOptions(kButtonColors) {
//   for (let item of kButtonColors) {
//     let button = document.createElement('button');
//     button.style.backgroundColor = item;
//     button.addEventListener('click', function() {
//       chrome.storage.sync.set({color: item}, function() {
//         console.log('color is ' + item);
//       })
//     });
//     document.getElementById('buttonDiv').appendChild(button);

//     //document.querySelector().appendChild(button);
//   }
// }
// constructOptions(kButtonColors);
