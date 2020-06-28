const cheerio = require('cheerio');

export default function asyncCSS () {

  this.nuxt.hook('render:route', (url, result, context) => {
    let $ = cheerio.load(result.html)
    let command = ""
    $(`head link[rel="stylesheet"]`).each(function(){
      command += "loadCSS('"+$(this).attr('href')+"');"
    })
    $(`head link[rel="stylesheet"]`).remove()
    $(`head`).append(`<script>`+command+`</script>`)
    result.html = $.html()
  })

}
