const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.format({
        'text/html': function () {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<table><tr><th>Grad</th>');
            var gradovi = ["Sarajevo", "Mostar", "Zenica"];
            for (var i = 0; i < gradovi.length; i++) 
                res.write('<tr><td>' + gradovi[i] + '</td></tr>');
            res.write('</table>');
            res.send();
        },
    })
});

app.get('/index.html', function (req, res) {
    res.format({
        'text/html': function () {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<table><tr><th>Grad</th>');
            var gradovi = ["Sarajevo", "Mostar", "Zenica"];
            for (var i = 0; i < gradovi.length; i++)
                res.write('<tr><td>' + gradovi[i] + '</td></tr>');
            res.write('</table>');
            res.send();
        },
    })
});

app.listen(8005);