import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener("submit", (e) => {
    const delay = form.elements.delay.valueAsNumber;
    const state = form.elements.state.value;

    e.preventDefault();
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else if (state === 'rejected') {
                reject(delay);
            }
        }, delay);
    });

    promise.then(delay => {
        iziToast.success({
            position: 'topRight',
            backgroundColor: 'green',
            theme: 'dark',
            title: 'OK',
            titleColor: 'white',
            message: `Fulfilled promise in ${delay}ms`,
            messageColor: 'white',
        });
    })
    .catch(delay =>
        iziToast.error({
            position: 'topRight',
            backgroundColor: 'red',
            theme: 'dark',
            title: 'Error',
            titleColor: 'white',
            message: `Rejected promise in ${delay}ms`,
            messageColor: 'white',
        })
    );

    form.reset();
});