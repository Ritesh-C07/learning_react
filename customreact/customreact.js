

function customRender(reactElement,mainContainer){
    // const domelement = document.createElement
    // (reactElement.type)
    // domelement.innerHTML = reactElement.children
    // domelement.setAttribute(`href`,reactElement.props.href)
    // domelement.setAttribute(`target`,reactElement.props.target)

    // mainContainer.appendChild(domelement)

    
}

const reactElement = {
    type:`a`,
    props:{
        href : `https://google.com`,
        target:`_blank`
    },
    children : `Click me to visit Google`
}

const mainContainer =  document.querySelector('#root')

customRender(reactElement,mainContainer)