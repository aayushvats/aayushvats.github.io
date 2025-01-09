document.addEventListener('DOMContentLoaded', () => {

    let winIsLargerThan800 = window.innerWidth > 800;
    let winIsSmallerThan600 = window.innerWidth <= 600;

    // define the default duration and delay of all animation
    const baseDelay = 0.1;
    const baseDuration = 0.8;
    const speedDuration = 0.3;

    function loadLenis() {
        const lenis = new Lenis({
            duration: 1.2, // Customize the duration of the scroll animation
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
            direction: 'vertical', // Scroll direction
            gestureDirection: 'vertical', // Gesture direction
            smooth: true, // Enable smooth scroll
            touchSmooth: false
        });

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        lenis.scrollTo(0, {immediate: true, force:true}) // on reload the page is at the top

        return lenis;
    }
    const lenis = loadLenis();

    // create main div for the mouse effect
    const circle = document.createElement('div');

    function getTotalHeight(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            const styles = window.getComputedStyle(element);
            const margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
            const height = element.offsetHeight;
            return height + margin;
        }
        return 0;
    }

    function anchorSmoothScroll() {
        // Smooth scroll to anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const navTotalHeight = getTotalHeight('nav');
                    const offsetTop = target.getBoundingClientRect().top + window.scrollY - navTotalHeight;
                    lenis.scrollTo(offsetTop);
                }
            });
        });
    }

    function applyLinkEffect(elem) {
        elem.addEventListener('mouseover', () => {
            elem.classList.add('hovered');
            circle.style.width = '20px';
            circle.style.height = '20px';
            circle.style.borderColor = 'var(--mouse-color)';
        });
        elem.addEventListener('mouseout', () => {
            elem.classList.remove('hovered');
            circle.style.width = '30px';
            circle.style.height = '30px';
            circle.style.borderColor = 'var(--pri-color)';
        });
    }

    function cursor() {
        circle.id = 'cursor-circle';
        document.body.appendChild(circle);

        let mouseX = 0, mouseY = 0;
        let circleX = 0, circleY = 0;
        const speed = 0.08; // latency

        function updateMousePosition(e) {
            if (e.type === 'scroll') {
                return; // TODO make the circle follow the mouse on scroll
            }
            mouseY = e.pageY;
            mouseX = e.pageX;
        }

        document.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('scroll', updateMousePosition);

        function animate() {
            circleX += (mouseX - circleX) * speed;
            circleY += (mouseY - circleY) * speed;

            circle.style.left = circleX + 'px';
            circle.style.top = circleY + 'px';

            requestAnimationFrame(animate);
        }

        animate();

        const links = document.querySelectorAll('a');
        links.forEach(link => {
            applyLinkEffect(link);
        });
    }

    function tooltips() {
        const emailElement = document.getElementById('email');
        const tooltip = document.createElement('div');
        const tooltipText = document.createElement('p');

        tooltip.id = 'tooltip';
        tooltipText.textContent = 'click to copy';
        tooltip.appendChild(tooltipText);
        document.body.appendChild(tooltip);

        applyLinkEffect(emailElement);

        emailElement.addEventListener('mouseenter', function () {
            tooltip.style.display = 'flex';
        });

        emailElement.addEventListener('mouseleave', function () {
            tooltip.style.display = 'none';
        });

        emailElement.addEventListener('mousemove', function (e) {
            tooltip.style.left = e.pageX + 10 + 'px'; // 10 pixels to the right of the cursor
            tooltip.style.top = e.pageY - tooltip.offsetHeight - 10 + 'px'; // 10 pixels above the cursor
        });

        emailElement.addEventListener('click', function () {
            navigator.clipboard.writeText(emailElement.getAttribute('toCopy').toLowerCase().trim())
            tooltip.textContent = 'copied!';
            setTimeout(() => {
                tooltip.textContent = 'click to copy';
            }, 1000);
        });
    }

    function copyEmailMobileOnly() {
        const emailElement = document.getElementById('email');
        const emailAction = document.getElementById('email-action-mobile');
        let touchTimeout;

        emailElement.addEventListener('touchstart', function (event) {
            touchTimeout = setTimeout(function() {
                navigator.clipboard.writeText(emailElement.getAttribute('toCopy').toLowerCase().trim())
                emailAction.textContent = 'Copied!';
                setTimeout(() => {
                    emailAction.textContent = 'Hold to copy!';
                }, 1000);
            }, 500);
        })

        emailElement.addEventListener('touchend', function (event) {
            clearTimeout(touchTimeout);
        });
    }

    function loadGSAP() {
        gsap.registerPlugin(ScrollTrigger,Draggable,TextPlugin);
    }

    function animation() {
        // block the scroll
        lenis.stop();

        // get all the elem for the starting animation
        const nav = document.getElementById('nav');
        const loader = document.getElementById('loader');
        const bottom = document.getElementById('bottom');
        const gridLoader = document.getElementById('grid-loader');
        const intro = document.getElementById('intro');
        const name = document.getElementById('name');
        const lastname = document.getElementById('lastname');

        const nbOfCol = window.getComputedStyle(gridLoader).getPropertyValue('grid-template-columns').split(' ').length;

        let tlmain = gsap.timeline();
        let colEntrance = gsap.timeline();

        /* add the col and animate the entrance */
        for (let i = 0; i < nbOfCol; i++) {
            const loaderCol = document.createElement('div');
            loaderCol.classList.add('loader-col');
            loaderCol.classList.add(`c${i}`);
            const newChildRef = gridLoader.appendChild(loaderCol);
            colEntrance.to(newChildRef, {height: '100%', duration: baseDuration}, (baseDelay/2)*i);
        }

        /* setup the text */
        name.innerHTML = name.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        name.style.zIndex = '1';

        lastname.innerHTML = lastname.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        lastname.style.zIndex = '1';

        /* animate  the text */
        let nameEntrance = gsap.timeline();
        Array.from(name.children).forEach((e, i) => {
            if (i === 0) {
                nameEntrance.to(e, {y: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'});
            } else {
                nameEntrance.to(e, {y: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'}, `<${0.03}`);
            }
        })

        let lastnameEntrance = gsap.timeline();
        Array.from(lastname.children).forEach((e, i) => {
            if (i === 0) {
                lastnameEntrance.to(e, {y: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'});
            } else {
                lastnameEntrance.to(e, {y: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'}, `<${0.03}`);
            }
        })

        /* fade all the elements */
        let loaderFading = gsap.timeline();
        loaderFading.to(loader, {autoAlpha: 0, duration: baseDuration, ease: 'expoScale(0.5,7,none)', onComplete: () => {
                // reset all the main element
                nav.style.zIndex = 2; /* no idea why I need this to have my blur working but since it work ... */
                lenis.start();
                loader.remove();
            }})

        /* animate the rest of the hero block */
        let navEntrance = gsap.timeline();
        navEntrance.to(nav, {autoAlpha: 1, y: 0, stagger: 0.05, duration: baseDuration, ease: 'expoScale(0.5,7,none)'});

        let bottomEntrance = gsap.timeline();
        bottomEntrance.to(bottom, {autoAlpha: 1, y: 0, stagger: 0.05, duration: baseDuration, ease: 'expoScale(0.5,7,none)'});

        let introEntrance = gsap.timeline();
        let introUndEntrance = gsap.timeline();
        const introWords = intro.textContent.split(' ');
        intro.innerHTML = introWords.map((word) => {
            // For debugging
            console.log("Current word:", word);  // This will help us see exact word matches
            
            if (word === "I'm") {
                return `<span class='letter'>${word}</span>`
            } else if (word === 'a') {
                return `<span class='letter'>${word}</span>`
            } else if (word === 'Developer,') {
                return `<span class='letter underlined easterEgg dev easter-pointer' emoji='🧑‍💻'>${word}</span>`
            } else if (word === 'passionate') {
                return `<span class='letter'>${word}</span>`
            } else if (word === 'in') {
                return `<span class='letter'>${word}</span>`
            } else if (word === 'problem') {
                return `<span class='letter underlined easterEgg inno easter-pointer' emoji='💡'>${word}</span>`
            } else if (word === 'solving,') {
                return `<span class='letter easterEgg easter-pointer' emoji='💡'>${word}</span>`
            } else if (word === 'tech') {
                return `<span class='letter underlined easterEgg tech easter-pointer' emoji='🧑‍🔧'>${word}</span>`
            } else if (word === 'and') {
                return `<span class='letter'>${word}</span>`
            } else if (word === 'design') {
                return `<span class='letter underlined easterEgg design easter-pointer' emoji='🎨'>${word}</span>`
            } else if (word === 'with') {
                return `<span class='letter'>${word}</span>`
            } else if (word === 'Mobile') {
                return `<span class='letter underlined easterEgg pm easter-pointer' emoji='📱'>${word}</span>`
            } else if (word === 'Technologies.') {
                return `<span class='letter easterEgg easter-pointer' emoji='📱'>${word}</span>`
            } else {
                return `<span class='letter'>${word}</span>`
            }
        }).join(' ');
        Array.from(intro.children).forEach((e, i) => {
            if (i === 0) {
                introEntrance.to(e, {y: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'});
            } else {
                introEntrance.to(e, {y: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'}, `<${0.03}`);
            }
            if (e.classList.contains('pm')) {
                introUndEntrance.to(e, {'--pm-dur': `${!winIsSmallerThan600 ? 200 : 80}%`, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'});
            } else if (e.classList.contains('dev')) {
                introUndEntrance.to(e, {'--dev-dur': '80%', stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'});
            } else if (e.classList.contains('underlined')) {
                introUndEntrance.to(e, {'--und-dur': '95%', stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'});
            }
        })

        /* get all the other text to animate */
        const textHC = document.getElementsByClassName('animate-text-hc');
        const titleHC = document.getElementsByClassName('animate-title-hc');

        Array.from(titleHC).forEach((el, i) => {
            el.innerHTML = el.textContent.replace(/\S/g, "<span class='animated-letter'>$&</span>");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    scrub: false,
                    toggleAction: 'play',
                    markers: false
                }
            });
            Array.from(el.children).forEach((e, i) => {
                if (i === 0) {
                    tl.to(e, {y: 0, stagger: 0.05, autoAlpha: 1, duration: baseDuration, ease: 'expoScale(0.5,7,none)'});
                } else {
                    tl.to(e, {y: 0, stagger: 0.05, autoAlpha: 1, duration: baseDuration, ease: 'expoScale(0.5,7,none)'}, `<${0.03}`);
                }
                if (e.classList.contains('underlined')) {
                    introUndEntrance.to(e, {'--und-dur': '95%', stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'});
                }
            })
        })

        Array.from(textHC).forEach((el, i) => {
            const elWords = el.textContent.split(' ');
            el.innerHTML = elWords.map(word => `<span class='animated-word'>${word}</span>`).join(' ');
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    scrub: false,
                    toggleAction: 'play',
                    markers: false
                }
            });
            Array.from(el.children).forEach((e, i) => {
                if (i === 0) {
                    tl.to(e, {y: 0, stagger: 0.05, autoAlpha: 1, duration: baseDuration, ease: 'expoScale(0.5,7,none)'});
                } else {
                    tl.to(e, {y: 0, stagger: 0.05, autoAlpha: 1, duration: baseDuration, ease: 'expoScale(0.5,7,none)'}, `<${0.03/elWords.length}`);
                }
                if (e.classList.contains('underlined')) {
                    introUndEntrance.to(e, {'--und-dur': '95%', stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'});
                }
            })
        })

        /* animate footer */
        const footer = document.getElementById('grid-footer');
        const textFooter = document.getElementsByClassName('text-footer');
        const ftl = gsap.timeline({
            scrollTrigger: {
                trigger: footer,
                start: 'top bottom',
                scrub: false,
                toggleAction: 'play',
                markers: false
            }
        });
        ftl.to(footer, {y: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'});
        Array.from(textFooter).forEach((e) => {
            ftl.to(e, {y: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'});
        })

        /* animate the img */
        const images = document.querySelectorAll('img');

        function loadImage(img) {
            return new Promise((resolve) => {
                if (img.complete) {
                    resolve();
                } else {
                    img.onload = () => resolve();
                    img.onerror = () => resolve(); // Gérer les erreurs de chargement
                }
            });
        }

        function clamp(number, min, max) {
            return Math.max(min, Math.min(number, max));
        }

        async function processImages() {
            for (const img of images) {
                await loadImage(img);

                // get the img h & w and calculate the aspect
                const imgWidth = img.width;
                const imgHeight = img.height;
                const imgAspect = imgWidth / imgHeight;
                const imgSrc = img.src;

                // create a canvas w/ the same size of the img
                const canvas = document.createElement('canvas');
                canvas.width = imgWidth;
                canvas.height = imgHeight;
                // canvas.style.visibility = 'hidden';
                // canvas.style.transform = 'translateX(100%)';

                // replace the img by the canva
                img.parentNode.replaceChild(canvas, img);

                // init the rendering of three.js
                const renderer = new THREE.WebGLRenderer({ canvas: canvas });
                renderer.setSize(imgWidth, imgHeight);

                // init scene, camera and light
                const scene = new THREE.Scene();
                const camera = new THREE.OrthographicCamera(-imgAspect, imgAspect, 1, -1, 0.1, 10);
                camera.position.z = 1;

                // load the img texture
                const textureLoader = new THREE.TextureLoader();
                textureLoader.load(imgSrc, function (imgTexture) {
                    // create a material from the img
                    const imgMaterial = new THREE.MeshBasicMaterial({ map: imgTexture });

                    // create a plane geometry of the same size has the canva
                    const geometry = new THREE.PlaneGeometry(2 * imgAspect, 2);

                    // create mesh and add it to the scene
                    const mesh = new THREE.Mesh(geometry, imgMaterial);
                    scene.add(mesh);

                    // Variables for grid and mouse interaction
                    let gridTexture;
                    let mouse = { x: 0, y: 0, vX: 0, vY: 0 };
                    let prevMouse = { x: 0, y: 0 };

                    const settings = {
                        relaxation: 0.96,
                        mouse: 0.11,
                        strength: 0.36,
                        size: 607
                    };

                    /**
                     * generate the grid texture (dataTexture) in function of the parameter
                     */
                    function generateGrid() {
                        const size = settings.size * settings.size;
                        const data = new Float32Array(4 * size);

                        for (let i = 0; i < size; i++) {
                            const stride = i * 4;
                            let r = Math.random() * 255 - 125;
                            let g = Math.random() * 255 - 125;
                            let b = r;

                            data[stride] = r; // red, and also X
                            data[stride + 1] = g; // green, and also Y
                            data[stride + 2] = b; // blue
                        }

                        gridTexture = new THREE.DataTexture(data, settings.size, settings.size, THREE.RGBAFormat, THREE.FloatType);
                        gridTexture.needsUpdate = true;
                    }

                    /**
                     * generate the grid texture and add the texture to the scene
                     */
                    function addObjects() {
                        generateGrid();
                        imgTexture.needsUpdate = true;
                        const vertexShader = document.getElementById('vertexShader').textContent;
                        const fragmentShader = document.getElementById('fragmentShader').textContent;

                        const randomMaterial = new THREE.ShaderMaterial({
                            extensions: {
                                derivatives: "#extension GL_OES_standard_derivatives : enable"
                            },
                            side: THREE.DoubleSide,
                            uniforms: {
                                time: {
                                    value: 0
                                },
                                resolution: {
                                    value: new THREE.Vector4(1, 1, 1, 1)
                                },
                                uTexture: {
                                    value: imgTexture
                                },
                                uDataTexture: {
                                    value: gridTexture
                                },
                            },
                            vertexShader,
                            fragmentShader
                        });
                        const randomGeometry = new THREE.PlaneGeometry(2 * imgAspect, 2);
                        //const randomGeometry = new THREE.PlaneGeometry(1);
                        const randomMesh = new THREE.Mesh(randomGeometry, randomMaterial);
                        scene.add(randomMesh);
                    }

                    /**
                     * update the texture in fc of the mouse movement
                     */
                    function updateDataTexture() {
                        let data = gridTexture.image.data;

                        for (let i = 0; i < data.length; i += 4) {
                            data[i] *= settings.relaxation;
                            data[i + 1] *= settings.relaxation;
                        }

                        let gridMouseX = settings.size * mouse.x;
                        let gridMouseY = settings.size * (1 - mouse.y);
                        let maxDist = settings.size * settings.mouse;
                        let aspect = imgHeight / imgWidth;

                        for (let i = 0; i < settings.size; i++) {
                            for (let j = 0; j < settings.size; j++) {

                                let distance = ((gridMouseX - i) ** 2) / aspect + (gridMouseY - j) ** 2;
                                let maxDistSq = maxDist ** 2;

                                if (distance < maxDistSq) {

                                    let index = 4 * (i + settings.size * j);

                                    let power = maxDist / Math.sqrt(distance);
                                    power = clamp(power, 0, 10);

                                    data[index] += settings.strength * 100 * mouse.vX * power;
                                    data[index + 1] -= settings.strength * 100 * mouse.vY * power;
                                }
                            }
                        }

                        mouse.vX *= 0.9;
                        mouse.vY *= 0.9;
                        gridTexture.needsUpdate = true;
                    }

                    /**
                     * render all the stuff
                     */
                    function render() {
                        updateDataTexture();
                        renderer.render(scene, camera);
                        requestAnimationFrame(render);
                    }

                    /**
                     * update the coordinate of the mouse for is position into the canvas
                     * @param event
                     */
                    function updateMousePosition(event) {
                        const rect = canvas.getBoundingClientRect();
                        mouse.x = (event.clientX - rect.left) / imgWidth;
                        mouse.y = (event.clientY - rect.top) / imgHeight;

                        mouse.vX = mouse.x - prevMouse.x;
                        mouse.vY = mouse.y - prevMouse.y;

                        prevMouse.x = mouse.x;
                        prevMouse.y = mouse.y;
                    }

                    canvas.addEventListener('mousemove', event => {
                        updateMousePosition(event);
                    });

                    /**
                     * first add the object then render it
                     */
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: canvas.parentElement,
                            start: 'top 90%',
                            scrub: false,
                            toggleAction: 'play',
                            markers: false
                        }
                    });

                    addObjects();
                    render(canvas);

                    tl.to(canvas.parentElement, {y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.5, ease: 'expoScale(0.5,7,none)'});
                });
            }
        }

        if (winIsLargerThan800) {
            processImages();
        } else {
            for (const img of images) {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: 'top 90%',
                        scrub: false,
                        toggleAction: 'play',
                        markers: false
                    }
                });
                tl.to(img.parentElement, {y: 0, display: 'initial', autoAlpha: 1, stagger: 0.05, duration: 0.5, ease: 'expoScale(0.5,7,none)'});
            }
        }

        /* add all the secondary timeline to the main */
        tlmain
            .add(colEntrance,      'seqA')
            .add(nameEntrance,     'seqB')
            .add(lastnameEntrance, 'seqB')
            .add(loaderFading,     'seqC')
            .add(navEntrance,      'seqC')
            .add(bottomEntrance,   'seqC')
            .add(introEntrance,    'seqC')
            .add(introUndEntrance, 'seqD')
        ;
    }

    function mobileMenu() {
        const actionMenu = document.getElementById('menu');
        const menu = document.getElementById('nav-s');
        const cross = document.getElementById('cross');
        const version = document.getElementById('version-s');
        const links = document.getElementsByClassName('link-s');
        const menuTl = gsap.timeline({
            onReverseComplete: () => {
                menuTl.clear()
            }
        });

        function execEnter() {
            menu.style.display = 'block';
            lenis.stop();
            if (menuTl.reverse()) {
                menuTl.play()
            }
            menuTl.to(menu, {y: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'})
                .to(cross, {y: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'})
                .to(version, {y: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'})
                .to(links, {x: 0, stagger: 0.05, autoAlpha: 1, duration: speedDuration, ease: 'expoScale(0.5,7,none)'});
        }

        function execExit() {
            menuTl.reverse();
            lenis.start();
        }

        actionMenu.addEventListener("touchstart", () => execEnter());
        actionMenu.addEventListener("click", () => execEnter());
        cross.addEventListener("touchstart", () => execExit());
        cross.addEventListener("click", () => execExit());

        Array.from(links).forEach((link) => {
            link.addEventListener("touchstart", () => {
                menuTl.reverse();
                lenis.start();
            })
        })
    }

    function fixSpace() {
        const fixs = document.getElementsByClassName('fix-s');
        Array.from(fixs).forEach((fix) => {
            Array.from(fix.childNodes).forEach((node, i) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    let br = document.createElement('br');
                    fix.replaceChild(br, fix.childNodes[i]);
                }
            })
        })
    }

    animation();
    anchorSmoothScroll();

    if (winIsLargerThan800) {
        cursor();
        tooltips();
        loadGSAP();
    } else {
        fixSpace();
        copyEmailMobileOnly();
        mobileMenu();
    }

    /**
     * reload for the mobile version
     */
    window.addEventListener("resize", () => {
        if (winIsLargerThan800 !== window.innerWidth > 800 || winIsSmallerThan600 !== window.innerWidth <= 600) {
            window.location.reload();
            winIsLargerThan800 = window.innerWidth > 800;
            winIsSmallerThan600 = window.innerWidth <= 600;
        }
    })

})
