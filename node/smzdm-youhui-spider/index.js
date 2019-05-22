const request = require('request');
const cheerio = require('cheerio');
cheerio.prototype.removeTagText = function() {
    const html = this.html();
    // <span>123456</span>
    return html.replace(/<.*>.*<\/.*>/g, '')
}
// html entity  &nbsp &lt &gt
request('https://www.smzdm.com/youhui/', (err, res) => {
    if (!err) {
        const body = res.body;
        const $ = cheerio.load(body, {
            decodeEntities: false
        })
        // js  innerHTML
        // <span></span>
        $('.list.list_preferential').each(function() {
            const img = $('img', this).attr('src')
            const desc = $('.lrInfo', this).text().trim()
            const price = $('.itemName .red', this).text().trim();
            let title = $('.itemName a', this).removeTagText();
            console.log({
                title,
                price,
                img,
                desc
            })
        })
    }
})