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
        const liEl = document.createElement('li')
        liEl.dataset.id = item.id
    
        const aEl = document.createElement('a')
        aEl.href = item.link
        aEl.innerText = item.text
    
        liEl.appendChild(aEl)
        ulElement.appendChild(liEl)
    }
})

const liElements = articleListElement.querySelectorAll('li')
