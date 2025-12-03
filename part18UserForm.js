console.log('Modules & Routes');

function userForm(request, response) {
    response.write(`
        <form action="/submit" method="post">
        <input type="text" placeholder="Enter Name" name="name" />
        <input type="number" placeholder="Enter Number" name="number" />
        <input type="email" placeholder="Enter Email" name="email" />
        <button>Submit</button>         
        </form>`);
} 

module.exports = userForm;