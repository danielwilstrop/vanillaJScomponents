// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const weekdays = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   const giveaway = document.querySelector('.giveaway')
//   const deadline = document.querySelector('.deadline')
//   const items = document.querySelectorAll('.deadline-format h4')

//   //get all the data from the Date Object 
//   //weekday and month give numerical 0-6 and 0-11 so you need an array of values
//   let futureDate = new Date(2021, 2, 9, 21, 30, 00)
//   const year = futureDate.getFullYear()
//   const hours = futureDate.getHours()
//   const minutes = futureDate.getMinutes()
//   const month = months[futureDate.getMonth()]
//   const date = futureDate.getDate()
//   const day = weekdays[futureDate.getDay()]

//   giveaway.textContent = `Ends on ${day} ${date} ${month} ${year} at ${hours}:${minutes}`

//   //future and current time in MS and conversions for countdown
//   const futureTime = futureDate.getTime()
//   const currentTime = new Date().getTime()

//   const getRemainingTime = () => {
//     const x = futureTime - currentTime
//     //MS per unit Calculations
//     const oneDay = 24 * 60 * 60 * 1000
//     const oneHour = 60 * 60 * 1000
//     const oneMinute = 60 * 1000

//     let days = Math.floor(x / oneDay)
//     let hours = Math.floor((x % oneDay) / oneHour)
//     let mins = Math.floor(x % hours) / oneMinute
//     let seconds = Math.floor((x % oneMinute) / 1000)

//     const values = [days, hours, mins, seconds]
    
//     const format = (item) => {
//         if(item < 10){
//             return item = `0${item}`
//         } else {
//             return item
//         }
//     }
//     //display the values
//     items.forEach((item, index) => {
//         item.innerHTML = format(values[index])
//     })

//     if (x < 0){
//         clearInterval(countdown)
//         deadline.innerHTML = ` <h4 class = 'expired>Sorry this has Expired</h4>`
//     }
//   }

// let countdown = setInterval(getRemainingTime, 1000);

// getRemainingTime();

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  // months are ZERO index based;
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
  
  // let futureDate = new Date(2020, 3, 24, 11, 30, 0);
  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  
  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
  
  const futureTime = futureDate.getTime();
  function getRemaindingTime() {
    const today = new Date().getTime();
  
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
  
    // set values array
    const values = [days, hours, minutes, seconds];
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
  
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
  
    if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
  }
  // countdown;
  let countdown = setInterval(getRemaindingTime, 1000);
  //set initial values
  getRemaindingTime();


  