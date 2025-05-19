const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];

const articleListElement = document.querySelector('.article__list')
const ulElement = document.createElement('ul')
articleListElement.appendChild(ulElement)

list.forEach(function(item){
    if(item.parentId === null){
        const liElement = createElement(item.id, item.link, item.text)
        ulElement.appendChild(liElement)
    }
})

const liElements = articleListElement.querySelectorAll('li')

liElements.forEach(function(item){
    const id = Number(item.dataset.id)

    const children = list.filter(function(element){
        return element.parentId === id
    })

    if(children.length > 0){
        const nestedUl = document.createElement('ul')

        children.forEach(function(child){
            const nestedLi = createElement(child.id, child.link, child.text)
            nestedUl.appendChild(nestedLi)
            item.appendChild(nestedUl)
        })
    }
})

function createElement(id, link, text){
    const liEl = document.createElement('li')
    const aEl = document.createElement('a')
    liEl.appendChild(aEl)

    liEl.dataset.id = id
    aEl.href = link
    aEl.innerText = text

    return liEl
}