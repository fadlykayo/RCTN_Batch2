var fs = require('fs');

/*
Homework 1:
1. present = true
2. count the length of the result
3. print the result
*/

/*
Homework 2:
1. every each name tambahkan + ' Green';
2. print the result
*/

/*
Homework 3:
1. sebuah string yg isinya nama dengan dipisahkan koma. Contoh: 'Fadly Kayo, Alan, Budi, dst';
2. print the result
*/

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];
// ==================================================

// let result = videoData.reduce((sum, data) => {
//   return sum += data.name + ', ';
// }, '');
//
// console.log(result);

// ==================================================

/*
Homework 2:
1. change the rooms's stringKey, ex: 'dining room', into an objectKey, ex: dining_room
2. print the result
*/

// let result = videoData.map((data) => {
//   data.rooms.splice(3, 2, {dining_room: true}, {billiard_room: true});
//
//   return {...data, rooms: data.rooms};
// });
//
// let resultJSON = JSON.stringify(result, null, 2);
//
// fs.writeFileSync("result.json", resultJSON);

// ==================================================

// let result = videoData.map((data) => {
//   data.rooms.splice(3, 2, {dining_room: true}, {billiard_room: true});
//
//   let editedRooms = data.rooms.map(innerRoomsObject => {
//     let editedInnerRooms = '';
//
//     for (key in innerRoomsObject) {
//       editedInnerRooms += key + ': ' + innerRoomsObject[key] + ', ';
//     };
//
//     return editedInnerRooms;
//   })
//
//   return {...data, rooms: editedRooms};
// });
//
// console.log(result);
