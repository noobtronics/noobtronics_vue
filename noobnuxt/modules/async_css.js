const cheerio = require('cheerio')

function finalize_html(html) {
  let $ = cheerio.load(html)
  let command = ''
  $(`head link[rel="stylesheet"]`).each(function () {
    command += "loadCSS('" + $(this).attr('href') + "');"
  })
  $(`head link[rel="stylesheet"]`).remove()
  $(`body`).append(`<script>` + command + `</script>`)
  html = $.html()
  return html
}

export default function asyncCSS() {
  this.nuxt.hook('render:route', (url, result, context) => {
    result.html = finalize_html(result.html)
  })

  this.nuxt.hook('export:page', (page, errors) => {
    page.page.html = finalize_html(page.page.html)
  })
}
