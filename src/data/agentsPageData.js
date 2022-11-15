const data = {
    jett: {
        id: Math.random() + Date.now() + 'jett',
        name: 'jett',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    raze: {
        id: Math.random() + Date.now() + 'raze',
        name: 'raze',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    breach: {
        id: Math.random() + Date.now() + 'breach',
        name: 'breach',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    omen: {
        id: Math.random() + Date.now() + 'omen',
        name: 'omen',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    brimstone: {
        id: Math.random() + Date.now() + 'brimstone',
        name: 'brimstone',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    phoenix: {
        id: Math.random() + Date.now() + 'phoenix',
        name: 'phoenix',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    sage: {
        id: Math.random() + Date.now() + 'sage',
        name: 'sage',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    sova: {
        id: Math.random() + Date.now() + 'sova',
        name: 'sova',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    viper: {
        id: Math.random() + Date.now() + 'viper',
        name: 'viper',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    cypher: {
        id: Math.random() + Date.now() + 'cypher',
        name: 'cypher',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    reyna: {
        id: Math.random() + Date.now() + 'reyna',
        name: 'reyna',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    killjoy: {
        id: Math.random() + Date.now() + 'killjoy',
        name: 'killjoy',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    skye: {
        id: Math.random() + Date.now() + 'skye',
        name: 'skye',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    yoru: {
        id: Math.random() + Date.now() + 'yoru',
        name: 'yoru',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    astra: {
        id: Math.random() + Date.now() + 'astra',
        name: 'astra',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    "kay_o": {
        id: Math.random() + Date.now() + 'kay/o',
        name: 'kay_o',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },  
    chamber: {
        id: Math.random() + Date.now() + 'chamber',
        name: 'chamber',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    neon: {
        id: Math.random() + Date.now() + 'neon',
        name: 'neon',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    },
    fade: {
        id: Math.random() + Date.now() + 'fade',
        name: 'fade',
        role: 'СТРАЖ',
        biography: 'Призрак из прошлого Omen наносит удары из тени. Он способен ослеплять врагов и незаметно перемещаться по полю боя, вселяя страх в сердца противников, тщетно пытающихся предугадать, откуда он нападет вновь.',
        skills: [
            {
                title: 'ПОДЪЕМ',
                descrypion: 'Jett МГНОВЕННО взлетает в воздух.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
            },
            {
                title: 'ПОПУТНЫЙ ВЕТЕР',
                descrypion: 'Jett МГНОВЕННО совершает быстрый рывок в направлении движения. Если Jett стоит на месте, то она делает рывок вперед.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
            },
            {
                title: 'ВИХРЬ',
                descrypion: 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью. УДЕРЖИВАЙТЕ клавишу умения, чтобы менять направление движения дыма с помощью прицела.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
            }, 
            {
                title: 'БУРЯ КЛИНКОВ',
                descrypion: 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника. Нажмите кнопку ОГОНЬ, чтобы бросить один кинжал в вашу цель. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы бросить в цель все оставшиеся кинжалы.',
                icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png',
                video: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
            }
        ],
    }
}

export default data