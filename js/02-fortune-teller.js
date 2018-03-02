/*eslint-env browser*/

function tellFortune(numberOfKids, partnerName, location, jobTitle) {
    'use strict';
    if (numberOfKids > 1) {
        window.document.write('You will be a ' + jobTitle + ' in ' + location + ', and married to ' + partnerName + ' with ' + numberOfKids + ' kids.<br>');
    } else {
        window.document.write('You will be a ' + jobTitle + ' in ' + location + ', and married to ' + partnerName + ' with ' + numberOfKids + ' kid.<br>');
    }
}
tellFortune(2, 'James', 'USA', 'doctor');
tellFortune(0, 'Sam', 'UK', 'banker');
tellFortune(1, 'Mike', 'CA', 'singer');
