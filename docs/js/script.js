const sidebar = document.querySelector('.sidebar');

//hamburger

document.querySelector('.top_menu .hamburger').addEventListener('click', function () {
    sidebar.classList.remove('hidden')
    sidebar.classList.add('active');
    document.querySelector('.container').classList.remove('container_edit')
})
document.querySelector('.sidebar .hamburger').addEventListener('click', function () {
    sidebar.classList.remove('active');
    sidebar.classList.add('hidden');
    document.querySelector('.container').classList.add('container_edit');
})

if (sidebar.classList.contains === 'hidden') {
    document.querySelector('.container').classList.add('container_edit');
}

window.addEventListener('resize', function() {
    if (document.body.clientWidth < 992) {
        document.querySelector('.sidebar').classList.remove('active');
        document.querySelector('.sidebar').classList.add('hidden');
    } else if (document.body.clientWidth >= 993) {
        document.querySelector('.sidebar').classList.add('active');
        document.querySelector('.sidebar').classList.remove('hidden');
    }  
}, true);

//popups


const closeModal = function () {
    document.querySelector('.pop_ups').classList.toggle('hidden')
}

document.querySelectorAll('.pop_ups .btn-close').forEach((e) => {
    e.addEventListener('click', function () {
        closeModal();
    })
})

document.querySelectorAll('.container .cart').forEach((e) => {
    e.querySelectorAll('.container .btn-close').forEach((position) => {
        position.addEventListener('click', function () {
            e.classList.add('hidden');
            e.classList.remove('active');
        })

    })
})

document.querySelector('.pop_ups').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
})

document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        closeModal();
    }
})

document.querySelector('.cencel').addEventListener('click', function (event) {
    event.preventDefault();
    closeModal();
})

//popups close


const cleaner = function () {
    document.querySelectorAll('.pop_ups > *').forEach((form) => {
        form.classList.remove('active')
        form.classList.add('hidden')
    })
}


document.querySelectorAll('.account_name ').forEach((e) => {  
    e.addEventListener('click', function () {
        cleaner();
        document.querySelector('.login_form').classList.remove('hidden')
        document.querySelector('.login_form').classList.add('active')
        closeModal();
    })   
})


document.querySelectorAll('.quit i').forEach((e) => {
    e.addEventListener('click', function () {
        cleaner();
        document.querySelector('.quit_form').classList.remove('hidden')
        document.querySelector('.quit_form').classList.add('active')
        closeModal();
    })
})

document.querySelector('.messages').addEventListener('click', function () {
    cleaner();
    document.querySelector('.message_form').classList.remove('hidden')
    document.querySelector('.message_form').classList.add('active')
    closeModal();
})


//sidebar

const removeActive = function(){
    document.querySelectorAll('.container > *').forEach((e) => {
        e.classList.remove('active')
        e.classList.add('hidden')
    })
}



document.querySelector('.general_sidebar').addEventListener('click', function () {
    removeActive()
    document.querySelector('.general').classList.remove('hidden')
    document.querySelector('.general').classList.add('active')
})

document.querySelector('.details_sidebar').addEventListener('click', function () {
    removeActive();
    document.querySelector('.details').classList.remove('hidden')
    document.querySelector('.details').classList.add('active')
})

document.querySelector('.links_sidebar').addEventListener('click', function () {
    removeActive();
    document.querySelector('.links').classList.remove('hidden')
    document.querySelector('.links').classList.add('active')
})

document.querySelector('.banners_sidebar').addEventListener('click', function () {
    removeActive();
    document.querySelector('.banners').classList.remove('hidden')
    document.querySelector('.banners').classList.add('active')
})

document.querySelector('.personal_data_sidebar').addEventListener('click', function () {
    removeActive();
    document.querySelector('.personal_data').classList.remove('hidden')
    document.querySelector('.personal_data').classList.add('active')
})

document.querySelector('.payout_sidebar').addEventListener('click', function () {
    removeActive();
    document.querySelector('.payout').classList.remove('hidden')
    document.querySelector('.payout').classList.add('active')
})


//chart


var ctx = document.getElementById('myChart').getContext('2d');
/*eslint-disable */
//suppress all warnings between comments
new Chart(ctx, { 
/*eslint-enable */
    type: 'bar',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [{
            label: 'Signups',
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            data: [12, 19, 3, 5, 2, 3],
        },
        {
            label: 'FTD',
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
        },
        {
            label: 'Earned',
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
            hidden: true,
        }]
    },
});



