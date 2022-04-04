// ==UserScript==
// @name         Reddit Place - Armée de Flashback
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  On va récuperer ce qui nous est du de droit.
// @author       Tansi
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://cdn.discordapp.com/avatars/923647901316567070/0d97eeaf1e569d36771a27559c4ef938.webp?size=100
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/Tansino/redit-place-jobless/blob/main/reddit%20jobless.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())
 
    }, false);
 
}