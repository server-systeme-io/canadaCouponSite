        if (location.hash == '#7F2BF697592948509856847166A7BF79') {
            togglePop();
        }
        function togglePop() {
            
            document.body.insertAdjacentHTML("beforeend", `
               
    <div class="popBg flex" onclick="togglePop();window.open(affl);this.remove()">
        <style>
            .flex {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .c {
                flex-flow: column;
            }

            .popBg.active {
                display: flex;
            }

            .popBg {
                display: none;
                background-color: #0006;
                height: 100vh;
                top: 0;
                left: 0;
                position: fixed;
                width: 100%;

                & .popPan {
                    width: 100%;
                }

                & .popBody {
                    width: 90%;
                    max-width: 700px;
                    background: #fff;
                    border-radius: 15px;
                    box-shadow: 0 10px 50px #0005;
                    padding: 20px;
                    cursor: pointer;
                }

                & img {
                    width: 300px;
                    border-radius: 15px;

                }
            }
        </style>
        <div class="popPan" align="center">
            <div class="popHead flex">
                <p></p>
            </div>
            <div class="popBody" align="center">
                <img src="/Users/priyanshu/Desktop/Screenshot 2025-10-26 at 11.49.12 AM.png" alt="">
            </div>
        </div>
    </div>
            `)
            document.querySelector(".popBg").classList.toggle("active");
        }
