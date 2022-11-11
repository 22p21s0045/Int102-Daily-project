const observable = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('avatar-img');
           
            console.log('visible');
        } else {
            entry.target.classList.remove('avatar-img');
            console.log('not visible');
        }
    });
});
observable.observe(document.querySelector('#avatar > img '));
