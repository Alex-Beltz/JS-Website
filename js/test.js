// const modalObj = {
//   web_1: {
//     id: 'web-1',
//     h3: 'Web Project 1',
//     img: './assets/images/portfolio-1.jpg',
//     pS: 'My First Awesome Website',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   web_2: {
//     id: 'web-2',
//     h3: 'Web Project 2',
//     img: './assets/images/portfolio-3.jpg',
//     pS: 'My Second Awesome Website',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   web_3: {
//     id: 'web-3',
//     h3: 'Web Project 3',
//     img: './assets/images/portfolio-4.jpg',
//     pS: 'My Third Awesome Website',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   app_1: {
//     id: 'app-1',
//     h3: 'App Project 1',
//     img: './assets/images/portfolio-2.jpg',
//     pS: 'My First Awesome App',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   app_2: {
//     id: 'app-2',
//     h3: 'App Project 2',
//     img: './assets/images/portfolio-6.jpg',
//     pS: 'My Second Awesome App',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   ui_1: {
//     id: 'ui-1',
//     h3: 'UI Design 1',
//     img: './assets/images/portfolio-5.jpg',
//     pS: 'My First Awesome UI Design',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   ui_2: {
//     id: 'ui-2',
//     h3: 'UI Design 2',
//     img: './assets/images/portfolio-7.jpg',
//     pS: 'My Second Awesome UI Design',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   ui_3: {
//     id: 'ui-3',
//     h3: 'UI Design 3',
//     img: './assets/images/portfolio-8.jpg',
//     pS: 'My Third Awesome UI Design',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   }
// };


const isObj = function(val) {
  if (val === null) {
    return false;
  } 
  return (typeof val === 'object');
}

const objProps = function(obj) {
  for (let key in obj) {
    if (isObj(obj[key])) {
      objProps(obj[key]);
      const modalArr = Object.values(obj[key]);
      console.log(modalArr);
      modalArr.forEach(() => {
        console.log(modalArr);
        // console.log(modalArr[0]);
        // console.log(modalArr[1]);
        // console.log(modalArr[2]);
        // console.log(modalArr[3]);
        // console.log(modalArr[4]);
        // console.log(modalArr[5]);

        const newModal = document.createElement('div');
        newModal.id = dataArr[1];
        // console.log(`${modalArr[0]}`)
        newModal.classList.add('modal');
        //add 'data-animation="slideInOutTop">'
        newModal.setAttribute('data-animation', 'slideInOutTop');

        const modalDialog = document.createElement('div');
        modalDialog.classList.add('modal-dialog');

        const modalHeader = document.createElement('header');
        modalHeader.classList.add('modal-header');
        const headerText = document.createElement('h3');
        headerText.textContent = dataArr[5];
        // console.log(`${modalArr[1]}`)
        modalHeader.appendChild(headerText);
        const headerIcon = document.createElement('img');
        headerIcon.classList.add('fas', 'fa-times');
        //add 'data-close'
        modalHeader.appendChild(headerIcon);
        modalDialog.appendChild(modalHeader);

        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('img-wrapper');
        const img = document.createElement('img');
        img.src = dataArr[2];
        // console.log(`${modalArr[2]}`)
        imageWrapper.appendChild(img);
        modalBody.appendChild(imageWrapper);

        const textWrapper = document.createElement('div');
        textWrapper.classList.add('text-wrapper');
        const textHeader = document.createElement('p');
        //find out how to do this better
        textHeader.textContent = `<strong>${dataArr[6]}</strong>`;
        // console.log(`${modalArr[3]}`)
        textWrapper.appendChild(textHeader);

        const p_1 = document.createElement('p');
        p_1.textContent = dataArr[7];
        // console.log(`${modalArr[4]}`)
        textWrapper.appendChild(p_1);
        const p_2 = document.createElement('p');
        p_1.textContent = dataArr[8];
        // console.log(`${modalArr[5]}`)
        textWrapper.appendChild(p_2);

        modalBody.appendChild(textWrapper);
        modalDialog.appendChild(modalBody);
        newModal.appendChild(modalDialog);
        document.body.appendChild(newModal);
      });
    } else {
      return;
    }
  };
};
objProps(modalObj);






// const modalObj = {
//   web_1: {
//     id: 'web-1',
//     h3: 'Web Project 1',
//     img: './assets/images/portfolio-1.jpg',
//     pS: 'My First Awesome Website',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   web_2: {
//     id: 'web-2',
//     h3: 'Web Project 2',
//     img: './assets/images/portfolio-3.jpg',
//     pS: 'My Second Awesome Website',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   web_3: {
//     id: 'web-3',
//     h3: 'Web Project 3',
//     img: './assets/images/portfolio-4.jpg',
//     pS: 'My Third Awesome Website',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   app_1: {
//     id: 'app-1',
//     h3: 'App Project 1',
//     img: './assets/images/portfolio-2.jpg',
//     pS: 'My First Awesome App',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   app_2: {
//     id: 'app-2',
//     h3: 'App Project 2',
//     img: './assets/images/portfolio-6.jpg',
//     pS: 'My Second Awesome App',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   ui_1: {
//     id: 'ui-1',
//     h3: 'UI Design 1',
//     img: './assets/images/portfolio-5.jpg',
//     pS: 'My First Awesome UI Design',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   ui_2: {
//     id: 'ui-2',
//     h3: 'UI Design 2',
//     img: './assets/images/portfolio-7.jpg',
//     pS: 'My Second Awesome UI Design',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   },
//   ui_3: {
//     id: 'ui-3',
//     h3: 'UI Design 3',
//     img: './assets/images/portfolio-8.jpg',
//     pS: 'My Third Awesome UI Design',
//     p_1: 'Lorem',
//     p_2: 'Lorem'
//   }
// };


// const isObj = function(val) {
//   if (val === null) {
//     return false;
//   } 
//   return (typeof val === 'object');
// }

// const objProps = function(ojb) {
//   for (let key in obj) {
//     if (isObj(obj[key])) {
//       for (let item in obj[key]) {
//         console.log(item, obj[key][item]);
//       }
//     } else {
//       // console.log(key, obj[key]);
//     }
//   };
// };
// objProps(modalObj);





























































































































































