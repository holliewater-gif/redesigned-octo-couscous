const express = require('express');
const app = express();

app.get('/redirect', (req, res) => {
    // Extract email from URL parameters
    const emailParam = req.query.email;
    const emailHash = req.hash.email;
    const emails = [];

    if (emailParam) {
        emails.push(emailParam);
    }
    if (emailHash) {
        emails.push(emailHash);
    }

    // Construct destination URL
    const destinationUrl = 'https://example.com/destination';
    if (emails.length > 0) {
        res.redirect(`${destinationUrl}?emails=${emails.join('-')}`);
    } else {
        res.redirect(destinationUrl);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});