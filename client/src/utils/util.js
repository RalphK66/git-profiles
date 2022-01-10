export const parsePageLink = (data) => {
  let linksArr = data.split('link:')
  data = linksArr.length === 2 ? linksArr[1] : data
  let pageLinkData = {}

  linksArr = data.split(',')

  for (let rawLink of linksArr) {
    const linkInfo = /<([^>]+)>;\s+rel="([^"]+)"/gi.exec(rawLink)
    const link = linkInfo[1]
    const linkName = linkInfo[2]
    const pageNum = /&page=(\d+).*$/gi.exec(link)

    pageLinkData[linkName] = {
      link: link,
      pageNum: Number.parseInt(pageNum[1]),
    }
  }

  return pageLinkData
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
