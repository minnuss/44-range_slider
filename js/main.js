const rangeInput = document.querySelector('.range')


// a function that transform a value from in-min and in-max and translate to out-min and out-max;
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

rangeInput.addEventListener('input', (e) => {
    // value of button/circle position
    const value = +e.target.value
    // label value = button value
    const label = rangeInput.nextElementSibling
    label.innerText = value
    // console.log(value)

    // value taken from css - width of input and label
    // const range_width = getComputedStyle(e.target).getPropertyValue('width')
    // const label_width = getComputedStyle(e.target.nextElementSibling).getPropertyValue('width')

    // value taken from object directly - width of input and label
    const range_width2 = rangeInput.getBoundingClientRect().width
    const label_width2 = label.getBoundingClientRect().width

    // get max and min values from html
    const max = +e.target.max
    const min = +e.target.min

    // left value = value of input position * (input width / max) - label width / 2 + scale function which compensates 10px plus/minus
    const left = value * (range_width2 / max) - label_width2 / 2 + scale(value, min, max, 10, -10)
    label.style.left = `${left}px`
})