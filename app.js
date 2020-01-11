'use strict';
function FamilyMember(data) {
    this.name = data.name ;
    this.age = data.age ;
    people.push(this);
}
let people =[];
FamilyMember.prototype.render = function () {
    let templateMarkup = $('#template').html();
    let template = Handlebars.compile(templateMarkup);
    let output = template(this);
    $('#familymember').append(output);
//   $('#familymember').append(`<li> ${this.name} ${this.age}</li>`)     with only jQuery 
}

$.get('./people.json')
.then( data =>
    {
        data.forEach(ele => {
            let member  = new FamilyMember(ele);
               member.render();
            
        });
    });

    

