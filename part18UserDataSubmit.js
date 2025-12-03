console.log('Modules & Routes');

function userDataSubmit(request, response) {
    response.write(`
        <p>Data Submitted!</p>
        `);
} 

module.exports = userDataSubmit;