document.addEventListener("DOMContentLoaded", () => {

    function getElementDimensions(event) {
        const element = event.target;
        const rect = element.getBoundingClientRect();
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const x = rect.left + scrollLeft;
        const y = rect.top + scrollTop;
        const width = rect.width;
        const height = rect.height;
        return {
            x: x,
            y: y,
            w: width,
            h: height
        };
    }

    function drawHtmlSquare(x, y, color = 'red', size = 10) {
        const square = document.createElement('div');
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.backgroundColor = color;
        square.style.position = 'absolute';
        square.style.left = `${x}px`;
        square.style.top = `${y}px`;
        square.style.zIndex = '999';
        document.body.appendChild(square);
    }

    function drawThreeJsSquare(scene, x, y, z = 0, color = 'red') {
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
        const square = new THREE.Mesh(geometry, material);
        square.position.set(x, y, z);
        scene.add(square);
    }

    document.querySelectorAll(".easterEgg").forEach((element) => {
        element.addEventListener("click", (event) => {
            startEmojiFountain(event);
        });
    });

    function createEmojiTexture(emoji) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = 64;
        canvas.height = 64;
        context.font = "48px serif";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(emoji, canvas.width / 2, canvas.height / 2);
        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
    }

    function startEmojiFountain(event) {
        const emoji = event.currentTarget.getAttribute("emoji");

        const container = document.createElement("div");
        container.classList.add("emoji-container");
        container.style.position = "fixed";
        container.style.width = "100vw";
        container.style.height = "100vh";
        container.style.top = "0px";
        container.style.left = "0px";
        container.style.zIndex = "9999";
        document.body.appendChild(container);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(
            -window.innerWidth / 2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            -window.innerHeight / 2,
            0.1, 1000
        );
        camera.position.z = 1;
        camera.lookAt(new THREE.Vector3(0,0,0));

        const elem = getElementDimensions(event);
        const pixelX = event.offsetX + elem.x;
        const pixelY = event.offsetY + elem.y;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        const emojis = [];
        const emojiTexture = createEmojiTexture(emoji);
        const emojiGeometry = new THREE.PlaneGeometry(40, 40);
        const emojiMaterial = new THREE.MeshBasicMaterial({
            map: emojiTexture,
            transparent: true,
        });

        const calcx = pixelX - (window.innerWidth / 2) ;
        const calcy = (window.innerHeight / 2) - pixelY;

        for (let i = 0; i < 50; i++) {
            const emojiMesh = new THREE.Mesh(emojiGeometry, emojiMaterial);
            emojiMesh.position.set(calcx, calcy, -1);
            emojiMesh.userData.velocityX = (Math.random() - 0.5) * 22; // Random horizontal velocity
            emojiMesh.userData.velocityY = Math.random() * 14 + 20; // Increased initial vertical velocity for fountain effect
            scene.add(emojiMesh);
            emojis.push(emojiMesh);
        }

        let functionExecutionId = 0;
        let animId = 0;

        function animate() {
            const executionId = ++functionExecutionId;
            //console.log(`animate ${executionId}`)
            let stillAnimating = false;
            emojis.forEach((emoji) => {
                emoji.position.y += emoji.userData.velocityY;
                emoji.position.x += emoji.userData.velocityX;
                emoji.userData.velocityY -= 0.45; // gravity effect

                // check if emoji is visible
                const m = 64; // margin
                if (emoji.position.y > -window.innerHeight / 2 - m &&
                    emoji.position.x > -window.innerWidth / 2 - m &&
                    emoji.position.x < window.innerWidth / 2 + m) {
                    stillAnimating = true;
                }
            });

            renderer.render(scene, camera);

            if (stillAnimating) {
                animId = requestAnimationFrame(animate);
                //console.log(animId)
            } else {
                setTimeout(() => {
                    container.remove();
                    window.cancelAnimationFrame(animId);
                }, 10000);
            }

        }

        animate();
    }
});
