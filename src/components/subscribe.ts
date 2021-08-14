

export default function subscribe(): HTMLElement {
    let subscribe = document.createElement('aside');
    subscribe.className = 'subscribe';
    document.getElementById('main').appendChild(subscribe);



    subscribe.innerHTML = `
        <h3>Subscribe</h3>
        <span>Never miss a post from Dream the Kid</span>
    `

    return subscribe;
}