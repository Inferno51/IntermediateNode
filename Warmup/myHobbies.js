const hobbyArray = [
    {name: 'warhammer', lengthInYearsAtHobby: 13},
    {name: 'video games', lengthInYearsAtHobby: 15},
    {name: 'painting', lengthInYearsAtHobby: 5}
];

function printHobbyInfo(hobby){
    console.log(`I have participated in ${hobby.name} for ${hobby.lengthInYearsAtHobby} years.`)
}

for (const hobby of hobbyArray.sort((a, b) => a.name.localeCompare(b.name))) {
    printHobbyInfo(hobby);
}



console.log('============');
for (const hobby of hobbyArray.sort((a,b) => {
        if (a.lengthInYearsAtHobby < b.lengthInYearsAtHobby) {
            return -1;
        } 
        if (a.lengthInYearsAtHobby > b.lengthInYearsAtHobby) {
            return 1;
        }
    })) {
    printHobbyInfo(hobby);
}



console.log('============');
for (const hobby of hobbyArray.sort(function compareNumbers(a, b){
    return a-b;
})){
    printHobbyInfo(hobby);
}