export default function subscribe(): HTMLElement {
    let subscribe = document.createElement('aside');
    subscribe.className = 'subscribe';
    document.getElementById('main').appendChild(subscribe);

    let heading = document.createElement('h3');
    let blurb = document.createElement('span');
    let container = document.createElement('div');
    let form = document.createElement('div');
    let input = document.createElement('input')
    let button = document.createElement('button')

    container.append(heading, blurb);
    input.placeholder = 'Enter your email address';
    button.innerText = 'Subscribe';
    form.className = 'form';
    form.append(input, button);

    subscribe.append(container, form);

    heading.innerText = 'Subscribe';
    blurb.innerText = 'Never miss a post from Dream the Kid';

    return subscribe;
}