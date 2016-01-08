(function() {

    var emailCount   = 0;
    var nameCount    = 0;
    var townCount    = 0;
    var streetCount  = 0;
    var addressCount = 0;

    /**
     * Returns the result of adding two values. 
     * @returns Val
     * @author <fredrik.christenson@gmail.com>
     **/
    function add(a, b) {

        return a + b;

    }

    /**
     * Creates a random number with the provided number of spaces.
     *
     * @param spaces - Number
     * @returns A number
     *
     * @author Fredrik Christenson <fredrik.christenson@ticnet.se>
     */
    function getRandomInt(low, high) {

        return Math.floor(Math.random() * (high - low) + low);

    }

    /**
     * Returns a random utf8 string of the provided length.
     * @returns String
     *
     * @author <fredrik.christenson@gmail.com>
     **/
    function getRandomString(length, str) {

        length--;
        str = (!!str) ? str : ''; // if the string is left out from inital call, add empty one

        if (!length || length < 1) {
        
            return str + String.fromCharCode(getRandomInt(33, 999));
        
        }

        str += String.fromCharCode(getRandomInt(33, 999));
        return getRandomString(length, str); 

    }

    /**
     * Callback for the event listener.
     *
     * @param e - Document event
     * @returns _
     *
     * @author Fredrik Christenson <fredrik.christenson@ticnet.se>
     */
    function handler (e) {

        var result;
        var focusTarget;

        switch (e.keyCode) {

            case 73: // i
                result = getRandomString(10);
                break;

            case 27: // esc
                alert('Thank you for using QA-assist!');
                document.removeEventListener('keyup', handler);
                return;

            case 69: // e
                console.log('email');
                result = add('test', emailCount++) + '@ticnet.se';
                break;

            case 78: // n
                console.log('name');
                result = add('test', nameCount++);
                break;

            case 67: // c
                console.log('creditcard');
                result = getRandomInt(1000000000000000, 9999999999999999);
                break;

            case 65: // a
                console.log('address');
                result = add('test address', addressCount++);
                break;

            case 83: // s
                console.log('street');
                result = add('test street', streetCount++);
                break;

            case 84: // t
                console.log('town');
                result = add('test town', townCount++);
                break;

            case 80: // p
                console.log('phone');
                result = ('070' + getRandomInt(1000000, 9999999));
                break;

            case 90: // z
                console.log('zip code');
                result = getRandomNumber(10000, 99999);
                break;

            default:
                console.log(e.keyCode + ' is not mapped');
                return;

        }

        console.log(result);
        focusTarget = document.activeElement;

        if(focusTarget) {

            focusTarget.value = result;

        }

    }

    instructions = 'Welcome to QA assist!';
    instructions += '\n';
    instructions += 'Focus any input field and press the desired key.';
    instructions += '\n';
    instructions += 'Keymap: ';
    instructions += '\n';
    instructions += 'n: Random name';
    instructions += '\n';
    instructions += 'c: Random creditcard number';
    instructions += '\n';
    instructions += 'p: Random phone number';
    instructions += '\n';
    instructions += 'a: Random address';
    instructions += '\n';
    instructions += 'e: Radom email';
    instructions += '\n';
    instructions += 'z: Random zip code';
    instructions += '\n';
    instructions += 't: Random town';
    instructions += '\n';
    instructions += 's: Random street';
    instructions += '\n';
    instructions += 'i: Random string';

    alert(instructions);
    document.addEventListener('keyup', handler);

})();
