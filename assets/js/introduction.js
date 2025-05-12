const tooltipElement = document.querySelectorAll('.tooltip')

tooltipElement.forEach(function(element){
    const aElement = document.createElement('a')
    const spanElement = document.createElement('span')

    aElement.href = element.dataset.url
    aElement.innerText = element.innerText
    element.innerText = ''

    spanElement.className = 'tooltip__box'

    if(element.dataset.tooltipType === 'text'){
        spanElement.classList.add('tooltip__box--text')
        spanElement.innerText = element.dataset.tooltipContent
    }

    if(element.dataset.tooltipType === 'image'){
        spanElement.classList.add('tooltip__box--image')

        const imageElement = document.createElement('img')
        imageElement.className = 'tooltip__image'
        imageElement.setAttribute('src', element.dataset.tooltipContent)
        console.log(imageElement);
        
        spanElement.appendChild(imageElement)
    }
    
    element.appendChild(aElement)
    element.appendChild(spanElement)
})