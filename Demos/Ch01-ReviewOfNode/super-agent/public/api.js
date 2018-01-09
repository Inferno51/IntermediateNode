const request = require('superagent');
const api = require('./api.js');

module.exports = function(global, makes){

    var favorites = [];

    global.showmakes = function(){
        let htmlMakes = `<table>
        <tr>
        <th>Make</th>
        <th>Country</th>
        <th>Action</th>
        </tr>`;
        
            makes.forEach(function(m){
            console.log(m.make_display + ' | ' + m.make_country);
            htmlMakes += `
            <tr>
            <td> ${m.make_display}</td>
            <td>${m.make_country}</td>
            <td><button onclick="deletemake(${m.id})">Delete</button></td>
            </tr>`
        });
        document.getElementById("output-makes").innerHTML = htmlMakes;
    };

    global.deletemake = function(id){
        alert(`Trying to delete ${id} - not yet implemented`);
    }

}