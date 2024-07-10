const expect = (val) => {
    return {
        toBe: function(arg) {
            if(val !== arg) {
                throw new Error('Not equal') 
            }
            return true;
        },
        notToBe: function(arg) {
            if(val !== arg) {
                return true;
            }
            throw new Error('Equal') 
        }
    }
}

const toBe = expect(5).toBe(5)
const notToBe = expect(5).notToBe(6)

function printOutput() {
    console.log(toBe, notToBe);
}