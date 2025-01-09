document.addEventListener("DOMContentLoaded", () => {
    /**
    --pri-color: #000000; text
    --sec-color: #E1DFDD; bck
    --ter-color: #787878; sec text
    --grid-color: rgba(0, 0, 0, 0.1); grid
    **/
    const colors = [
        ['#F8955B', '#58356E', '#8B634B', 'rgba(248,149,91,0.1)', 'rgba(248,149,91,0.15)'],
        ['#F4BF3C', '#286360', '#b69e62', 'rgba(244,191,60,0.1)', 'rgba(244,191,60,0.15)'],
        ['#105099', '#FFE9F3', '#6799D2', 'rgba(16,80,153,0.1)', 'rgba(16,80,153,0.15)'],
        ['#FFFFFF', '#1F1F1F', '#696969', 'rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.15)'],
        ['#000000', '#E1DFDD', '#787878', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.15)'], /* initial value */
    ];

    const vars = ['--pri-color', '--sec-color', '--ter-color', '--grid-color', '--unde-color'];

    let init = 0;

    const trigger = document.getElementById('colors');
    const body = document.body;

    trigger.addEventListener('click', () => {
        vars.forEach((vari, i) => {
            body.style.setProperty(vari, colors[init][i]);
        })
        init = init === colors.length-1 ? 0 : init+1;
    })
})
