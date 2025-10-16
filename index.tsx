/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- App iFrame Viewer Logic ---
    const appContainer = document.getElementById('app-container') as HTMLDivElement;
    const appIframe = document.getElementById('app-iframe') as HTMLIFrameElement;
    const appBackBtn = document.getElementById('app-back-btn') as HTMLAnchorElement;
    const openAppLinks = document.querySelectorAll('.open-app');
    const appUrl = 'https://canetada-1037926576354.us-west1.run.app/';

    if (appContainer && appIframe && appBackBtn && openAppLinks.length > 0) {
        const openApp = (e: Event) => {
            e.preventDefault();
            if (appIframe.src !== appUrl) {
                appIframe.src = appUrl;
            }
            appContainer.classList.add('is-visible');
            document.body.style.overflow = 'hidden';
        };

        const closeApp = (e: Event) => {
            e.preventDefault();
            appContainer.classList.remove('is-visible');
            document.body.style.overflow = '';
            appIframe.src = 'about:blank'; // Stop app from running
        };

        openAppLinks.forEach(link => {
            link.addEventListener('click', openApp);
        });

        appBackBtn.addEventListener('click', closeApp);
    }
    
});