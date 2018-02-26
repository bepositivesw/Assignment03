/*eslint-env browser*/

function tellFortune(numberOfChildren, partnerName, location, jobTitle) {
    'use strict';
    if (numberOfChildren <= 1) {
        window.document.write('You will be a ' + jobTitle + ' in ' + location + ', and married to ' + partnerName + ' with ' + numberOfChildren + ' kid.<br>');
    } else {
        window.document.write('You will be a ' + jobTitle + ' in ' + location + ', and married to ' + partnerName + ' with ' + numberOfChildren + ' kids.<br>');
    }
}
tellFortune(2, 'James', 'USA', 'doctor');
tellFortune(0, 'Sam', 'UK', 'banker');
tellFortune(1, 'Mike', 'CA', 'engineer');
